let answerList = ['yes', 'no', 'maybe', 'shut up', 'ask again later'];

document.getElementById('answer-button').addEventListener('click', randomAnswer);

function randomAnswer() {
	document.getElementById('answer-section').innerHTML = answerList[Math.floor(Math.random() * 5)];
}

console.log(answerList);