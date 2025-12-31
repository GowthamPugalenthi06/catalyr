import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import chatbotHandler from '../api/chat.js';
import contactHandler from '../api/contact.js';

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

app.all('/api/contact', async (req, res) => {
    try {
        await contactHandler(req, res);
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
