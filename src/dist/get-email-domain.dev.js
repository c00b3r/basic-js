"use strict";

var _require = require('../extensions/index.js'),
    NotImplementedError = _require.NotImplementedError;
/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */


function getEmailDomain(email) {
  var resultArray = email.split('@');
  return resultArray[resultArray.length - 1];
}

module.exports = {
  getEmailDomain: getEmailDomain
};