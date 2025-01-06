const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  console.log(arr);
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let workArr = [];
  let resultArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === '--discard-next') {
      workArr.push(null);
      workArr.push(null);
      i += 1;
    } else if (arr[i] === '--discard-prev') {
      workArr[workArr.length - 1] = null;
    } else if (arr[i] === '--double-next') {
      workArr.push(arr[i + 1]);
    } else if (arr[i] === '--double-prev') {
      workArr.push(workArr[workArr.length - 1]);
    } else {
      workArr.push(arr[i]);
    }
  }
  for (let i = 0; i < workArr.length; i += 1) {
    if (workArr[i]) {
      resultArr.push(workArr[i]);
    }
  }
  return resultArr;
}

module.exports = {
  transform
};

// [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]
// [1, 2, 3, 4, 5]
// [1, 2, 3, --, null, --, 4, 5]

// [1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]
// [1, 2, 3, 1337, 1337, 1337, 4, 5]
// [1, 2, 3, 1337, 1337, 1337, 4, 5]

// [1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]
// [1, 2, 3, 4, 5]
// [1, 2, 3, --, null, --, 4, 5]

// [1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]
// [1, 2, 3, 1337, 4, 5]
// [1, 2, 3, 1337, null, --, 4, 5]