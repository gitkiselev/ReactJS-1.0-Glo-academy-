"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

var _money = require("./money");

var _employers = require("./employers");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*3 файл, результирующий: функцию makeBusiness превратить в класс,
 у которого будет метод для вывода всей информации в консоль. 
 Здесь же создать экземпляр класса, который будет использовать
  полученные данные.*/
var MakeBusiness =
/*#__PURE__*/
function () {
  function MakeBusiness(owner, cash, emp) {
    var director = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'Victor';

    _classCallCheck(this, MakeBusiness);

    this.owner = owner;
    this.cash = cash;
    this.emp = emp;
    this.director = director;
  }

  _createClass(MakeBusiness, [{
    key: "showInfo",
    value: function showInfo() {
      var _console;

      var _sponsors = sponsors,
          eu = _sponsors.eu,
          rus = _sponsors.rus;
      var sumSponsors = [].concat(_toConsumableArray(eu), _toConsumableArray(rus), ['unexpected sponsor']);
      console.log("We have a business. Owner: ".concat(owner, ", director: ").concat(director, ". Our budget: ").concat(_money.cash, ". And our employers: ").concat(emp.join(', ')));
      console.log('And we have a sponsors: ');

      (_console = console).log.apply(_console, _toConsumableArray(sumSponsors));

      console.log("Note. Be careful with ".concat(eu[0], ". It's a huge risk."));
    }
  }]);

  return MakeBusiness;
}();

var makeBusiness = new MakeBusiness('Sam', _money.money, _employers.employersNames, director);
makeBusiness.showInfo();