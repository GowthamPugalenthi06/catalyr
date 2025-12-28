import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from '@xenova/transformers';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFile = path.join(__dirname, '../rag-data/chunks.json');
const outputFile = path.join(__dirname, '../rag-data/embeddings.json');

async function generateEmbeddings() {
    try {
        const chunks = JSON.parse(fs.readFileSync(inputFile, 'utf-8'));

        // Use a small model for embeddings
        console.log('Loading model...');
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
    } catch (error) {
        console.error('Error generating embeddings:', error);
    }
}

generateEmbeddings();
