let nando = [];

function rando() {
	while (nando.length < 4) {
		let hold = Math.floor(Math.random() * 4);
		if (nando.includes(hold)) {
		} else {
			nando.push(hold);
		}
	}
	console.log(nando);
}

console.log(rando());
