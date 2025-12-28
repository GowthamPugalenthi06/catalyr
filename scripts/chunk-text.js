import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFile = path.join(__dirname, '../rag-data/catalyr.txt');
const outputFile = path.join(__dirname, '../rag-data/chunks.json');

const CHUNK_SIZE = 500; // Characters
const OVERLAP = 50;

function chunkText(text) {
    const chunks = [];
    let start = 0;

    while (start < text.length) {
        const end = Math.min(start + CHUNK_SIZE, text.length);
        let chunk = text.slice(start, end);

        // Try to break at a sentence or space
        const lastSpace = chunk.lastIndexOf(' ');
        if (lastSpace > CHUNK_SIZE * 0.8 && end < text.length) {
            chunk = chunk.slice(0, lastSpace);
            start += lastSpace + 1 - OVERLAP;
        } else {
            start += CHUNK_SIZE - OVERLAP;
        }

        chunks.push({
            id: chunks.length,
            text: chunk.trim(),
            source: 'catalyr.txt' // Could be more specific if we parsed the source headers
        });
    }
    return chunks;
}

async function main() {
    try {
        const text = fs.readFileSync(inputFile, 'utf-8');
        const chunks = chunkText(text);
        fs.writeFileSync(outputFile, JSON.stringify(chunks, null, 2));
        console.log(`Generated ${chunks.length} chunks to ${outputFile}`);
    } catch (error) {
        console.error('Error chunking text:', error);
    }
}

main();
