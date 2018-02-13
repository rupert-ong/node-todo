const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Todo = require('../models/todo');

const urlEncoder = bodyParser.urlencoded({ extended: false });

mongoose.connect(process.env.MONGODB_CONNECTION);
mongoose.Promise = global.Promise;

module.exports = function (app) {
  app.get('/todo', (req, res) => {
    Todo.find()
      .exec()
      .then(todos => {
        res.status(200).render('todo', { todos: todos });
      })
      .catch(err => {
        res.status(200).render('todo', { todos: null });
      });
  });
  app.post('/todo', urlEncoder, (req, res) => {
    Todo.create(req.body)
      .then(result => {
        console.log(`Created: ${result}`);
        res.status(201).json(result);
      })
      .catch(err => {
        res.status(500).json({ error: err.mesage });
      });
  });
  app.delete('/todo', urlEncoder, (req, res) => {
    Todo.findOneAndRemove({ _id: req.body.id })
      .exec()
      .then(result => {
        console.log(`Deleted: ${result}`);
        res.status(200).json(result);
      })
      .catch(err => { res.status(500).json({ error: err.message }) });
  });
}