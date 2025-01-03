const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let tempStr = '' + n;
  let nArr = tempStr.split('');
  let result = 0;
  for (let i = 0; i < nArr.length; i += 1) {
    let tempArr = [...nArr];
    tempArr.splice(i, 1);
    if (result < +tempArr.join('')) {
      result = +tempArr.join('');
    }
  }
  return result;
}

module.exports = {
  deleteDigit
};
