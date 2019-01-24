const employers = ['Alex', '', 'ludmila', 'Viktor', '', ' oleg ', 'iNna  ', 'Ivan', 'Alex', 'Olga', ' Ann'];
const employersNames = employers
     .filter(employer => employer.length !== 0)
     .map(employer => employer.trim().toLowerCase());


export {employersNames};