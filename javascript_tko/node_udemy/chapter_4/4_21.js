// by reference and by value

// primative: type of data that represents a single value
// i.e. not an object

// pass by value
const change = (b) => {
  b = 2;
};

let a = 1;
change(a);
console.log(a);

// pass by reference
const changeObj = (d) => {
  d.prop1 = () => {};
  d.prop2 = {};
}

let c = {};
c.prop1 = {};
changeObj(c);
console.log(c);