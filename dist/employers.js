"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._employersNames = exports.employersNames = void 0;
var employers = ['Alex', '', 'ludmila', 'Viktor', '', ' oleg ', 'iNna  ', 'Ivan', 'Alex', 'Olga', ' Ann'];

var _employersNames = employers.filter(function (employer) {
  return employer.length !== 0;
}).map(function (employer) {
  return employer.trim().toLowerCase();
});

exports._employersNames = _employersNames;
var employersNames1 = employers.filter(function (person) {
  return person.length > 0;
});
var employersNames = employersNames1.map(function (person) {
  return person.toLowerCase().trim();
});
exports.employersNames = employersNames;