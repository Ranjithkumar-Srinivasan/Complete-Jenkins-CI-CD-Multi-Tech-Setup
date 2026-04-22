const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Node.js App Running 🚀</h1><p>Output from Jenkins Pipeline Success!</p>');
});

// Port 3000 is standard for Node.js
server.listen(3000, '0.0.0.0', () => {
    console.log('Server running at http://98.93.50.93:3000/');
});
