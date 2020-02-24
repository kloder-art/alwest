/**
 * Check if the string is a IMDB staff id
 *
 * @param {string} str String to check
 * @returns {boolean}
 */
const isStaffId = str => /^nm\d+$/.test(str);

module.exports = {
  isStaffId,
};
