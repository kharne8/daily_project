const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

const months = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];

toggle.addEventListener('click', (e) => {
	const html = document.querySelector('html');

	if (html.classList.contains('dark')) {
		html.classList.remove('dark');
		e.target.innerHTML = 'Dark Mode';
	} else {
		html.classList.add('dark');
		e.target.innerHTML = 'Light Mode';
	}
});

function setTime() {
	const time = new Date();
	const date = time.getDate();
	const month = time.getMonth();
	const day = time.getDay();
	const hours = time.getHours();
	const hoursClock = hours % 12;
	const minutes = time.getMinutes();
	const seconds = time.getSeconds();
	const ampm = hours >= 12 ? 'PM' : 'AM';

	hour.style.transform = `translate(-50%, -100%) rotate(${scale(
		hoursClock,
		0,
		12,
		0,
		360
	)}deg)`;
	minute.style.transform = `translate(-50%, -100%) rotate(${scale(
		minutes,
		0,
		60,
		0,
		360
	)}deg)`;
	second.style.transform = `translate(-50%, -100%) rotate(${scale(
		seconds,
		0,
		60,
		0,
		360
	)}deg)`;

	timeEl.innerHTML = `${hoursClock}:${
		minutes < 10 ? `0 ${minutes}` : minutes
	}:${seconds} ${ampm}`;
	dateEl.innerHTML = `${days[day]}, ${months[month]} <span class='circle'>${date}</span>`;
}

function scale(number, inMin, inMax, outMin, outMax) {
	return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

setTime();

setInterval(setTime, 1000);
