import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chatbotFunction from '../netlify/functions/chatbot.js';

dotenv.config();

const app = express();
const PORT = 8888;

app.use(cors());
app.use(express.json());

// Mock the Netlify function context
const context = {
    clientContext: {},
    functionName: 'chatbot',
    functionVersion: '1',
    memoryLimitInMB: 1024,
    awsRequestId: 'mock-request-id',
    logStreamName: 'mock-log-stream',
};

// Wrapper to adapt Express req/res to Netlify function signature (if it was using the old handler style, but we used the standard Request/Response API which is newer)
// Wait, my chatbot.js uses `export default async (req, context) => { ... return new Response(...) }`
// This is the standard Web API format used by Netlify Edge Functions or newer Functions.
// Express doesn't natively support passing a `Request` object and expecting a `Response` object return in the same way without adaptation.

// Adapter for Web API style functions
app.all('/.netlify/functions/chatbot', async (req, res) => {
    try {
        // Construct a standard Request object from Express req
        const url = `http://${req.headers.host}${req.url}`;
        const options = {
            method: req.method,
            headers: req.headers,
            body: req.method !== 'GET' && req.method !== 'HEAD' ? JSON.stringify(req.body) : undefined,
        };

        // Note: Express parses body already if json() middleware is used. 
        // If we use `req.body` in the options, it should be stringified if the function expects to call `req.json()`.
        // However, `new Request` body cannot be set for GET/HEAD.

        const webReq = new Request(url, options);

        const response = await chatbotFunction(webReq, context);

        // Convert Web Response back to Express res
        response.headers.forEach((value, key) => {
            res.setHeader(key, value);
        });

        res.status(response.status);

        const text = await response.text();
        res.send(text);

    } catch (error) {
        console.error('Local Function Error:', error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Local function server running on http://localhost:${PORT}`);
});
