import { CARTOONS } from '../data/data.js';

const urlParams = new URLSearchParams(window.location.search);
const seriesId = urlParams.get('id');

const cartoon = CARTOONS.find((c) => c.id === seriesId);

if (cartoon) {
	document.title = cartoon.title + ' – CartoonHub';

	document.getElementById('detailTitle').innerText = cartoon.title;

	const rating = (4.2 + ((cartoon.title.length * 17) % 7) / 10).toFixed(1);
	const fans = Math.max(
		1200,
		Math.round((cartoon.title.length + cartoon.genre.length) * 220),
	);
	const formattedFans = `${(fans / 1000).toFixed(fans >= 10000 ? 0 : 1)}K`;

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

	const description =
		cartoon.description ||
		`${cartoon.short} Diese ${cartoon.genre.toLowerCase()}-Serie verbindet starke Figuren mit einer eigenen Welt und vielen besonderen Momenten.`;
	document.getElementById('detailDescription').innerText = description;
	document.getElementById('detailGenre').innerText = cartoon.genre;
	document.getElementById('detailRating').innerText = `⭐ ${rating}/5`;
	document.getElementById('detailFans').innerText = `${formattedFans} Fans`;
	document.getElementById('detailGenreStat').innerText = cartoon.genre;
	document.getElementById('detailRatingStat').innerText = `${rating}/5`;
	document.getElementById('detailFansStat').innerText = `${formattedFans} Fans`;
} else {
	document.getElementById('detailTitle').innerText = 'Serie nicht gefunden';
	document.getElementById('detailDescription').innerText =
		'Bitte gehe zurück zur Hauptseite und wähle eine gültige Serie aus.';
	const imgEl = document.getElementById('detailImage');
	if (imgEl) imgEl.style.display = 'none';
}
