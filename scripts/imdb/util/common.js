/**
 * Convert string to slug
 *
 * @returns {string} String slugged
 */
const slugify = str => {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = 'ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;';
  var to = 'aaaaaeeeeeiiiiooooouuuunc------';
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
};

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
  slugify,
  wrapText,
};
