const reverseString = require("./reverseString.js");

describe("reverseString function", () => {
  test("it works", () => {
    expect(reverseString("olleH")).toBe("Hello");
  });

  test("funciton reverse string works with diffrent words", () => {
    expect(reverseString("dog")).toBe("god");
  });

  test(" works with a letter", () => {
    expect(reverseString("A")).toBe("A");
  });

  test("works if a string has spaces", () => {
    expect(reverseString("A cat")).toBe("tac A");
  });

  test("handle a string with numbers", () => {
    expect(reverseString("cat number 1")).toBe("1 rebmun tac");
  });

  test("handle a string with special characters", () => {
    expect(reverseString("cat $$&")).toBe("&$$ tac");
  });

  test("handle a palindrome string", () => {
    expect(reverseString("Was it a car or a cat I saw?")).toBe(
      "?was I tac a ro rac a ti saW"
    );
  });

  test("throw an error if input is empty", () => {
    expect(() => {
      reverseString("");
    }).toThrow("please enter something");
  });
});

/**
 *
 * describe block
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * should handle a palindrome string
 *
 *
 */
