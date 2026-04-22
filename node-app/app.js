const http = require('http');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Success! Node.js Output is Live 🚀</h1>');
});
server.listen(3000, '0.0.0.0', () => {
    console.log('Server is running...');
});
