const caesarCipher = require("./caesarCipher");

test("caesarCipher returns encoded word", () => {
  expect(caesarCipher("cat", 3)).toBe("fdw");
});

test("caesarCipher returns encoded word with capital letters as They are", () => {
  expect(caesarCipher("Cat", 3)).toBe("Fdw");
});

test("caesarCipher returns encoded sentence", () => {
  expect(caesarCipher("cat eats", 3)).toBe("fdw hdwv");
});

test("caesarCipher returns correctly the end of alphabet", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("caesarCipher returns punctuation correctly ", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

/**
 * 
 * add block
 * describe("caesarCipher function", () => {
 * 
 * cases:
 * 
 * positive shifts correct
 * negative shifts correct
 * 
 * empty string
 * 
 * same string for zero shift
 * 
 * 
 * /