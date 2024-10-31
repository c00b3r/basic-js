"use strict";

var _require = require("../extensions/index.js"),
    NotImplementedError = _require.NotImplementedError;
/**
 * Implement chainMaker object according to task description
 *
 */


var chainMaker = {
  chain: [],
  getLength: function getLength() {
    return this.chain.length;
  },
  addLink: function addLink(value) {
    this.chain.push("( ".concat(value, " )"));
    return this;
  },
  removeLink: function removeLink(position) {
    if (typeof position !== "number" || position <= 0 || position > this.chain.length || !Number.isInteger(position)) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain: function reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain: function finishChain() {
    var result = this.chain.join("~~");
    this.chain = [];
    return result;
  }
};
module.exports = {
  chainMaker: chainMaker
};