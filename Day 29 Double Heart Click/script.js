const loveMe = document.querySelector('.loveme');
const times = document.querySelector('#times');

let timesClicked = 0;

loveMe.addEventListener('dblclick', (e) => {
	liked(e);
	times.innerHTML = timesClicked++;
});

const liked = (e) => {
	const heart = document.createElement('i');
	heart.classList.add('fas');
	heart.classList.add('fa-heart');

	const xPos = e.clientX - e.target.offsetLeft;
	const yPos = e.clientY - e.target.offsetTop;

	heart.style.top = `${yPos}px`;
	heart.style.left = `${xPos}px`;

	loveMe.appendChild(heart);

	setTimeout(() => heart.remove(), 800);
};
