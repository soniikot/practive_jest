function analyzeArray(array) {
  const max = array.reduce((accumulator, currentValue) => {
    return currentValue > accumulator ? currentValue : accumulator; // задача была использовать только reduce? Math.max(...array1)?
  });
  const min = array.reduce((accumulator, currentValue) => {
    return currentValue < accumulator ? currentValue : accumulator;
  });

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
