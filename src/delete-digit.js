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
  let number = n.toString();
  let array = [];
  for(let i = 0; i < number.length; i++) {
    array.push(+number.replace(number[i], ''));
  }
  return Math.max(...array);
}

module.exports = {
  deleteDigit
};
