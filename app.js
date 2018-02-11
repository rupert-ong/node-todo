const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.status(200).sendFile(__dirname + '/index.html');
});

app.get('/contact', (req, res, next) => {
  res.status(200).sendFile(__dirname + '/contact.html');
});

app.get('/profile/:id', (req, res, next) => {
  res.status(200).send(`You requested to see a profile with id ${req.params.id}`);
});

app.listen(3000, () => {
  console.log(`Express app is listening on port 3000`);
})


module.exports = app;