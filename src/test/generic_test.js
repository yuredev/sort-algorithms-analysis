const readData = require('../utils/read_data');
const { resolve } = require('path');

const randomArray = readData(resolve('data', 'random.txt'));
const ascendingArray = readData(resolve('data', 'ascending.txt'));
const descendingArray = readData(resolve('data', 'descending.txt'));

/**
 * @param {string} testName nome do teste
 * @param {Function} sortFunction função para ordenar array
 */
function test(testName, sortFunction) {
  console.time(`${testName}_random`);
  const sortedRandomArray = sortFunction(randomArray);
  console.timeEnd(`${testName}_random`);
  console.log(sortedRandomArray);
  
  console.time(`${testName}_ascending`);
  const sortedAscendingArray = sortFunction(ascendingArray);
  console.timeEnd(`${testName}_ascending`);
  console.log(sortedAscendingArray);
  
  console.time(`${testName}_descending`);
  const sortedDescendingArray = sortFunction(descendingArray);
  console.timeEnd(`${testName}_descending`);
  console.log(sortedDescendingArray);
}

module.exports = test;