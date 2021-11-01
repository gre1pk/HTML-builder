const fs = require('fs');
const path = require('path');

const text = path.join(__dirname, 'text.txt');

const stream = new fs.ReadStream(text, 'utf8');

stream.on('readable', () => {
  const data = stream.read();
  if (data !== null) {
    console.log(data);
  }
});
