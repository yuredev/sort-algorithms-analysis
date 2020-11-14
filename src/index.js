const bubble = require('./sort_algorithms/bubble_sort');
const insertion = require('./sort_algorithms/insertion_sort');
const merge = require('./sort_algorithms/merge_sort');
const quick = require('./sort_algorithms/quick_sort');
const selection = require('./sort_algorithms/selection_sort');
const runBenchmark = require('./benchmark');

if (!process.argv[0] || !process.argv[1], !process.argv[2]) {
  console.log('***** ERRO: Faltando parametros *****');
  console.log('Use: ');
  console.log('\n $ npm run start <algoritmo> <tamanho_array> <numero_execucoes>');
  console.log('\nExemplo:');
  console.log('\n $ npm run start bubble 10000 5\n');
  return;
}

function main(algoritmName, arraySize, times) {
  const sortAlgoritms = {
    bubble,
    insertion,
    merge,
    quick,
    selection
  }
  console.log(`Executando ${algoritmName} sort com array de ${arraySize} elementos ${times} vezes`);
  for (let i = 1; i <= times; i++) {
    console.log(`\n------------------- Execução ${i} -----------------\n`);
    runBenchmark(algoritmName, sortAlgoritms[algoritmName], arraySize);
  }
}

main(process.argv[2], process.argv[3], process.argv[4]);
