const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.chain.push('');
      return this;
    }
    this.chain.push(`${value}`);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this.chain.length) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    this.chain = this.chain.map((item) => {
      return `( ${item} )`;
    })
    let str = this.chain.join('~~');
    this.chain = [];
    return str;
  }
};

module.exports = {
  chainMaker
};
