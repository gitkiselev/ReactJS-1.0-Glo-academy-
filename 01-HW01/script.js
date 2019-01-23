/**
 * Согласно стандартом ES6-ES7 я кратко опишу что тут не хватает:
 * -- я удалил все комментарии чтобы лучше читалось --
 *
 * 1) все массивы и объекты должны быть объявлены через const
 * 2)
 */

// const employers = ...
var employers = ['Alex', '', 'ludmila', 'Viktor', '', ' oleg ', 'iNna  ', 'Ivan', 'Alex', 'Olga', ' Ann'];

/*
Элементы именовать надо с умом.
1) employers.filter(v => ...) не очевидно что такое 'v'. employers-много employer-один
2) v.length > 0 && v.lenghth != '' <---- масло масленное, проверять на одно из этих выражений

Вот реализация: */

// const _employersNames = employers
//     .filter(employer => employer.length !== 0)
//     .map(employer => employer.trim().toLowerCase());

let employersNames1 = employers.filter(v => v.length > 0 && v.lenghth != '');
let employersNames = employersNames1.map(v => v.toLowerCase().trim());

// const sponsors = ...
var sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

// const {...}
let { eu, rus, cash } = sponsors;

// const calcCash = (own, everyCash) => {...}
function calcCash(own, everyCash) {
    if ((isNaN(own) || own == '' || own == null)) {
        own = 0;
    }
    let total = everyCash.reduce((a, b) => a + b, own);
    return total;
}

// const money = ...
let money = calcCash(null, cash);

function makeBusiness(owner, director = 'Victor', cash, emp) {
    let sumSponsors = [...rus, ...eu];
    console.log(`We have a business. Owner:  ${owner}, director: ${director}. Our budget:  ${cash}. And our employers:
   ${emp}`);
    console.log('And we have a sponsors: ');
    console.log(sumSponsors);
    console.log(`Note. Be careful with ${eu}. It's a huge risk.`);
}
makeBusiness(null, 'Sam', null, money, employersNames);

/**
 * Используя function makeBusiness ты засоряешь глобальный window лишними функциями.
 * Остальное остается только реализация, может быть разной, у тебя почти правильно, но не учел некторые моменты
 * такие как console.log(sumSponsors); у тебя выводится массив. А надо как список, можно сделать через ...(spread)
 */
// const makeBusiness = (owner, cash, emp, director = 'Victor') => {
//     const { eu, rus } = sponsors;
//     const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
//     console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp.join(', ')}`);
//     console.log('And we have a sponsors: ');
//     console.log(...sumSponsors);
//     console.log(`Note. Be careful with ${eu[0]}. It's a huge risk.`);
// };
// makeBusiness(...['Sam', money, employersNames]);