const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = [];
  let arrFromStr = str.split('');
  let resultStr = '';
  arrFromStr.forEach((item) => {
    if (arr.length === 0) {
      arr.push([1, item]);
    } else {
      if (item === arr[arr.length - 1][1]) {
        arr[arr.length - 1][0] += 1;
      } else {
        arr.push([1, item]);
      }
    }
  });
  arr.forEach((item) => {
    if (item[0] === 1) {
      resultStr = `${resultStr}${item[1]}`;
    } else {
      resultStr = `${resultStr}${item[0]}${item[1]}`;
    }
  })
  return resultStr;
}

module.exports = {
  encodeLine
};
