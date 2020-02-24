const fs = require('fs');
const chalk = require('chalk');

const search = require('./search');

const loop = async () => {
  const term = await search();
  if (!term) {
    process.exit();
  }
  console.log(
    chalk.blue(
      '\n ======================================================== \n',
    ),
  );
  loop();
};

(async () => {
  await loop();
})();
