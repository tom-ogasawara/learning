// immediately invoked function expressions (IIFEs)

// old syntax:
(function () {
  console.log('the old way');
}());

// new syntax (es6):
(() => {
  console.log('the new way');
})();

// with arguments:
(name => {
  console.log('hello ' + name);
})('tom');