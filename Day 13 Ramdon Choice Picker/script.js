const tagsEl = document.getElementById('tags');
const textArea = document.getElementById('textarea');

textArea.focus();

addEventListener('keyup', (e) => {
	createTags(e.target.value);
	if (e.key === 'Enter') {
		setTimeout(() => {
			e.target.value = '';
		}, 10);

		randomSelet();
	}
});

function createTags(input) {
	const tags = input
		.split(',')
		.filter((tag) => tag.trim() != '')
		.map((tag) => tag.trim());

	tagsEl.innerHTML = '';

	tags.forEach((tag) => {
		const tagEl = document.createElement('span');
		tagEl.classList.add('tag');
		tagEl.innerText = tag;
		tagsEl.appendChild(tagEl);
	});
}

function randomSelet() {
	const times = 30;

	const interval = setInterval(() => {
		const randomTag = pickRandomTag();

		addHL(randomTag);

		setTimeout(() => {
			removeHL(randomTag);
		}, 100);
	}, 100);

	setTimeout(() => {
		clearInterval(interval);

		setTimeout(() => {
			const randomTag = pickRandomTag();

			addHL(randomTag);
		}, 100);
	}, times * 100);
}

function pickRandomTag() {
	const tags = document.querySelectorAll('.tag');
	return tags[Math.floor(Math.random() * tags.length)];
}

function addHL(tag) {
	tag.classList.add('highlight');
}

function removeHL(tag) {
	tag.classList.remove('highlight');
}
