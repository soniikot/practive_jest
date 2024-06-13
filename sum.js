function sum(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error("Invalid input: Please enter valid numbers");
  }
  return a + b;
}
module.exports = sum;
