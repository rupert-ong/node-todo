const http = require('http');
const fs = require('fs');

// Server
const server = http.createServer((req, res) => {
  if (req.url === '/home' || req.url === '/') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if (req.url === '/contact') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  } else if (req.url === '/api/authors') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    var obj = {
      name: 'Roman Mars',
      job: 'Podcaster',
      age: 30
    }
    res.end(JSON.stringify(obj));
  } else {
    res.writeHead(404, { 'Content-type': 'text/html' });
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});

const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

// set PORT=5000 && set HOST=127.0.0.1 && node app
server.listen(port, host, () => {
  console.log(`Listening on ${host}:${port}`);
});