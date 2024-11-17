import express from 'express';
import http from 'http';
import WebSocket from 'ws';

const app = express();
const server = http.createServer(app);

// Create WebSocket server instances
const wssA = new WebSocket.Server({ noServer: true });
const wssB = new WebSocket.Server({ noServer: true });

// Handle WebSocket connections for /wsA
wssA.on('connection', (ws) => {
    console.log('Client connected to /wsA');
    ws.on('message', (message) => {
        console.log(`Received on /wsA: ${message}`);
        ws.send(`Echo from /wsA: ${message}`);
    });
});

// Handle WebSocket connections for /wsB
wssB.on('connection', (ws) => {
    console.log('Client connected to /wsB');
    ws.on('message', (message) => {
        console.log(`Received on /wsB: ${message}`);
        ws.send(`Echo from /wsB: ${message}`);
    });
});

// Upgrade HTTP server to handle WebSocket connections
server.on('upgrade', (request, socket, head) => {
    if (request.url === '/wsA') {
        wssA.handleUpgrade(request, socket, head, (ws) => {
            wssA.emit('connection', ws, request);
        });
    } else if (request.url === '/wsB') {
        wssB.handleUpgrade(request, socket, head, (ws) => {
            wssB.emit('connection', ws, request);
        });
    } else {
        socket.destroy(); // Close the socket if the URL doesn't match
    }
});

// Start the HTTP server
server.listen(8080, () => {
    console.log('Server is listening on port 8080');
});

// Basic route for testing
app.get('/', (req, res) => {
    res.send('WebSocket server running. Connect to /wsA or /wsB.');
});