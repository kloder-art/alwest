const prompts = require('prompts');
const { simpleSearch } = require('imdb-scrapper');

/**
 * Make a simple seach on IMDB database
 *
 * @param {string} term Term of search
 * @returns {object} Search results
 */
const doFilmSearch = async term => await simpleSearch(term);

/**
 * Check if the string is a IMDB film id
 *
 * @param {string} str String to check
 * @returns {boolean}
 */
const isFilmId = str => /^tt\d+$/.test(str);

/**
 * Ask which film fetch
 *
 * @param {object} resutls Results of IMDB search
 * @returns {string} IMDB Film id
 */
const askFilmResults = async results =>
  await prompts({
    type: 'select',
    name: 'val',
    message: 'Which one?',
    choices: results.d.map(x => ({
      title: `[${x.id}] ${x.l} (${x.y})`,
      value: x.id,
    })),
  }).then(x => x.val);

module.exports = {
  doFilmSearch,
  isFilmId,
  askFilmResults,
};
