"use strict";

var _require = require('../extensions/index.js'),
    NotImplementedError = _require.NotImplementedError;
/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */


function repeater(str, options) {
  str = String(str);
  var _options$repeatTimes = options.repeatTimes,
      repeatTimes = _options$repeatTimes === void 0 ? 1 : _options$repeatTimes,
      _options$separator = options.separator,
      separator = _options$separator === void 0 ? '+' : _options$separator,
      _options$addition = options.addition,
      addition = _options$addition === void 0 ? '' : _options$addition,
      _options$additionRepe = options.additionRepeatTimes,
      additionRepeatTimes = _options$additionRepe === void 0 ? 1 : _options$additionRepe,
      _options$additionSepa = options.additionSeparator,
      additionSeparator = _options$additionSepa === void 0 ? '|' : _options$additionSepa;
  var additionStr = Array(additionRepeatTimes).fill(String(addition)).join(additionSeparator);
  var fullStr = Array(repeatTimes).fill(str + additionStr).join(separator);
  return fullStr;
}

module.exports = {
  repeater: repeater
};