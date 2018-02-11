const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.status(200);
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact', (req, res, next) => {
  res.status(200);
  res.sendFile(__dirname + '/contact.html');
});

app.listen(3000, () => {
  console.log(`Express app is listening on port 3000`);
})


module.exports = app;