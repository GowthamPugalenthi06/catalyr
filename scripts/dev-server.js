import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import * as chatbotFunction from '../netlify/functions/chatbot.js';

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

// Adapter for Netlify Functions (Old API: exports.handler)
app.all('/.netlify/functions/chatbot', async (req, res) => {
    try {
        // Construct Netlify "event" object
        const event = {
            path: req.path,
            httpMethod: req.method,
            headers: req.headers,
            queryStringParameters: req.query,
            body: req.method !== 'GET' && req.method !== 'HEAD' ? JSON.stringify(req.body) : null,
            isBase64Encoded: false,
        };

        // Call the function
        const response = await chatbotFunction.handler(event, context);

        // Send response
        if (response.headers) {
            Object.entries(response.headers).forEach(([key, value]) => {
                res.setHeader(key, value);
            });
        }
        res.status(response.statusCode || 200).send(response.body);

    } catch (error) {
        console.error('Local Function Error:', error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Local function server running on http://localhost:${PORT}`);
});
