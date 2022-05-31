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