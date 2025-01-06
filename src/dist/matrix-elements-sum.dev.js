"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var _require = require('../extensions/index.js'),
    NotImplementedError = _require.NotImplementedError;
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
  var result = 0;

  for (var i = 0; i < matrix.length; i += 1) {
    for (var j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i - 1][j] !== 0) {
        result += (_readOnlyError("result"), matrix[i][j]);
      }
    }
  }

  return result;
}

module.exports = {
  getMatrixElementsSum: getMatrixElementsSum
};