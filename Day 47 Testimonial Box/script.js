const testContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImg = document.querySelector('.user-image');
const userName = document.querySelector('.user-name');
const role = document.querySelector('.role');

const testimonials = [];

fetchData();

async function fetchData() {
	const res = await fetch('https://testimonialapi.toolcarton.com/api');

	const data = await res.json();
	data.forEach((element) => {
		const mold = { name: '', position: '', photo: '', text: '' };
		mold.name = element.name;
		mold.position = element.designation;
		mold.photo = element.avatar;
		mold.text = element.message;

		testimonials.push(mold);
	});
}

let idx = 1;

function nextTestimonial() {
	const { name, position, photo, text } = testimonials[idx];
	const rando = () => Math.floor(Math.random() * 100);
	testimonial.innerHTML = text;
	userImg.src = photo;
	userName.innerHTML = name;
	role.innerHTML = position;

	idx++;

	if (idx > testimonials.length - 1) {
		idx = 0;
	}
}

setInterval(() => nextTestimonial(), 10000);
