class Greet4 {
  constructor() {
    this.greeting = 'hello 4'
    this.greet4 = () => {
      console.log(this.greeting)
    }
  }
}

module.exports = Greet4;

// No class definition

// Greet4 = () => {
//   this.greeting = 'hello 4';
//   this.greet4 = () => {
//     console.log(this.greet4);
//   };
// };

// module.exports = Greet4;