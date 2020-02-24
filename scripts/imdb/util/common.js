/**
 * Convert string to slug
 *
 * @returns {string} String slugged
 */
const convertToSlug = text =>
  text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');

/**
 * Wrap text in a width
 *
 * @param {string} str Original text
 * @param {number} len Max lenght
 * @returns {string} Wrapped text
 */
const wrapText = (str, len = 80) =>
  str.replace(
    new RegExp(`(?![^\\n]{1,${len}}$)([^\\n]{1,${len}})\\s`, 'g'),
    '$1\n',
  );

module.exports = {
  convertToSlug,
  wrapText,
};
