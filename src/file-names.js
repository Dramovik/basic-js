const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let workArr = [];
  for (let i = 0; i < names.length; i += 1) {
    if (workArr.length === 0) {
      workArr.push(names[i]);
    } else {
      // we go through the array names to index i
      //походим по массиву names до индеска i
      let num1 = 0;
      for (let j = 0; j < i; j += 1) {
        if (names[i] === names[j]) {
          num1 += 1;
        }
      }
      let newName = '';
      if (num1 > 0) {
        newName = `${names[i]}(${num1})`;
      } else {
        newName = `${names[i]}`;
      }
      //we go through the array workArr to length
      //проходим по массиву workArr до его длинны
      let num2 = 0;
      for (let k = 0; k < workArr.length; k += 1) {
        if (workArr[k] === newName) {
          num2 += 1;
        }
      }
      if (num2 > 0) {
        newName = `${newName}(${num2})`;
      } else {
        newName = `${newName}`;
      }
      workArr.push(newName);
    }
  }
  return workArr;
}

module.exports = {
  renameFiles
};
