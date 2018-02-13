const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const todoRoutes = require('./routes/todoRoutes');

// Express Set up
app.set('view engine', 'ejs');

// DB Setup
mongoose.connect(process.env.MONGODB_CONNECTION);
mongoose.Promise = global.Promise;

// Middleware
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

// Routes
app.use('/todo', todoRoutes);

// Listen to port
app.listen(3000, () => {
  console.log(`Express app is listening on port 3000`);
});