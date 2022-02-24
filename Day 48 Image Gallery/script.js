const container = document.querySelector('.container');
const imgUrl = 'https://source.unsplash.com/random/';
const rows = 10;

const rando = () => {
	return Math.floor(Math.random() * 100);
};

for (let i = 0; i < rows * 3; i++) {
	const image = document.createElement('img');
	image.classList.add('image');
	image.src = `${imgUrl}${rando()}`;
	container.appendChild(image);
}
