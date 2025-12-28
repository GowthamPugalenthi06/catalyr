import { Groq } from 'groq-sdk';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const embeddings = require('./data/embeddings.json');

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const embeddingModel = genAI.getGenerativeModel({ model: "text-embedding-004" });

// Cosine similarity function
function cosineSimilarity(a, b) {
    let dotProduct = 0;
    let normA = 0;
    let normB = 0;
    for (let i = 0; i < a.length; i++) {
        dotProduct += a[i] * b[i];
        normA += a[i] * a[i];
        normB += b[i] * b[i];
    }
    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

export default async (req, context) => {
    if (req.method !== 'POST') {
        return new Response('Method Not Allowed', { status: 405 });
    }

    try {
        const { message } = await req.json();

        if (!message) {
            return new Response('Message is required', { status: 400 });
        }

        // 1. Generate embedding for the query using Gemini
        const result = await embeddingModel.embedContent(message);
        const queryEmbedding = result.embedding.values;

        // 2. Find relevant chunks
        const scoredChunks = embeddings.map(chunk => ({
            ...chunk,
            score: cosineSimilarity(queryEmbedding, chunk.embedding),
        }));

        // Sort by score and take top 3
        scoredChunks.sort((a, b) => b.score - a.score);
        const topChunks = scoredChunks.slice(0, 3);

        const contextText = topChunks.map(c => c.text).join('\n\n');

        // 3. Generate response with Groq
        const completion = await groq.chat.completions.create({
            messages: [
                {
                    role: 'system',
                    content: `You are a helpful assistant for the Catalyr website. Use the following context to answer the user's question. If the answer is not in the context, say you don't know but offer to contact support. Keep answers concise and professional.\n\nContext:\n${contextText}`,
                },
                {
                    role: 'user',
                    content: message,
                },
            ],
            model: 'llama-3.3-70b-versatile',
        });

        const reply = completion.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response.";

        return new Response(JSON.stringify({ reply }), {
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('Error:', error);
        return new Response(JSON.stringify({ reply: `Error: ${error.message} - ${JSON.stringify(error)}` }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    }
};
