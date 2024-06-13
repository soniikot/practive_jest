const calculator = {
  isValid(a, b) {
    if (isNaN(a) || isNaN(b)) {
      throw new Error("Invalid input: Please enter valid numbers");
    }
  },
  add(a, b) {
    this.isValid(a, b);
    return a + b;
  },
  subtract(a, b) {
    this.isValid(a, b);
    return a - b;
  },
  divide(a, b) {
    this.isValid(a, b);
    if (b === 0) {
      throw new Error("calculator can not divide by 0");
    }
    return a / b;
  },
  multiply(a, b) {
    this.isValid(a, b);
    return a * b;
  },
};

module.exports = calculator;
