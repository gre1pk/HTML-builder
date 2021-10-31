const fs = require('fs');
const { join } = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readInput = (input) => {
  if (input.toLowerCase() === 'exit') return rl.close();

  if (input !== '') {
    fs.appendFile(
      join(__dirname, './', 'text.txt'),
      `${input}\n`,
      null,
      (e) => {
        if (e) throw console.log(e);
        rl.question('', (input) => readInput(input));
      }
    );
  } else {
    fs.appendFile(join(__dirname, './', 'text.txt'), '', null, (e) => {
      if (e) throw console.log(e);
      rl.question('', (input) => readInput(input));
    });
  }
};

process.on('exit', () => console.log('Goodbye!'));
console.log('Enter your text:\n');

rl.question('', (input) => readInput(input));
