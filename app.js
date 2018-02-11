const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static('public/assets/'));

app.get('/', (req, res, next) => {
  res.render('index', { title:'Homepage' });
});

app.get('/contact', (req, res, next) => {
  res.render('contact', { title: 'Contact Us'} );
});

app.get('/profile/:name', (req, res, next) => {
  const data = {age:29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
  res.render('profile', {
    title: `Profile of ${req.params.name}`,
    person: req.params.name,
    data: data
  });
});

app.listen(3000, () => {
  console.log(`Express app is listening on port 3000`);
});

module.exports = app;