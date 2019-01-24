
const employers = ['Alex', '', 'ludmila', 'Viktor', '', ' oleg ', 'iNna  ', 'Ivan', 'Alex', 'Olga', ' Ann'];

/*var employersNames = [];
for (var i = 0; i < employers.length; i++) {
	if (employers[i].length > 0 && employers[i].length != '') {
		employersNames.push(employers[i]);
	}
}
console.log(employersNames);*/
const employersNames = employers.filter(emp => emp.length > 0).map(emp => emp.toLowerCase().trim());



/*for (var i = 0; i < employersNames.length; i++) {
	employersNames[i] = employersNames[i].toLowerCase().trim();
}*/

console.log(employersNames);

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};
const {eu, rus, cash} = sponsors; 

/*function calcCash(own) {
    own = own || 0;
    var everyCash = Array.prototype.slice.call(arguments);
    var total = own;
    for (var i = 0; i < everyCash[1].length; i++) {
        total += +everyCash[1][i];
    }
    return total;
}*/

const calcCash = (own, everyCash) => {
    if((isNaN(own) || own == '' || own == null)){
        own = 0;
    }
    let total = everyCash.reduce((accumulator, currentValue) => accumulator + currentValue, own);
    return total;
}



var money = calcCash(null, sponsors.cash);

function makeBusiness(owner, cash, emp, director = 'Victor') {
    const {eu, rus} = sponsors;
    //director = director || 'Victor';
    //var sumSponsors = sponsors.eu.concat(sponsors.rus, 'unexpected sponsor');
    const sumSponsors = [...rus, ...eu, 'unexpected sponsor'];
    /*console.log('We have a business. Owner: ' + owner + ', director: ' + director + '. Our budget: ' + cash + '. And our employers: ' +
    emp);*/
    console.log(`We have a business. Owner:  ${owner}, director: ${director}. Our budget:  ${money}. And our employers:
   ${emp}`);
    console.log('And we have a sponsors: ');
    //console.log.apply(null, sumSponsors);
    console.log(...sumSponsors);
    console.log(`Note. Be careful with ${eu[0]}. It's a huge risk.`);
}
//makeBusiness.apply(null, ['Sam', null, money, employersNames]);
makeBusiness(...['Sam',  money, employersNames]);

/*homework.js
homework.js. На экране.*/