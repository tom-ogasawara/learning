// chapter 4:

// An important difference between function declarations and class declarations is that function declarations are hoisted and class declarations are not. You first need to declare your class and then access it, otherwise code like the following will throw a ReferenceError:

// const p = new Rectangle(); // ReferenceError
// class Rectangle {}

// ^ will throw a ReferenceError