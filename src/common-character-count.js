const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sArr1 = s1.split('');
  let sArr2 = s2.split('');
  let count = 0;
  sArr1.forEach((item) => {
    let index = sArr2.indexOf(item, 0);
    if (index >= 0) {
      count += 1;
      sArr2.splice(index, 1);
    }
  });
  return count;
}
// getCommonCharacterCount("aabcc", "adcaa");

module.exports = {
  getCommonCharacterCount
};
