const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const fast = document.querySelector('#fast');
const cheap = document.querySelector('#cheap');

toggles.forEach((toggle) =>
	toggle.addEventListener('change', (e) => tricked(e.target))
);

function tricked(clickedOne) {
	if (good.checked && fast.checked && cheap.checked) {
		if (good === clickedOne) {
			fast.checked = false;
		}
	}

	if (fast === clickedOne) {
		cheap.checked = false;
	}

	if (cheap === clickedOne) {
		good.checked = false;
	}
}
