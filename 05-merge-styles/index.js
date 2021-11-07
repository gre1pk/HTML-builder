const { join, parse } = require('path');
const { readdir, createWriteStream, createReadStream } = require('fs');

const staylePath = join(__dirname, 'styles');

const bundlePath = join(__dirname, 'project-dist', 'bundle.css');

readdir(staylePath, { withFileTypes: true }, (err, item) => {
  if (err) {
    throw console.log(err);
  }
  const output = createWriteStream(bundlePath);
  item.forEach((i) => {
    let ext = parse(i.name).ext;

    if (i.isFile() === true && ext == '.css') {
      const input = createReadStream(join(staylePath, i.name), 'utf-8');

      input.on('data', (chunk) => output.write(chunk));

      input.on('error', (error) => console.log('Error', error.message));
    }
  });
});
