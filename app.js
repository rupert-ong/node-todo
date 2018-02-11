const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
  res.status(200).sendFile(__dirname + '/index.html');
});

app.get('/contact', (req, res, next) => {
  res.status(200).sendFile(__dirname + '/contact.html');
});

app.get('/profile/:name', (req, res, next) => {
  const data = {age:29, job: 'ninja'};
  res.render('profile', {
    person: req.params.name,
    data: data
  });
});

app.listen(3000, () => {
  console.log(`Express app is listening on port 3000`);
});

module.exports = app;