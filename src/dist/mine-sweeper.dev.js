"use strict";

var _require = require('../extensions/index.js'),
    NotImplementedError = _require.NotImplementedError;
/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */


function minesweeper(matrix) {
  var result = [];

  for (var i = 0; i < matrix.length; i++) {
    result[i] = [];

    for (var j = 0; j < matrix[i].length; j++) {
      var count = 0;

      for (var x = -1; x <= 1; x++) {
        for (var y = -1; y <= 1; y++) {
          if (x === 0 && y === 0) continue;
          var neighborRow = i + x;
          var neighborCol = j + y;

          if (neighborRow >= 0 && neighborRow < matrix.length && neighborCol >= 0 && neighborCol < matrix[i].length) {
            if (matrix[neighborRow][neighborCol]) {
              count++;
            }
          }
        }
      }

      result[i][j] = count;
    }
  }

  return result;
}

module.exports = {
  minesweeper: minesweeper
};