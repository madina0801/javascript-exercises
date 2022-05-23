// CHALLENGE 1
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