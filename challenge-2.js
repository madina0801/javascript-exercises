"use strict";

// CHALLENGE 1
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

const checkWinner = function(dolphinsAvg, koalasAvg) {
	if(dolphinsAvg >= 2 * koalasAvg) {
		console.log(`Dolphins win (${dolphinsAvg} vs ${koalasAvg})`);
	} else if(koalasAvg >= 2 * dolphinsAvg){
		console.log(`Koalas win (${koalasAvg} vs ${dolphinsAvg})`);
	} else {
		console.log('No team wins...')
	}
}

checkWinner(scoreDolphins, scoreKoalas);
*/
//CHALLENGE 2
/*
function calcTip(bill) {
	if(50 <= bill && bill <= 300) {
		return bill * 0.15;
	} else {
		return bill * 0.20;
	}
};

const bills = [125, 555, 44];

const tips = bills.map(bill => {
	return calcTip(bill);
})

const total = bills.map((num, idx) => {
	return num + tips[idx];
});
*/
/*
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
  },
};

console.log(jonas.getSummary());
*/

//CHALLENGE 3
/*
const mark = {
	fullName: 'Mark Miller',
	weight: 78,
	height: 1.69,
	calcBMI: function() {
		this.bmi = this.weight / this.height ** 2;
		return this.bmi;
	}
}

const john = {
	fullName: 'John Smith',
	weight: 92,
	height: 1.95,
	calcBMI: function() {
		this.bmi = this.weight / this.height ** 2;
		return this.bmi;
	}
}

mark.calcBMI();
john.calcBMI();

if(mark.bmi > john.bmi) {
	console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})!`);
} else if (john.bmi > mark.bmi) {
	(`${john.fullName}'s BMI(${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})!`);
}
*/

//CHALLENGE 4
/*
const calcTip = function(bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];


for(let i = 0; i < bills.length; i++) {
	const tip = calcTip(bills[i]);
	tips.push(tip);
	totals.push(tip + bills[i]);
}

const calcAverage = function (arr) {
	let sum = 0;
	for(let i = 0; i < arr.length; i++) {
		sum+=arr[i];
	}
	return sum / arr.length;
}

console.log(calcAverage(totals));
*/

//PROBLEM SOLVING
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//1. Understanding the problem
//2. Breaking up into sub-problems

const calcTempAmplitude = function(temps) {
	let max = temps[0];
	let min = temps[0];

	for(let i = 0; i < temps.length; i++) {
		const curTemp = temps[i];
		if(typeof curTemp !== 'number') continue;

		debugger;
		if(curTemp > max) max = curTemp;
		if(curTemp < min) min = curTemp;
	}

	return max-min;
}

const calcTempAmplitudeNew = function(t1, t2) {
 const temps = t1.concat(t2);
	console.log(temps);

	let max = temps[0];
	let min = temps[0];

	for(let i = 0; i < temps.length; i++) {
		const curTemp = temps[i];
		if(typeof curTemp !== 'number') continue;


		if(curTemp > max) max = curTemp;
		if(curTemp < min) min = curTemp;
	}

	return max-min;
}

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/
//DEBUGGING AND BREAKPOINTS
/*
const measureKelvin = function() {
	const measurement = {
		type: 'temp',
		unit: 'celsius',
		value: Number(prompt('Degrees celsius:'))
	}

	// console.table(measurement);

	// console.log(measurement.value);
	// console.warn(measurement.value);
	// console.error(measurement.value);
	const kelvin = measurement.value + 273;
	return kelvin;
}

console.log(measureKelvin());
*/

//CHALLENGE 1
//1st Solution
/*
const printForecast = function(arr) {
	for(let i = 0; i < arr.length; i++) {
		const day = 1;
		console.log(`... ${arr[i]} in ${day + i} days`);
	}
}
printForecast([12, 5, -5, 0, 4]);
*/

//2nd Solution
/*
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function(arr) {
	let str = '... ';
	for(let i = 0; i < arr.length; i++) {
		str = str + `${arr[i]}ºC in ${i + 1} days ... `;
	}
	console.log(str);
}
printForecast(data1);
*/

//SCOPING PRACTICE
/*
function calcAge(birthYear) {
	const age = 2037 - birthYear;
	console.log(firstName);
	return age;
}

const firstName = 'Jonas';
calcAge(1991);
*/

//HOISTING AND TDZ PRACTICE

// Variables
/*
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
	return a + b;
}

const addExpr = function(a, b) {
	return a + b;
}

var addArrow = (a, b) => a + b;

// Example

if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
	console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

// THE THIS KEYWORD

// console.log(this);
/*
const calcAge = function(birthYear) {
	console.log(2037 - birthYear);
	// console.log(this);
}
calcAge(1991);

const calcAgeArrow = birthYear => {
	console.log(2037 - birthYear);
	// console.log(this);
}
calcAgeArrow(1991);

const jonas = {
	year: 1991,
	calcAge: function() {
		// console.log(this);
		console.log(2037 - this.year);
	}
}

jonas.calcAge();

const matilda = {
	year: 2017
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
*/

// REGULAR FUNCTIONS VS ARROW FUNCTIONS

// var firstName = 'Matilda';

// const jonas = {
//   firstName: "Jonas",
//   year: 1991,
//   calcAge: function () {
//     console.log(2037 - this.year);

// SOLUTION 1 - PRE ES6
/*
		const self = this; // self or that
		const isMillenial = function() {
			console.log(self);
			console.log(self.year >= 1981 && self.year <= 1996);
			// console.log(this.year >= 1981 && this.year <= 1996);
		};
		isMillenial();
*/
// SOLUTION 2 - USE ARROW FUNCTIONS
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => {
//     console.log(`Hey, ${this.firstName}`);
//   },
// };

// jonas.greet();
// jonas.calcAge();

// // arguments keyword
// const addExpr = function (a, b) {
// 	console.log(arguments);
// 	return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
// 	console.log(arguments);
// 	return a + b;
// }
// addArrow(2, 5, 8, 12);

// PRIMITIVES VS OBJECTS (primitive vs reference types)
// Primitive types
/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(age);
// Reference type
const me = {
  name: "Jonas",
  age: 30,
};
const friend = me;
friend.age = 27;
console.log("Friend:", friend); // {name: "Jonas", age: 27}
console.log("Me:", me); // {name: "Jonas", age: 27}
// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);
// Reference types
const jessica = {
	firstName: 'Jessica',
	lastName: 'Williams',
	age: 27,
	family: ['Alice', 'Bob']
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// marriedJessica = {}; is not allowed

// Copying objects
const jessica2 = {
	firstName: 'Jessica',
	lastName: 'Williams',
	age: 27,
	family: ['Alice', 'Bob']
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
*/

// DATA STRUCTURES, MODERN OPERATORS AND STINGS
// CHALLENGE 1

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/*
const [players1, players2] = game.players;

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

const {team1, team2, x: draw} = game.odds;

const printGoals = function(...names) {
	console.log(`${names} with ${names.length} goals!`);
}

printGoals('Davies', 'Muller', 'Lewandowski');
printGoals(...game.scored);

console.log(`Most Likely To Win: ${(team1 < team2 && 'Team 1') || 'Team 2'}`);
*/

// CODING CHALLENGE 2

// FIRST TASK

/*

const scored = game.scored;

for (let score of scored.entries()) {
  // console.log(score);
  console.log(`Goal ${score[0] + 1}: ${score[1]}`);
}

// SECOND TASK

let total = 0;
const odds = Object.values(game.odds);

for (let i = 0; i < odds.length; i++) {
  total += odds[i];
}

let oddsAvg = Math.trunc(total / odds.length);
console.log(oddsAvg);

// DIFFERENT SOLUTION FOR SECOND TASK
let average = 0;
for(const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// THIRD TASK

// const {team1, team2} = game;

// console.log(`Odd of victory ${team1}: ${game.odds.team1}
// Odd of draw: ${game.odds.x}
// Odd of victory ${team2}: ${game.odds.team2}`);

// DIFFERENT SOLUTION FOR THIRD TASK
console.log(Object.entries(game.odds));

for(const [team, odd] of Object.entries(game.odds)) {
	const teamString = team === 'x' ? 'draw' : `victory ${game[team]}`
	console.log(`Odd of ${teamString} ${odd}`);
}

// BONUS TASK
	const scorers = {};

	for(let name of game.scored) {
		scorers[name]++ || (scorers[name] = 1);
	}

	console.log(scorers);
*/

// THIRD CHALLENGE

/*

const gameEvents = new Map([
 [17, '⚽ GOAL'],
 [36, '� Substitution'],
 [47, '⚽ GOAL'],
 [61, '� Substitution'],
 [64, '� Yellow card'],
 [69, '� Red card'],
 [70, '� Substitution'],
 [72, '� Substitution'],
 [76, '⚽ GOAL'],
 [80, '⚽ GOAL'],
 [92, '� Yellow card'],
 ]);

// 1 Task

const events = [...new Set(gameEvents.values())];
console.log(events);
// console.log(...gameEvents.values());

// 2 task
gameEvents.delete(64);
console.log(gameEvents);

// 3 task
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes.`);
const time = [...gameEvents.keys()].pop();
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes.`);

// 4 task
for(const [key, value] of gameEvents.entries()) {
	const half = key <= 45 ? 'FIRST' : 'SECOND';
	console.log(`[${half} HALF]: ${key}: ${value}`);
}
*/

// CODING CHALLENGE 4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', () => {
	const text = document.querySelector('textarea').value;
 // console.log(text);
	const rows = text.split('\n');
	console.log(rows);
	for(const [i, row] of rows.entries()) {
		let [first, second] = row.toLowerCase().trim().split('_');
		second = second.replace(second[0], second[0].toUpperCase());
		const output = [first, second].join('');
		console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
	}
});