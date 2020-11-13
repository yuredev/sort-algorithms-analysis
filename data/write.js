const fs = require('fs');
const path = require('path');

let ascending = '';

for(let i = 1; i < 1000000;i++) ascending += i+'\n';

fs.writeFile(path.resolve('data', 'ascending.txt'), ascending, (err) => {
  if (err) console.log(err)

  console.log('done');
});

let rand = "";

for(let i = 0; i < 1000000; i++) rand += Math.floor(Math.random()*10000000)+"\n";

fs.writeFile(path.resolve('data','random.txt'), rand, (err) => {
  if (err) console.log(err)
  console.log('done');
});

let descending = '';

for(let i = 1000000; i > 1; i--) descending += i+'\n';

fs.writeFile(path.resolve('data','descending.txt'), descending, (err) => {
  if (err) console.log(err)

  console.log('done');
});

