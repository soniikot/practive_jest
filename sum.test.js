const sum = require("./sum");

describe("sum function", () => {
  test("adds two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("adds to negative numbers correctly ", () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  test("add a positive and a negative number correctly", () => {
    expect(sum(1, -2)).toBe(-1);
  });

  test("add zero and a number correctly", () => {
    expect(sum(0, -2)).toBe(-2);
  });

  test("add two zeros correctly", () => {
    expect(sum(0, 0)).toBe(0);
  });

  test("add decimal numbers correctly", () => {
    expect(sum(0.234, 0.432)).toBe(0.666);
  });

  test("return Nan for invalid input", () => {
    expect(() => {
      sum("a", "!");
    }).toThrow("Invalid input: Please enter valid numbers");
  });
});

/**
 *
 * describe block
 *
 * cases:
 *
 * should add two negative numbers correctly
 *
 * should add a positive and a negative number correctly
 *
 * should add zero and a number correctly
 *
 * should add two zeros correctly
 *
 * should add decimal numbers correctly
 *
 *
 * exceptions!
 * should return NaN for non-numeric inputs
 *
 */
