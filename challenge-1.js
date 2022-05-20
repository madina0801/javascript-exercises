// CHALLENGE 1
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95; //markHigherBmi true


const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76; //markHigherBmi false

const markHigherBmi = markBmi > johnBmi;

console.log(markHigherBmi);
*/

// CHALLENGE 2
/*
const markBmi = (massMark / heightMark ** 2).toFixed(1);
const johnBmi = (massJohn / heightJohn ** 2).toFixed(1);
console.log(markBmi, johnBmi);


if(markBmi > johnBmi) {
	console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})`);
} else {
 console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi})`);
}
*/

// CHALLENGE 3

// const averageDoplhins = Math.round((96 + 108 + 89)/3);
// const averageKoalas = Math.round((88 + 91 + 110)/3);

// const averageDoplhins = Math.round((97 + 112 + 101)/3);
// const averageKoalas = Math.round((109 + 95 + 106)/3);

/*
if(averageDoplhins > averageKoalas) {
	console.log(`Doplhins are winners!`);
} else if (averageKoalas > averageKoalas) {
	console.log(`Koalas are winners!`);
} else {
	console.log(`That's a draw!`); //DOLPHINS ARE WINNERS
}


if(averageDoplhins >= 100 && averageDoplhins > averageKoalas){
	console.log(`Dolphins are winners!`)
} else if(averageKoalas >= 100 && averageKoalas > averageDoplhins) {
	console.log(`Koalas are winners!`);
} else {
	console.log(`No one has achieved 100!`);
} //KOALAS ARE WINNERS

if(averageDoplhins >= 100 && averageDoplhins > averageKoalas){
	console.log(`Dolphins are winners!`)
} else if(averageKoalas >= 100 && averageKoalas > averageDoplhins) {
	console.log(`Koalas are winners!`);
} else if(averageKoalas === averageDoplhins && averageDoplhins >= 100 && averageKoalas >= 100) {
	console.log(`That's a draw!`);
} //THAT'S A DRAW
*/

// CHALLENGE 4

const bill = 275;
const bill2 = 40;
const bill3 = 430;

const tip = 50 <= bill && bill <= 250 ? bill * 0.15 : bill * 0.2;
const tip2 = 50 <= bill2 && bill2 <= 250 ? bill * 0.15 : bill2 * 0.2;
const tip3 = 50 <= bill3 && bill3 <= 250 ? bill * 0.15 : bill3 * 0.2;

const value = console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)
const value2 = console.log(`The bill was ${bill2}, the tip was ${tip2}, and the total value ${bill2 + tip2}`)
const value3 = console.log(`The bill was ${bill3}, the tip was ${tip3}, and the total value ${bill3 + tip3}`)