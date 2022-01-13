const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = ['Message One', 'Message Two', 'Message 3', 'Message 4'];

const types = ['info', 'success', 'error', 'add'];

button.addEventListener('click', () => makeToast());

function makeToast() {
	const toast = document.createElement('div');

	toast.classList.add('toast');
	toast.classList.add(getRandoType());

	toast.innerText = getRando();

	toasts.appendChild(toast);

	setTimeout(() => {
		toast.remove();
	}, 2000);
}

function getRando() {
	return messages[Math.floor(Math.random() * messages.length)];
}

function getRandoType() {
	return types[Math.floor(Math.random() * types.length)];
}
