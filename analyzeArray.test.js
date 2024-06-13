const analyzeArray = require("./analyzeArray");
describe("analyze array", () => {
  test("works with positive numbers array", () => {
    expect(analyzeArray([1, 10, 33, 42, 44, 100, 234, 0])).toEqual({
      maximum: 234,
      minimum: 0,
      average: 58,
      length: 8,
    });
  });

  test("works with negative numbers in array", () => {
    expect(analyzeArray([-1, -10, 33, -42, 44, 100, 234, 0])).toEqual({
      maximum: 234,
      minimum: -42,
      average: 44.75,
      length: 8,
    });
  });

  test("works with array consisting of one item", () => {
    expect(analyzeArray([1])).toEqual({
      maximum: 1,
      minimum: 1,
      average: 1,
      length: 1,
    });
  });

  test("throw an error if it is an empty array", () => {
    expect(() => analyzeArray([])).toThrow("please use array with elements");
  });
});
