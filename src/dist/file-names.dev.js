"use strict";

var _require = require('../extensions/index.js'),
    NotImplementedError = _require.NotImplementedError;
/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */


function renameFiles(names) {
  var nameCounts = {};
  var result = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = names[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var name = _step.value;

      if (!nameCounts[name]) {
        nameCounts[name] = 1;
        result.push(name);
      } else {
        var suffix = nameCounts[name];
        var newName = "".concat(name, "(").concat(suffix, ")");

        while (nameCounts[newName]) {
          suffix += 1;
          newName = "".concat(name, "(").concat(suffix, ")");
        }

        nameCounts[newName] = 1;
        nameCounts[name] += 1;
        result.push(newName);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return result;
}

module.exports = {
  renameFiles: renameFiles
};