module.exports = function quickSort(array, inferior, superior) {
  const copy = [ ...array ];
  let pivo_pos;
  if (inferior < superior) {
    let pivo = copy[superior-1];
    let i, j;
    i = inferior - 1;
    for (j = inferior; j < superior - 1; j++) {
      if (copy[j] <= pivo) {
        i++;
        [copy[j],copy[i]] = [copy[i],copy[j]];
      }
    }
    [copy[superior-1],copy[i+1]] = [copy[i+1],copy[superior-1]];
    pivo_pos = i + 1;

    quickSort(copy, inferior, pivo_pos - 1);
    quickSort(copy, pivo_pos + 1, superior);

    return copy;
  }
};
