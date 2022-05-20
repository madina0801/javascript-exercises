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

const averageDoplhins = Math.round((96 + 108 + 89)/3);
const averageKoalas = Math.round((88 + 91 + 110)/3);

// const averageDoplhins = Math.round((97 + 112 + 101)/3);
// const averageKoalas = Math.round((109 + 95 + 106)/3);


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