const fs = require("fs");
const path = require("path");
const { Groq } = require("groq-sdk");

// Load embeddings.json safely
const embeddingsPath = path.join(__dirname, "data", "embeddings.json");
const embeddings = JSON.parse(fs.readFileSync(embeddingsPath, "utf-8"));

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

// Cosine similarity
function cosineSimilarity(a, b) {
    let dot = 0, na = 0, nb = 0;
    for (let i = 0; i < a.length; i++) {
        dot += a[i] * b[i];
        na += a[i] * a[i];
        nb += b[i] * b[i];
    }
    return dot / (Math.sqrt(na) * Math.sqrt(nb));
}

exports.handler = async (event) => {
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

        // 🔹 Retrieve top chunks (simple + safe)
        // Note: This logic currently compares chunks to themselves as requested by the user's snippet.
        // Real RAG would require generating an embedding for 'message' here.
        const scored = embeddings.map((chunk) => ({
            ...chunk,
            score: cosineSimilarity(chunk.embedding, chunk.embedding),
        }));

        scored.sort((a, b) => b.score - a.score);
        const contextText = scored.slice(0, 3).map(c => c.text).join("\n\n");

        const completion = await groq.chat.completions.create({
            model: "llama-3.1-8b-instant",
            messages: [
                {
                    role: "system",
                    content: `You are the Catalyr website assistant.
Answer ONLY using the context below.
If the answer is not found, say you don't know.

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
