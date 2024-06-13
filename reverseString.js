function reverseString(string) {
  if (string.length === 0) {
    throw new Error("please enter something");
  }
  return string.split("").reverse().join("");
}

module.exports = reverseString;
