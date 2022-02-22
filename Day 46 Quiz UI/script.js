const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const btn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
let quizData = [];

fetchQuiz();

async function fetchQuiz() {
	const res = await fetch(
		'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple'
	);

	const data = await res.json();
	data.results.forEach((data) => {
		const mold = { question: '', answers: [], correct: '' };
		mold.question = data.question;
		for (let i = 0; i < data.incorrect_answers.length; i++) {
			mold.answers.push(data.incorrect_answers[i]);
		}
		mold.answers.push(data.correct_answer);
		mold.correct = data.correct_answer;

		quizData.push(mold);
	});

	loadQuiz();
}

function loadQuiz() {
	let nando = [];

	while (nando.length < 4) {
		let hold = Math.floor(Math.random() * 4);
		if (nando.includes(hold)) {
		} else {
			nando.push(hold);
		}
	}

	deselectAnswers();

	const currentQuizData = quizData[currentQuiz];

	questionEl.innerText = currentQuizData.question;
	a_text.innerText = currentQuizData.answers[nando[0]];
	b_text.innerText = currentQuizData.answers[nando[1]];
	c_text.innerText = currentQuizData.answers[nando[2]];
	d_text.innerText = currentQuizData.answers[nando[3]];
	console.log(currentQuizData);
}

function deselectAnswers() {
	answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
	let answer;

	answerEls.forEach((answerEl) => {
		if (answerEl.checked) {
			answer = answerEl.nextElementSibling.innerText;
		}
	});

	return answer;
}

btn.addEventListener('click', () => {
	const answer = getSelected();

	if (answer) {
		if (answer === quizData[currentQuiz].correct) {
			score++;
		}

		currentQuiz++;

		if (currentQuiz < quizData.length) {
			loadQuiz();
		} else {
			quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
		}
	}
});
