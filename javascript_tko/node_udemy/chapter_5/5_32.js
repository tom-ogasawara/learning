// object properties and methods
let myObj = {
  greet: 'Hello'
};

console.log(myObj.greet);
console.log(myObj['greet']);

const prop = 'greet';

console.log(myObj[prop]);

// Ffunctions and arrays
let myArr = [];

myArr.push(() => {
  console.log('Hello world 1');
});
myArr.push(() => {
  console.log('Hello world 2');
});
myArr.push(() => {
  console.log('Hello world 3');
});

myArr.forEach(item => {
  item();
});
