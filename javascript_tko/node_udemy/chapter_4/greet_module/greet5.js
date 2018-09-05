const greeting = 'hello 5';

greet5 = () => {
  console.log(greeting);
};

// Revealing 
// only exposes the methods that you want USEFUL!
module.exports = {
  greet: greet
};