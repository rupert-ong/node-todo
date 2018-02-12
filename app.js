const express = require('express');
const app = express();

// set up template engine
app.set('view engine', 'ejs');

// static files routing
app.use(express.static('./public'));

// listen to port
app.listen(3000, () => {
  console.log(`Express app is listening on port 3000`);
});