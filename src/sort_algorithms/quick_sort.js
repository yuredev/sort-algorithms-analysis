module.exports = function quickSort(array){
  return quick(array, 0, array.length);
}

function quick(array, inferior, superior) {
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

    quick(copy, inferior, pivo_pos - 1);
    quick(copy, pivo_pos + 1, superior);

    return copy;
  }
};

