const fs = require('fs');
const path = require('path');

const text = path.join(__dirname, 'text.txt');

fs.readFile(text, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
