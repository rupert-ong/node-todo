const bodyParser = require('body-parser');
const urlEncoder = bodyParser.urlencoded({ extended: false });

let data = [
  {item: 'Get milk'},
  {item: 'Kick ass'},
  {item: 'Chew bubblegum'}
];

module.exports = function(app) {
  app.get('/todo', (req, res) => {
    res.render('todo', {
      todos: data
    });
  });
  app.post('/todo', urlEncoder, (req, res) => {
    console.log(req.body);
    data.push(req.body);
    res.json(data);
  });
  app.delete('/todo/:item', (req, res) => {
    data = data.filter((todo) => todo.item.replace(/ /g, '-') !== req.params.item);
    res.json(data);
  });
}