module.exports = function bubbleSort(array) {
  const copy = [ ...array ];
  for (let i = 0; i < copy.length; i++) {
    for (let j = 0; j < copy.length - 1 - i; j++) {
      if (copy[j] > copy[j + 1]) {
        let aux = copy[j];
        copy[j] = copy[j + 1];
        copy[j + 1] = aux;
      }
    }
  }
  return copy;
};
