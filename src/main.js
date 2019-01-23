"use strict";

var _employers = _interopRequireDefault(require("./employers"));

var _money = _interopRequireDefault(require("./money"));



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const makeBusiness = {
  let makeBusiness = (owner, cash, emp, director = 'Victor') => {
     let { eu, rus } = sponsors;
     let sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
     console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp.join(', ')}`);
     console.log('And we have a sponsors: ');
     console.log(...sumSponsors);
     console.log(`Note. Be careful with ${eu[0]}. It's a huge risk.`);
 };
 makeBusiness(...['Sam', money, employersNames]);
}
