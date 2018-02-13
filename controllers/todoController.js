const Todo = require('../models/todo');

exports.get_todos = (req, res) => {
  Todo.find()
    .exec()
    .then(todos => {
      res.status(200).render('todo', { todos: todos });
    })
    .catch(err => {
      res.status(200).render('todo', { todos: null });
    });
}

exports.create_todo = (req, res) => {
  Todo.create(req.body)
    .then(result => {
      console.log(`POST request: ${result}`);
      res.status(201).json(result);
    })
    .catch(err => {
      res.status(500).json({ error: err.mesage });
    });
}

exports.delete_todo = (req, res) => {
  Todo.findOneAndRemove({ _id: req.body.id })
    .exec()
    .then(result => {
      console.log(`DELETE request: ${result}`);
      res.status(200).json(result);
    })
    .catch(err => { res.status(500).json({ error: err.message }) });
}