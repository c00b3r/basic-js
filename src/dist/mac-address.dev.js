"use strict";

var _require = require('../extensions/index.js'),
    NotImplementedError = _require.NotImplementedError;
/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */


function isMAC48Address(n) {
  var array = n.split('-');
  var regExp = /^[0-9A-Fa-f]+$/;

  for (var i = 0; i < array.length; i++) {
    if (regExp.test(array[i]) === false) {
      return false;
    }
  }

  return true;
}

module.exports = {
  isMAC48Address: isMAC48Address
};