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
    if (value === 'null') {
      this.chain.push(' null ');
    }
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    let index = position - 1;
    if (typeof(position) !== 'number' || position <= 0 || position-1 >= this.chain.length) {
      this.chain = [];
      throw new Error ('You can\'t remove incorrect link!');
    }
    this.chain.splice(index, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finish = this.chain.join('~~');
    this.chain = [];
    return finish;
  }
};

module.exports = {
  chainMaker
};
