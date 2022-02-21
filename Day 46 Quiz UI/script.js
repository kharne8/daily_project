const img = document.querySelector('.img');

img.addEventListener('click', (e) => showCase(e));

function showCase(e) {
	e.target.classList.add('hovered');
}
