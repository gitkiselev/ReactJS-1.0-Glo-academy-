import {eu, rus, cash, money, sumSponsors} from './money';
import {employersNames} from './employers';
/*3 файл, результирующий: функцию makeBusiness превратить в класс,
 у которого будет метод для вывода всей информации в консоль. 
 Здесь же создать экземпляр класса, который будет использовать
  полученные данные.*/
  class MakeBusiness {
  	constructor(owner, cash, emp, director = 'Victor'){
  		this.owner = owner;
  		this.cash = cash;
  		this.emp = emp;
  		this.director = director;
  	}
  	
  	showInfo(){
     	console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash}. And our employers: ${this.emp}`);
     	console.log('And we have a sponsors: ');
     	console.log(...sumSponsors);
     	console.log(`Note. Be careful with ${eu[0]}. It's a huge risk.`);
  	}
  }
  const makeBusiness = new MakeBusiness('Sam', money, employersNames);
  makeBusiness.showInfo();