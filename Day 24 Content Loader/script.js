const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');
const rando = Math.floor(Math.random() * 100);
const today = new Date();

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
	console.log(rando);
	header.innerHTML = '<img src="https://source.unsplash.com/random/" alt="" />';
	title.innerHTML = 'Lorem ipsum dolor sit amet';
	excerpt.innerHTML =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, deserunt.';
	profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/${rando}.jpg" alt="" />`;
	name.innerHTML = 'John Doe';
	date.innerHTML = today.toDateString();

	animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
	animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
