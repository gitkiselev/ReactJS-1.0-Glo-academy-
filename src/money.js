"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var money = function money(own, everyCash) {
  if (isNaN(own) || own == '' || own == null) {
    own = 0;
  }

  var total = everyCash.reduce(function (a, b) {
    return a + b;
  }, own);
  return total;
  var money = calcCash(null, cash);
  var sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
  };
  var eu = sponsors.eu,
      rus = sponsors.rus,
      cash = sponsors.cash;
};

var _default = money;
exports.default = _default;