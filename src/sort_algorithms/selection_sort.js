module.exports = function selectionSort(array) {
  const copy = [ ...array ];
  for (let i = 0; i < copy.length; i++) {
    let indiceMenor = i;
    for (let j = i; j < copy.length; j++) {
      if (copy[indiceMenor] > copy[j]) {
        indiceMenor = j;
      }
    }
    if (i != indiceMenor) {
      let aux = copy[i];
      copy[i] = copy[indiceMenor];
      copy[indiceMenor] = aux;
    }
  }
  return copy;
};
