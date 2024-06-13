const caesarCipher = require("./caesarCipher");
describe("caesarCipher function", () => {
  test(" returns encoded word", () => {
    expect(caesarCipher("cat", 3)).toBe("fdw");
  });

  test("returns encoded word with capital letters as They are", () => {
    expect(caesarCipher("Cat", 3)).toBe("Fdw");
  });

  test("returns encoded sentence", () => {
    expect(caesarCipher("cat eats", 3)).toBe("fdw hdwv");
  });

  test("returns correctly the end of alphabet", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("returns punctuation correctly ", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });

  test("handle negative shift correctly ", () => {
    expect(caesarCipher("Hello, World!", -3)).toBe("Ebiil, Tloia!");
  });

  test("ask to enter the string if it is empty", () => {
    expect(() => {
      caesarCipher("", 1);
    }).toThrow("please enter something");
  });

  test("ask to make a shift if the step is 0", () => {
    expect(() => {
      caesarCipher("cat", 0);
    }).toThrow(
      "please enter different number, otherwise your word wouldn't be encrypted"
    );
  });
});
