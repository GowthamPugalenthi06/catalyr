import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, '../pages');
const outputFile = path.join(__dirname, '../rag-data/catalyr.txt');

// Simple function to strip HTML/JSX tags
function stripTags(content) {
    return content
        .replace(/<[^>]*>/g, ' ') // Replace tags with space
        .replace(/\{[^}]*\}/g, ' ') // Replace JS expressions in JSX with space (rough)
        .replace(/\s+/g, ' ') // Collapse whitespace
        .trim();
}

async function extractContent() {
    try {
        const files = fs.readdirSync(pagesDir);
        let fullText = '';

        for (const file of files) {
            if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
                const content = fs.readFileSync(path.join(pagesDir, file), 'utf-8');
                const cleanText = stripTags(content);
                fullText += `--- Source: ${file} ---\n${cleanText}\n\n`;
            }
        }

        fs.writeFileSync(outputFile, fullText);
        console.log(`Extracted content to ${outputFile}`);
    } catch (error) {
        console.error('Error extracting content:', error);
    }
}

extractContent();
