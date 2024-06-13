function caesarCipher(string, step) {
  if (string.length === 0) {
    throw new Error("please enter something");
  }
  if (step === 0) {
    throw new Error(
      "please enter different number, otherwise your word wouldn't be encrypted"
    );
  }

  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "a",
    "b",
    "c",
  ];

  const outputArray = [];

  const inputArray = string.split("");

  inputArray.forEach((element) => {
    const index = alphabet.indexOf(element.toLowerCase());

    if (index === -1) {
      const newLetter = element;
      outputArray.push(newLetter);
    } else {
      if (element.toUpperCase() === element) {
        const index = alphabet.indexOf(element.toLowerCase());
        const newIndex = index + step;
        const newLetter = alphabet[newIndex];
        outputArray.push(newLetter.toUpperCase());
      } else {
        const newIndex = index + step;
        const newLetter = alphabet[newIndex];
        outputArray.push(newLetter);
      }
    }
  });

  return outputArray.join("");
}

module.exports = caesarCipher;
