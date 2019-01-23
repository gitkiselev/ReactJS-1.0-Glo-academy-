"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sumSponsors = exports.money = exports.cash = exports.rus = exports.eu = void 0;

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};
var eu = sponsors.eu,
    rus = sponsors.rus,
    cash = sponsors.cash;
exports.cash = cash;
exports.rus = rus;
exports.eu = eu;

var calcCash = function calcCash(own, everyCash) {
  if (isNaN(own) || own == '' || own == null) {
    own = 0;
  }

  var total = everyCash.reduce(function (a, b) {
    return a + b;
  }, own);
  return total;
};

var money = calcCash(cash);
exports.money = money;
var sumSponsors = [].concat(_toConsumableArray(eu), _toConsumableArray(rus), ['unexpected sponsor']);
exports.sumSponsors = sumSponsors;