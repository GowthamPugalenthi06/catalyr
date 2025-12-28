import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Groq } from 'groq-sdk';

const _dirname = typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// Load embeddings.json safely
const embeddingsPath = path.join(_dirname, "data", "embeddings.json");
const embeddings = JSON.parse(fs.readFileSync(embeddingsPath, "utf-8"));

let groq;

export const handler = async (event) => {
    if (!groq) {
        groq = new Groq({
            apiKey: process.env.GROQ_API_KEY,
        });
    }
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    try {
        const { message } = JSON.parse(event.body || "{}");
        if (!message) {
            return {
                statusCode: 400,
                body: JSON.stringify({ reply: "Message is required" }),
            };
        }

        // 🔹 Keyword-based Retrieval (Option A - Fast Fix)
        // We use simple keyword matching to ensure the most relevant chunks are found.
        function scoreByKeyword(query, text) {
            const q = query.toLowerCase();
            const t = text.toLowerCase();
            let score = 0;
            // Split by space, filter empty and short words
            q.split(" ").filter(w => w.trim().length > 2).forEach(word => {
                if (t.includes(word)) score += 1;
            });
            return score;
        }

        console.log("Received message:", message);
        console.log("Search terms:", message.toLowerCase().split(" ").filter(w => w.trim() !== ""));

        const scored = embeddings.map((chunk) => ({
            ...chunk,
            score: scoreByKeyword(message, chunk.text),
        }));

        // Sort by score descending
        scored.sort((a, b) => b.score - a.score);

        // Take top 3
        const topChunks = scored.slice(0, 3);
        const contextText = topChunks.map(c => c.text).join("\n\n");

        console.log("Top 3 chunks:");
        topChunks.forEach(c => console.log(`- ID: ${c.id}, Score: ${c.score}, Preview: ${c.text.substring(0, 50)}...`));
        console.log("Context sent to LLM:\n", contextText);

        const completion = await groq.chat.completions.create({
            model: "llama-3.1-8b-instant",
            messages: [
                {
                    role: "system",
                    content: `You are the official AI assistant for Catalyr.

Rules:
- Answer ONLY using the provided context.
- Do NOT speculate or suggest pages, files, or components.
- If the answer exists in the context, state it clearly.
- If it does not exist, reply exactly:
  "That information is not available."

Context:
${contextText}`,
                },
                { role: "user", content: message },
            ],
        });

        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                reply: completion.choices[0].message.content,
                debug_info: {
                    topChunks: topChunks.map(c => ({ id: c.id, score: c.score, textPreview: c.text.substring(0, 50) })),
                    contextLength: contextText.length,
                    contextPreview: contextText.substring(0, 100)
                }
            }),
        };

    } catch (err) {
        console.error(err);
        return {
            statusCode: 500,
            body: JSON.stringify({ reply: "Internal server error" }),
        };
    }
};
