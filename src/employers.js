const employers = ['Alex', '', 'ludmila', 'Viktor', '', ' oleg ', 'iNna  ', 'Ivan', 'Alex', 'Olga', ' Ann'];
const _employersNames = employers
     .filter(employer => employer.length !== 0)
     .map(employer => employer.trim().toLowerCase());

let employersNames1 = employers.filter(person => person.length > 0);
let employersNames = employersNames1.map(person => person.toLowerCase().trim());
export {employersNames, _employersNames};