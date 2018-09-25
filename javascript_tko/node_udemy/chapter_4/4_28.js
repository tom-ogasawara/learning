// requireing native (core) modules

// Go read the node api docs:
// https://nodejs.org/api/util.html


const util = require('util');
// import doesn't need './' etc.

const name = 'Tom';
const greeting = util.format('Hello, %s', name);

util.log(greeting);