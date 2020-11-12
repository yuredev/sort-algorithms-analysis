const readData = require('../utils/read_data');
const { resolve } = require('path');
const { performance } = require('perf_hooks');

/**
 * @param {string} algorithmName nome do teste
 * @param {Function} sortFunction função para ordenar array
 */
function test(algorithmName, sortFunction) {
  const randomArray = readData(resolve('data', 'random.txt'));
  const ascendingArray = readData(resolve('data', 'ascending.txt'));
  const descendingArray = readData(resolve('data', 'descending.txt'));
  
  let time = measureTime(sortFunction, randomArray);
  console.log(`\n${algorithmName} em array aleatório: ${time} milisegundos`);
  
  time = measureTime(sortFunction, ascendingArray);
  console.log(`\n${algorithmName} em array crescente: ${time} milisegundos`);
  
  time = measureTime(sortFunction, descendingArray);
  console.log(`\n${algorithmName} em array decrescente: ${time} milisegundos`);
}

/**
 * @param {Function} sortFunction função para ordenar array
 * @param {number[]} array array a ser ordenado 
 */
function measureTime(sortFunction, array) {
  console.log(`---------------------------------`);
  let t1, t2, result = 0;
  for (let i = 0; i < 5; i++) {
    t1 = performance.now(); 
    sortFunction(array);
    t2 = performance.now();
    console.log(`execução ${i + 1}: ${(t2 - t1).toFixed(4)} milisegundos`)
    result += t2 - t1;
  }
  return (result / 5).toFixed(4);
}

module.exports = test;