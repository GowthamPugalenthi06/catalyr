import fs from "fs";
import path from "path";
import { Groq } from "groq-sdk";

const embeddingsPath = path.join(process.cwd(), "api", "data", "embeddings.json");
const embeddings = JSON.parse(fs.readFileSync(embeddingsPath, "utf-8"));

let groq;

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    try {
        if (!groq) {
            groq = new Groq({
                apiKey: process.env.GROQ_API_KEY,
            });
        }

        const { message } = req.body || {};
        if (!message) {
            return res.status(400).json({ reply: "Message is required" });
        }

        // Greetings
        const greetings = ["hi", "hello", "hey", "greetings", "good morning", "good afternoon", "good evening"];
        if (greetings.includes(message.toLowerCase().trim().replace(/[!.]/g, ""))) {
            return res.status(200).json({
                reply:
                    "Hi! I'm the Catalyr AI assistant. I can answer questions about our services, engineering philosophy, and how we work. How can I help you today?",
            });
        }

        // Keyword scoring
        function scoreByKeyword(query, text) {
            const q = query.toLowerCase();
            const t = text.toLowerCase();
            let score = 0;
            q.split(" ").filter(w => w.length > 2).forEach(word => {
                if (t.includes(word)) score++;
            });
            return score;
        }

        const scored = embeddings.map(chunk => ({
            ...chunk,
            score: scoreByKeyword(message, chunk.text),
        }));

        scored.sort((a, b) => b.score - a.score);
        const topChunks = scored.slice(0, 3);
        const contextText = topChunks.map(c => c.text).join("\n\n");

        const completion = await groq.chat.completions.create({
            model: "llama-3.1-8b-instant",
            messages: [
                {
                    role: "system",
                    content: `You are the official AI assistant for Catalyr.

Rules:
- Answer ONLY using the provided context.
- Do NOT speculate.
- If info does not exist, reply exactly:
  "That information is not available."

Context:
${contextText}`,
                },
                { role: "user", content: message },
            ],
        });

        return res.status(200).json({
            reply: completion.choices[0].message.content,
        });

    } catch (err) {
        console.error("Chatbot error:", err);
        return res.status(500).json({ reply: "Internal server error" });
    }
}
