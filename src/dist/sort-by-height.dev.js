"use strict";

var _require = require('../extensions/index.js'),
    NotImplementedError = _require.NotImplementedError;
/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */


function sortByHeight(arr) {
  var sortedArray = arr.filter(function (elem) {
    return elem != -1;
  }).sort(function (a, b) {
    return a - b;
  });
  var result = [];
  var sortedIndex = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      result.push(-1);
    } else {
      result.push(sortedArray[sortedIndex]);
      sortedIndex++;
    }
  }

  return result;
}

module.exports = {
  sortByHeight: sortByHeight
};