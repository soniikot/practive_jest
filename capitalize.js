function capitalize(string) {
  if (string.length === 0) {
    throw new Error("please enter something");
  }
  return string.toUpperCase();
}

module.exports = capitalize;
