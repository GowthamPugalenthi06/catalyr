import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from '@xenova/transformers';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFile = path.join(__dirname, '../rag-data/chunks.json');
const outputFile = path.join(__dirname, '../rag-data/embeddings.json');
const functionOutputFile = path.join(__dirname, '../netlify/functions/data/embeddings.json');

async function generateEmbeddings() {
    try {
        const chunks = JSON.parse(fs.readFileSync(inputFile, 'utf-8'));

        console.log('Loading embedding model (Xenova/all-MiniLM-L6-v2)...');
        const extractor = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');

        const embeddings = [];

        console.log(`Generating embeddings for ${chunks.length} chunks...`);
        for (const chunk of chunks) {
            const output = await extractor(chunk.text, { pooling: 'mean', normalize: true });
            embeddings.push({
                id: chunk.id,
                text: chunk.text,
                embedding: Array.from(output.data)
            });
            if (embeddings.length % 10 === 0) process.stdout.write('.');
        }

        fs.writeFileSync(outputFile, JSON.stringify(embeddings, null, 2));
        console.log(`\nSaved embeddings to ${outputFile}`);

        // Ensure directory exists
        const functionDir = path.dirname(functionOutputFile);
        if (!fs.existsSync(functionDir)) {
            fs.mkdirSync(functionDir, { recursive: true });
        }
        fs.writeFileSync(functionOutputFile, JSON.stringify(embeddings, null, 2));
        console.log(`Saved embeddings to ${functionOutputFile}`);
    } catch (error) {
        console.error('Error generating embeddings:', error);
    }
}

generateEmbeddings();
