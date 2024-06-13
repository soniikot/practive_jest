function analyzeArray(array) {
  if (array.length === 0) {
    throw new Error("please use array with elements");
  }
  const max = Math.max(...array);

  const min = Math.min(...array);

  const sum = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  const averageA = sum / array.length;

  const results = {
    maximum: max,
    minimum: min,
    average: averageA,
    length: array.length,
  };
  return results;
}

module.exports = analyzeArray;
