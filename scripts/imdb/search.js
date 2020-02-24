const prompts = require('prompts');

const { doFilmSearch, isFilmId, askFilmResults } = require('./films/search');
const { isStaffId } = require('./staff/search');
const filmFetch = require('./film');
const staffFetch = require('./staff');

/**
 * Ask Search
 *
 * @returns {string} Search term
 */
const askSearch = async () =>
  await prompts({
    type: 'text',
    name: 'val',
    message: 'Search or IMDB id?',
  }).then(x => x.val);

/**
 * Search main flow
 *
 * @returns {string} Term of search
 */
module.exports = async () => {
  const term = await askSearch();
  if (term) {
    if (isFilmId(term)) {
      await filmFetch(term);
    } else if (isStaffId(term)) {
      await staffFetch(term);
    } else {
      const results = await doFilmSearch(term);
      const id = await askFilmResults(results);
      await filmFetch(id);
    }
  }
  return term;
};
