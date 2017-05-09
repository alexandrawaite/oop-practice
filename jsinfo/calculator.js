let calculator = {
  read() {
    this.first = +prompt('First number?', 0);
    this.second = +prompt('Second number?', 0);
  },
  sum() {
    return this.first + this.second;
  },
  mul() {
    return this.first * this.second;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
