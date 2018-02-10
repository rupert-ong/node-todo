const http = require('http');
const fs = require('fs');

// Server
const server = http.createServer((req, res) => {
  const readStream = fs.createReadStream(__dirname + '/index.html', 'utf8');

  // Pipe readable stream into response (a writable stream)
  readStream.pipe(res);

  console.log(`Request was made ${req.url}`);
  res.writeHead(200, { 'Content-type': 'text/html' });
});

const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

// set PORT=5000 && set HOST=127.0.0.1 && node app
server.listen(port, host, () => {
  console.log(`Listening on ${host}:${port}`);
});