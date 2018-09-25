// ES6 module syntax

// greet.js
export const green = () => {
  console.log('hello');
};

//app.js
import * as greeter from 'greet';
greeter.greet();
