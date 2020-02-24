const { getActor } = require('imdb-scrapper');

const { wrapText } = require('../util/common');

/**
 * Get actor data
 *
 * @param {string} id IMDB actor id
 * @returns {object} IMDB result object
 */
const doStaffRequest = async id => await getActor(id);

/**
 * Format staff for markdown
 *
 * @param {object} data Staff data object
 * @param {string} slug The staff slug
 * @returns {string} Markdown format
 */
const formatStaff = (data, slug, id, filmSlug) =>
  `---
id: ${slug}
name: ${data.actorName}
imdb: ${`https://www.imdb.com/name/${id}`}
picture: picture.jpg
films:${filmSlug ? `\n  - ${filmSlug}` : ''}
locations:
---

## Bio

${wrapText(data.actorInfo)}
`;

module.exports = {
  doStaffRequest,
  formatStaff,
};
