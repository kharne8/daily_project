const images = document.querySelectorAll('img');
const listItems = document.querySelectorAll('nav ul li');

listItems.forEach((item, idx) => {
	item.addEventListener('click', () => {
		hideImages();
		hideItems();
		item.classList.add('active');
		images[idx].classList.add('show');
	});
});

function hideImages() {
	images.forEach((image) => image.classList.remove('show'));
}

function hideItems() {
	listItems.forEach((item) => item.classList.remove('active'));
}
