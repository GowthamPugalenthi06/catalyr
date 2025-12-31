import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chatbotHandler from '../api/chat.js';

dotenv.config();

const app = express();
const PORT = 8888;

app.use(cors());
app.use(express.json());

// Adapter for Vercel API Routes
app.all('/api/chat', async (req, res) => {
    try {
        await chatbotHandler(req, res);
    } catch (error) {
        console.error('Local Function Error:', error);
        if (!res.headersSent) {
            res.status(500).json({ error: 'Internal Server Error', details: error.message });
        }
    }
});

app.listen(PORT, () => {
    console.log(`Local function server running on http://localhost:${PORT}`);
});
