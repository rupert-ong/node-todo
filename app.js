const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-type': 'text/plain'
  });
  res.end('Hello world');
});

const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

server.listen(3000, '127.0.0.1', () => {
  console.log(`Listening on ${host}:${port}`);
});