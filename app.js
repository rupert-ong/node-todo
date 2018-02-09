const events = require('events');
const util = require('util');

// Basic emitter
/* const myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', (message) => {
  console.log(message);
});

myEmitter.emit('someEvent', 'Event was emitted'); */

const Person = function(name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

let james = new Person('James');
let mary = new Person('Mary');
let ryu = new Person('Ryu');

let people = [james, mary, ryu];
people.forEach((person) => {
  person.on('speak', (msg) => { console.log(`${person.name} said ${msg}`); });
});

james.emit('speak', 'I think Node.js is okay');
mary.emit('speak', 'I prefer Java');
ryu.emit('speak', 'Eat, drink, man, woman!');