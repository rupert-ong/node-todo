const http = require('http');
const fs = require('fs');

// Streams
const readStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
const writeStream = fs.createWriteStream(__dirname + '/writeme.txt', 'utf8');

readStream.on('data', (chunk) => {
  console.warn('New data received');
  // console.log(chunk);
  writeStream.write(chunk, () => {
    console.log('Chunk written to file');
  })
});

// Server
/* const server = http.createServer((req, res) => {
  console.log(`Request was made ${req.url}`);
  res.writeHead(200, {
    'Content-type': 'text/plain'
  });
  res.end('Hello world');
});

const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

// set PORT=5000 && set HOST=127.0.0.1 && node app
server.listen(port, host, () => {
  console.log(`Listening on ${host}:${port}`);
}); */