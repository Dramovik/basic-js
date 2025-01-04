const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // options default
  options['repeatTimes'] = !('repeatTimes' in options) ? 1 : options['repeatTimes'];
  options['separator'] = !('separator' in options) ? '+' : options['separator'];
  options['addition'] = !('addition' in options) ? '' : options['addition'];
  options['additionRepeatTimes'] = !('additionRepeatTimes' in options) ? 1 : options['additionRepeatTimes'];
  options['additionSeparator'] = !('additionSeparator' in options) ? '|' : options['additionSeparator'];

  str = `${str}`;
  options['addition'] = `${options['addition']}`;
  let subArr = [];
  let subStr = '';

  for (let i = 0; i < options['additionRepeatTimes']; i += 1) {
    subArr.push(options['addition']);
  }
  subStr = subArr.join(options['additionSeparator']);

  let resultArr = [];
  let resultStr = '';
  for (let i = 0; i < options['repeatTimes']; i += 1) {
    resultArr.push(`${str}${subStr}`);
  }

  resultStr = resultArr.join(options['separator']);
  return resultStr;
}

module.exports = {
  repeater
};
