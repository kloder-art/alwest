const prompts = require('prompts');
const chalk = require('chalk');
const fs = require('fs-extra');
const fetch = require('node-fetch');
const { promisify } = require('util');
const writeFilePromise = promisify(fs.writeFile);

const { slugify } = require('./util/common');
const { formatFilm, cleanFilmTitle, doFilmRequest } = require('./films/film');
const staffFetch = require('./staff');

const askWriteFile = async file =>
  await prompts({
    type: 'confirm',
    name: 'val',
    initial: false,
    message: `Write ${file}?`,
  }).then(x => x.val);

module.exports = async id => {
  const data = await doFilmRequest(id);
  const slug = slugify(cleanFilmTitle(data.title));
  const dir = `data/films/${slug}/`;

  // Check if the folder exists
  if (fs.existsSync(dir)) {
    console.log(
      chalk.white.bgRed.bold(`\r\nThe folder ${dir} already exists!`),
    );
  }

  // For the README.md
  const md = formatFilm(data, slug, id);
  console.log(chalk.green(`\r\n${md}\r\n`));
  const readmeFile = `${dir}README.md`;
  if (await askWriteFile(readmeFile)) {
    fs.ensureDirSync(dir);
    fs.writeFileSync(readmeFile, md);
  }

  // For the image
  const imageFile = `${dir}poster.jpg`;
  if (await askWriteFile(imageFile)) {
    fs.ensureDirSync(dir);
    const res = await fetch(data.poster)
      .then(x => x.arrayBuffer())
      .then(x => writeFilePromise(imageFile, Buffer.from(x)));
  }

  // Iterate over the stars
  for (const x of data.stars) {
    const match = data.cast.find(y => y.name === x);
    if (match) {
      await staffFetch(match.id, slug);
    }
  }

  return;
};
