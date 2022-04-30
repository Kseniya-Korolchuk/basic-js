const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  rotatedMatrix = [];
  for(let i = 0; i < matrix[0].length; i++) {
    let col = []
    for (let j = 0; j < matrix.length; j++) {
      col.push(matrix[j][i])
    }
    rotatedMatrix.push(col);
  }

  let sum = 0;
  for (elem of rotatedMatrix) {
    for (el of elem) {
      if (el == 0) break;
      sum += el;
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
