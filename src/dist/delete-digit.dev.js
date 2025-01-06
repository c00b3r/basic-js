"use strict";

var _require = require('../extensions/index.js'),
    NotImplementedError = _require.NotImplementedError;
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
  var string = n.toString();
  var maxNumber = 0;

  for (var i = 0; i < string.length; i++) {
    var newString = string.slice(0, i) + string.slice(i + 1);
    maxNumber = Math.max(maxNumber, +newString);
  }

  return maxNumber;
}

module.exports = {
  deleteDigit: deleteDigit
};