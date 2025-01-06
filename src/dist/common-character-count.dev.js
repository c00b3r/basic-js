"use strict";

var _require = require('../extensions/index.js'),
    NotImplementedError = _require.NotImplementedError;
/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */


function getCommonCharacterCount(s1, s2) {
  var array1 = s1.split('');
  var array2 = s2.split('');
  var obj1 = {};
  var obj2 = {};
  var result = 0;

  for (var i = 0; i < array1.length; i += 1) {
    obj1[array1[i]] = (obj1[array1[i]] || 0) + 1;
  }

  for (var j = 0; j < array2.length; j += 1) {
    obj2[array2[j]] = (obj2[array2[j]] || 0) + 1;
  }

  for (elem in obj1) {
    if (!obj2[elem]) {
      delete obj1[elem];
      continue;
    }

    result += Math.min(obj1[elem], obj2[elem]);
  }

  return result;
}

module.exports = {
  getCommonCharacterCount: getCommonCharacterCount
};