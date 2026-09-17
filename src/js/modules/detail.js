import { CARTOONS } from '../data/data.js';

const urlParams = new URLSearchParams(window.location.search);
const seriesId = urlParams.get('id');

const cartoon = CARTOONS.find((c) => c.id === seriesId);

if (cartoon) {
	document.title = cartoon.title + ' – CartoonHub';

	document.getElementById('detailTitle').innerText = cartoon.title;

	let imgSrc = cartoon.img;
	if (imgSrc.startsWith('./')) {
		imgSrc = '../..' + imgSrc.slice(1);
	} else if (imgSrc.startsWith('/')) {
		imgSrc = '../..' + imgSrc;
	} else if (imgSrc.startsWith('src/')) {
		imgSrc = '../../' + imgSrc;
	}

	const imgEl = document.getElementById('detailImage');
	if (imgEl) {
		imgEl.src = imgSrc;
		imgEl.alt = cartoon.title;
	}

	document.getElementById('detailDescription').innerText = cartoon.short;
} else {
	document.getElementById('detailTitle').innerText = 'Serie nicht gefunden';
	document.getElementById('detailDescription').innerText =
		'Bitte gehe zurück zur Hauptseite und wähle eine gültige Serie aus.';
	const imgEl = document.getElementById('detailImage');
	if (imgEl) imgEl.style.display = 'none';
}
