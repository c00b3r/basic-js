"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('../extensions/index.js'),
    NotImplementedError = _require.NotImplementedError;
/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */


var DepthCalculator =
/*#__PURE__*/
function () {
  function DepthCalculator() {
    _classCallCheck(this, DepthCalculator);
  }

  _createClass(DepthCalculator, [{
    key: "calculateDepth",
    value: function calculateDepth(arr) {
      var depth = 1;

      for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          var currentDepth = this.calculateDepth(arr[i]) + 1;
          depth = Math.max(depth, currentDepth);
        }
      }

      return depth;
    }
  }]);

  return DepthCalculator;
}();

module.exports = {
  DepthCalculator: DepthCalculator
};