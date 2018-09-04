class Greet3 {
  constructor() {
    this.greeting = 'hello 3';
    this.greet3 = () => {
      console.log(this.greeting);
    };
  };
};

module.exports = new Greet3();