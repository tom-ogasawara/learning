// objects and object literals

// object: a collection of name-value pairs
// e.g. 
const address = { 
  street: 'main',
  number: 100,
  apartment: {
    floor: 3,
    number: 301
  }
}
console.log(address.street);

// object literals:
const person = {
  firstname: 'john',
  lastname: 'doe',
  greet: function() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
  }
};
person.greet();
console.log(person['lastname']);
