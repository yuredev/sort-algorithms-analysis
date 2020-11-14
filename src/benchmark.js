const readData = require('./read_data');
const { resolve } = require('path');
const { performance } = require('perf_hooks');

/**
 * @param {string} algorithmName nome do algoritmo
 * @param {Function} sortFunction função para ordenar array
 * @param {number} end fim do array
 */
function runBenchmark(algorithmName, sortFunction, end = 1000001) {
  const randomArray = readData(resolve('data', 'numbers.dat')).slice(0, end);
  const ascendingArray = readData(resolve('data', 'ascending.dat')).slice(0, end);
  const descendingArray = readData(resolve('data', 'descending.dat')).slice(0, end);
  
  let time = measureTime(sortFunction, randomArray);
  console.log(`${algorithmName} em array aleatório: ${time} milisegundos`);
  
  time = measureTime(sortFunction, ascendingArray);
  console.log(`${algorithmName} em array crescente: ${time} milisegundos`);

  time = measureTime(sortFunction, descendingArray);
  console.log(`${algorithmName} em array decrescente: ${time} milisegundos`);
}

/**
 * @param {Function} sortFunction função para ordenar array
 * @param {number[]} array array a ser ordenado 
 */
function measureTime(sortFunction, array) {
  let t1, t2, result = 0;
  t1 = performance.now(); 
  sortFunction(array);
  t2 = performance.now();
  result += t2 - t1;
  return result.toFixed(4);
}

module.exports = runBenchmark;
