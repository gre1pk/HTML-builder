const { join, basename, extname, resolve } = require('path');
const { lstat, readdir } = require('fs/promises');

const examination = async () => {
  const files = await readdir(resolve(__dirname, 'secret-folder'));
  files.map(async (file) => {
    const stats = await lstat(join(__dirname, 'secret-folder', file));
    if (!stats.isDirectory()) {
      const base = basename(file, extname(file));
      const extension = extname(file).replace(/\./, '');
      const size = `${Math.round(stats.size / 1000)}kb`;
      console.log(`${base} - ${extension} - ${size}`);
    }
  });
};

examination().then();
