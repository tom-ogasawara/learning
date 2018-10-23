const Emitter = require('./emitter');

const emtr = new Emitter();

emtr.on('greet', () => {
  console.log('hello 1');
});

emtr.on('greet', () => {
  console.log('hello 2');
});

console.log('hello 3');
emtr.emit('greet');
