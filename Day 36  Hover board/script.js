const container = document.getElementById('container');
const palet = document.getElementById('palet');
// var randomColor = Math.floor(Math.random()*16777215).toString(16);
const colors = [];

randomColor();
populate();

function randomColor() {
	while (colors.length < 21) {
		var randomColor = Math.floor(Math.random() * 16777215).toString(16);

		colors.push('#' + randomColor);
	}
}

function populate() {
	colors.forEach((color) => {
		const tile = document.createElement('div');
		tile.classList.add('tile');

		tile.style.backgroundColor = color;

		palet.appendChild(tile);
	});
}

const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
	const square = document.createElement('div');
	square.classList.add('square');

	square.addEventListener('mouseover', () => setColor(square));
	square.addEventListener('mouseout', () => removeColor(square));

	container.appendChild(square);
}

function setColor(element) {
	const color = getRandomColor();
	element.style.background = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
	element.style.background = '#1d1d1d';
	element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}
