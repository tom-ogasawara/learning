const greet1 = require('./greet1');
const greet2 = require('./greet2').greet2;
const greet3 = require('./greet3');
const greet3b = require('./greet3');
const Greet4 = require('./greet4');

greet1();
greet2();
greet3.greet3();
greet3.greeting = 'changed hello';

// require stores a cached version of module.exports
greet3b.greet3();

let greeter = new Greet4();
greeter.greet4();