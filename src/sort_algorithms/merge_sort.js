
/**
 * 
 * @param {*} array
 * @returns {number[]} 
 */

module.exports = function mergeSort(array) {
  let right, left;
  const copy = [ ...array ];
  if (copy.length > 1) {
    let meio = Math.floor(copy.length / 2);
    left = copy.slice(0, meio);
    right = copy.slice(meio);
  } else {
    return copy;
  }
  return merge(mergeSort(right), mergeSort(left));
}

function merge(right, left) {
  let sortedArray = [];
  let d = 0,
    e = 0;
  while (d < right.length && e < left.length) {
    if (left[e] < right[d]) {
      sortedArray.push(left[e]);
      e++;
    } else {
      sortedArray.push(right[d]);
      d++;
    }
  }
  return sortedArray.concat(left.slice(e)).concat(right.slice(d));
};
