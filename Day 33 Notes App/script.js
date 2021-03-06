const addBtn = document.getElementById('add');
const clearBtn = document.getElementById('clear');

const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {
	notes.forEach((note) => addNewNote(note));
}

addBtn.addEventListener('click', () => addNewNote());
clearBtn.addEventListener('click', () => clearLS());

function addNewNote(text = '') {
	const note = document.createElement('div');
	note.classList.add('note');

	note.innerHTML = `
        <div class="tools">
			<button class="edit"><i class="fas fa-edit"></i></button>
			<button class="delete"><i class="fas fa-trash-alt"></i></button>
		</div>

		<div class="main ${text ? '' : 'hidden'}"></div>
		<textarea class="${text ? 'hidden' : ''}">Hello World</textarea>
    `;
	console.log(note);
	const editBTN = note.querySelector('.edit');
	const deleteBTN = note.querySelector('.delete');
	const main = note.querySelector('.main');
	const textArea = note.querySelector('textarea');

	textArea.value = text;
	main.innerHTML = marked(text);

	deleteBTN.addEventListener('click', () => {
		note.remove();
		updateLS();
	});

	editBTN.addEventListener('click', () => {
		main.classList.toggle('hidden');
		textArea.classList.toggle('hidden');
	});

	textArea.addEventListener('input', (e) => {
		const { value } = e.target;

		main.innerHTML = marked(value);

		updateLS();
	});

	document.body.appendChild(note);
}

function updateLS() {
	const notesText = document.querySelectorAll('textarea');

	const notes = [];

	notesText.forEach((note) => notes.push(note.value));

	localStorage.setItem('notes', JSON.stringify(notes));
}

function clearLS() {
	window.alert('Are you sure you wanna clear local storage?');
	localStorage.clear();
	window.location.reload();
}
