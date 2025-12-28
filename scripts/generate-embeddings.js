import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFile = path.join(__dirname, '../rag-data/chunks.json');
const outputFile = path.join(__dirname, '../rag-data/embeddings.json');

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "text-embedding-004" });

async function generateEmbeddings() {
    try {
        if (!process.env.GEMINI_API_KEY) {
            throw new Error("GEMINI_API_KEY is missing in .env");
        }

        const chunks = JSON.parse(fs.readFileSync(inputFile, 'utf-8'));
        const embeddings = [];

        console.log(`Generating embeddings for ${chunks.length} chunks using Gemini...`);

        // Process in batches to avoid rate limits if necessary, but for 11 chunks it's fine.
        for (const chunk of chunks) {
            const result = await model.embedContent(chunk.text);
            const embedding = result.embedding.values;

            embeddings.push({
                id: chunk.id,
                text: chunk.text,
                embedding: embedding
            });
            process.stdout.write('.');
            // Small delay to be safe
            await new Promise(resolve => setTimeout(resolve, 200));
        }

        fs.writeFileSync(outputFile, JSON.stringify(embeddings, null, 2));
        console.log(`\nSaved embeddings to ${outputFile}`);
    } catch (error) {
        console.error('Error generating embeddings:', error);
    }
}

generateEmbeddings();
