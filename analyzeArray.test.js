const analyzeArray = require("./analyzeArray");

test("analyze array", () => {
  expect(analyzeArray([1, 10, 33, 42, 44, 100, 234, 0])).toEqual({
    maximum: 234,
    minimum: 0,
    average: 58,
    length: 8,
  });
});