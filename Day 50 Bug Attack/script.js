const screens = document.querySelectorAll('.screen');
const chooseBtn = document.querySelectorAll('.choose-insect-btn');
const startBtn = document.getElementById('start-btn');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const messageEl = document.getElementById('message');
const gameContainer = document.getElementById('game-container');

let seconds = 0;
let score = 0;
let selectedInsect = {};

startBtn.addEventListener('click', () => screens[0].classList.add('up'));

chooseBtn.forEach((btn) => {
	btn.addEventListener('click', () => {
		const img = btn.querySelector('img');
		const src = img.getAttribute('src');
		const alt = img.getAttribute('alt');
		selectedInsect = { src, alt };
		screens[1].classList.add('up');
		setTimeout(createInsect, 1000);
		startGame();
	});
});

function createInsect() {
	const insect = document.createElement('div');
	insect.classList.add('insect');
	const { x, y } = getRandomLocation();
	insect.style.top = `${y}px`;
	insect.style.left = `${x}px`;
	insect.innerHTML = `
    <img src='${selectedInsect.src}' alt='${
		selectedInsect.alt
	}' style='transform: rotate(${Math.random() * 360}deg'/>
`;
	insect.addEventListener('click', catchInsect);
	gameContainer.appendChild(insect);
}

function getRandomLocation() {
	const width = window.innerWidth;
	const height = window.innerHeight;
	const x = Math.random() * (width - 200) + 100;
	const y = Math.random() * (height - 200) + 100;
	return { x, y };
}

function catchInsect() {
	console.log('shit');
}
