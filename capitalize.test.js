const capitalize = require("./capitalize");

describe("capitalize function", () => {
  test("capitalize a word", () => {
    expect(capitalize("cat")).toBe("CAT");
  });

  test("throw an error if input is empty", () => {
    expect(() => {
      capitalize("");
    }).toThrow("please enter something");
  });

  test("return the same string if already capitalized", () => {
    expect(capitalize("DOG")).toBe("DOG");
  });

  test("works with mixed string", () => {
    expect(capitalize("DOG anD cAt")).toBe("DOG AND CAT");
  });

  test("capitalize a string with non-alphabetic characters", () => {
    expect(capitalize("3 dogs and 2 cats")).toBe("3 DOGS AND 2 CATS");
  });

  test("capitalize a single character", () => {
    expect(capitalize("y")).toBe("Y");
  });
});
