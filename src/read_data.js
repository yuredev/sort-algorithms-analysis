const { readFileSync } = require('fs');

/**
 * Lê arquivo txt e retorna seus dados em um array
 * @param {string} path pasta  
 * @returns {number[]} array com conteúdo do txt lido
 */
function readData(path) {
  const content = readFileSync(path).toString();
  const array = content.split('\r\n').map(el => Number(el));
  return array;
}

module.exports = readData;
