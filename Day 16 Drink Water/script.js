const smallCups = document.querySelectorAll('.cup-small');
const litters = document.getElementById('litters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup, key) => {
	cup.addEventListener('click', () => highLight(key));
});

function highLight(key) {
	if (
		smallCups[key].classList.contains('full') &&
		!smallCups[key].nextElementSibling.classList.contains('full')
	) {
		key--;
	}
	smallCups.forEach((cup, index) => {
		if (index <= key) {
			cup.classList.add('full');
		} else {
			cup.classList.remove('full');
		}
	});
	updateBigCup();
}

function updateBigCup() {
	const fullCups = document.querySelectorAll('.cup-small.full').length;
	const totalCups = smallCups.length;

	if (fullCups === 0) {
		percentage.style.visibility = 'hidden';
		percentage.style.height = 0;
	} else {
		percentage.style.visibility = 'visible';
		percentage.style.height = `${(fullCups / totalCups) * 330}px`;
		percentage.innerText = `${(fullCups / totalCups) * 100}%`;
	}
	if (fullCups === totalCups) {
		(remained.style.visibility = 'hidden'), (remained.style.height = 0);
	} else {
		remained.style.visibility = 'visible';
		litters.innerText = `${2 - (250 * fullCups) / 1000}L`;
	}
}
