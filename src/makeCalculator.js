'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calc = {
    balance: 0,

    operate: function (f, value) {
      f(value);

      return this;
    },

    add: function (value) {
      calc.balance += value;
    },

    subtract: function (value) {
      calc.balance -= value;
    },

    divide: function (value) {
      calc.balance /= value;
    },

    multiply: function (value) {
      calc.balance *= value;
    },

    get result() {
      return calc.balance;
    },

    reset: function () {
      calc.balance = 0;

      return this;
    },
  };

  return calc;
}

module.exports = makeCalculator;
