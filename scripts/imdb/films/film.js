const { getFull } = require('imdb-scrapper');

const { slugify, wrapText } = require('../util/common');

/**
 * Get all film data
 *
 * @param {string} id IMDB film id
 * @returns {object} IMDB result object
 */
const doFilmRequest = async id => await getFull(id);

/**
 * Clean film title from year at the end
 *
 * @param {string} title Film title
 * @returns {string} Title cleaned
 */
const cleanFilmTitle = title =>
  /\(\d{4}\)$/.test(title) ? title.substr(0, title.length - 7) : title;

/**
 * Parse runtime in '1h 1m' format to integer of minutes
 *
 * @param {string} str String with the above format
 * @returns {integer} Value in minutes
 */
const parseRuntime = str =>
  [str]
    .map(x => /(?:(\d+)h)? ?(?:(\d+)m)?/.exec(x))
    .map(x => parseInt(x[1] | 0) * 60 + parseInt(x[2] | 0))[0];

/**
 * Format film for markdown
 *
 * @param {object} data Film data object
 * @param {string} slug The film slug
 * @returns {string} Markdown format
 */
const formatFilm = (data, slug, id) =>
  `---
id: ${slug}
title: ${cleanFilmTitle(data.title)}
imdb: ${`https://www.imdb.com/title/${id}`}
year: ${data.year}
runtime: ${parseRuntime(data.runtime)}
poster: poster.jpg
staff:
${[]
  .concat(data.director ? data.director.map(x => `  - ${slugify(x)}`) : [])
  .concat(data.stars ? data.stars.map(x => `  - ${slugify(x)}`) : [])
  .join('\n')}
---

## Sinopsis

${wrapText(data.story)}
`;

module.exports = {
  doFilmRequest,
  cleanFilmTitle,
  formatFilm,
};
