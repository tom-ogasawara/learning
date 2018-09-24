// requireing native (core) modules

// Go read the node api docs

const util = require('util');
// import doesn't need './' etc.

const name = 'Tom';
const greeting = util.format('Hello, %s', name);

util.log(greeting);