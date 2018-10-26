const Emitter = require('events');
const eventConfig = require('./config').events;

const emtr = new Emitter();

emtr.on('greet', () => {
  console.log('hello 1');
});

emtr.on('greet', () => {
  console.log('hello 2');
});

console.log('hello 3');
emtr.emit('greet');

// hello 3
// hello 1
// hello 2
