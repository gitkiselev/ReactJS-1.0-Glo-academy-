
var employers = ['Alex', '', 'ludmila', 'Viktor', '', ' oleg ', 'iNna  ', 'Ivan', 'Alex', 'Olga', ' Ann'];

/*var employersNames = [];
for (var i = 0; i < employers.length; i++) {
	if (employers[i].length > 0 && employers[i].length != '') {
		employersNames.push(employers[i]);
	}
}
console.log(employersNames);*/
let employersNames1 = employers.filter(v => v.length > 0 && v.lenghth != '');
console.log(employersNames1);


/*for (var i = 0; i < employersNames.length; i++) {
	employersNames[i] = employersNames[i].toLowerCase().trim();
}*/
let employersNames = employersNames1.map(v => v.toLowerCase().trim()) ;
console.log(employersNames);

var sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};
let {eu, rus, cash} = sponsors; 

/*function calcCash(own) {
    own = own || 0;
    var everyCash = Array.prototype.slice.call(arguments);
    var total = own;
    for (var i = 0; i < everyCash[1].length; i++) {
        total += +everyCash[1][i];
    }
    return total;
}*/

function calcCash(own, everyCash){
    if((isNaN(own) || own == '' || own == null)){
        own = 0;
    }
    let total = everyCash.reduce((a, b) => a + b, own);
    return total;
}



//var money = calcCash(null, sponsors.cash);
let money = calcCash(null, cash);
function makeBusiness(owner, director = 'Victor', cash, emp) {
    //director = director || 'Victor';
    //var sumSponsors = sponsors.eu.concat(sponsors.rus, 'unexpected sponsor');
    let sumSponsors = [...rus, ...eu];
    /*console.log('We have a business. Owner: ' + owner + ', director: ' + director + '. Our budget: ' + cash + '. And our employers: ' +
    emp);*/
    console.log(`We have a business. Owner:  ${owner}, director: ${director}. Our budget:  ${cash}. And our employers:
   ${emp}`);
    console.log('And we have a sponsors: ');
    //console.log.apply(null, sumSponsors);
    console.log(sumSponsors);
    console.log(`Note. Be careful with ${eu}. It's a huge risk.`);
}
//makeBusiness.apply(null, ['Sam', null, money, employersNames]);
makeBusiness(null, 'Sam', null, money, employersNames);

/*homework.js
homework.js. На экране.*/