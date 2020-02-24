const prompts = require('prompts');
const chalk = require('chalk');
const fs = require('fs-extra');
const fetch = require('node-fetch');
const { promisify } = require('util');
const writeFilePromise = promisify(fs.writeFile);

const { convertToSlug } = require('./util/common');
const { doStaffRequest, formatStaff } = require('./staff/staff');

const askWriteFile = async file =>
  await prompts({
    type: 'confirm',
    name: 'val',
    initial: false,
    message: `Write ${file}?`,
  }).then(x => x.val);

module.exports = async (id, filmSlug) => {
  const data = (await doStaffRequest(id))[0];
  const slug = convertToSlug(data.actorName);
  const dir = `data/staff/${slug}/`;

  // Check if the folder exists
  if (fs.existsSync(dir)) {
    console.log(
      chalk.white.bgRed.bold(`\r\nThe folder ${dir} already exists!`),
    );
  }

  // For the README.md
  const md = formatStaff(data, slug, id, filmSlug);
  console.log(chalk.green(`\r\n${md}\r\n`));
  const readmeFile = `${dir}README.md`;
  if (await askWriteFile(readmeFile)) {
    fs.ensureDirSync(dir);
    fs.writeFileSync(readmeFile, md);
  }

  // For the image
  const imageFile = `${dir}picture.jpg`;
  if (await askWriteFile(imageFile)) {
    fs.ensureDirSync(dir);
    const res = await fetch(data.actorImage)
      .then(x => x.arrayBuffer())
      .then(x => writeFilePromise(imageFile, Buffer.from(x)));
  }

  return;
};
