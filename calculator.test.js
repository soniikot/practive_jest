const calculator = require("./calculator");
describe("calculator function", () => {
  test("calculator can add", () => {
    expect(calculator.add(2, 4)).toBe(6);
  });

  test("calculator can subtract", () => {
    expect(calculator.subtract(10, 1)).toBe(9);
  });

  test("calculator can divide", () => {
    expect(calculator.divide(10, 1)).toBe(10);
  });

  test("calculator can multiply", () => {
    expect(calculator.multiply(10, 10)).toBe(100);
  });

  test("calculator can not divide by 0", () => {
    expect(() => {
      calculator.divide(10, 0);
    }).toThrow("calculator can not divide by 0");
  });
  test("calculator return Nan for invalid input", () => {
    expect(() => {
      calculator.add("a", "!");
    }).toThrow("Invalid input: Please enter valid numbers");
  });

  test("calculator can add negative numbers", () => {
    expect(calculator.add(-2, 4)).toBe(2);
  });
});
