const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let workDomains = [];
  let resultObj = {};
  domains.forEach((item, index) => {
    let arr = item
      .split('.')
      .reverse()
      .map((item) => {
        return `.${item}`;
      });
    workDomains.push(arr);
  });
  workDomains.forEach((item) => {
    item.reduce((acc, elem) => {
      let str = `${acc}${elem}`
      if (str in resultObj) {
        resultObj[str] += 1;
      } else {
        resultObj[str] = 1;
      }
      return str;
    }, '');
  })
  return resultObj;
}

module.exports = {
  getDNSStats
};
