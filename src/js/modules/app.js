import { CARTOONS, CATEGORIES } from '../data/data.js';

function cardHTML(item) {
	return `
    <a class="card" href="./src/pages/detail.html?id=${item.id}">
      <div class="card-thumb">
        <img src="${item.img}" alt="${item.title}">
        <span class="card-genre-badge">${item.genre || ''}</span>
      </div>

      <div class="card-body">
        <h3 class="card-title">${item.title}</h3>
        <p class="card-desc">${item.short}</p>
        <span class="card-tag">Mehr erfahren →</span>
      </div>
    </a>
  `;
}

function renderAll() {
	const main = document.getElementById('results');
	if (!main) return;
	main.innerHTML = '';
	CATEGORIES.forEach((cat) => {
		const items = CARTOONS.filter((c) => c.cat === cat.id);
		if (items.length === 0) return;
		const section = document.createElement('section');
		section.className = 'category-section row-section';
		section.id = cat.id;
		section.innerHTML = `
      <div class="row-head">
        <h2>${cat.label}</h2>
        <span class="subtitle">${items.length} Titel</span>
      </div>
      <div class="slider-container">
        <button class="slide-btn prev-btn" onclick="scrollRow(this, -1)">❮</button>
        <div class="row-scroll">${items.map(cardHTML).join('')}</div>
        <button class="slide-btn next-btn" onclick="scrollRow(this, 1)">❯</button>
      </div>
    `;
		main.appendChild(section);
	});
}

function renderSearch(query) {
	const main = document.getElementById('results');
	if (!main) return;
	const q = query.trim().toLowerCase();
	const matches = CARTOONS.filter(
		(c) =>
			c.title.toLowerCase().includes(q) || c.short.toLowerCase().includes(q),
	);
	main.innerHTML = `
    <section class="category-section row-section">
      <div class="row-head">
        <h2>Suchergebnisse für "${query}"</h2>
        <span class="subtitle">${matches.length} Treffer</span>
      </div>
      ${
				matches.length
					? `<div class="slider-container">
               <button class="slide-btn prev-btn" onclick="scrollRow(this, -1)">❮</button>
               <div class="row-scroll">${matches.map(cardHTML).join('')}</div>
               <button class="slide-btn next-btn" onclick="scrollRow(this, 1)">❯</button>
             </div>`
					: `<p class="no-results" style="padding: 20px; color: var(--text-dim);">Keine Cartoons gefunden. Versuch einen anderen Suchbegriff.</p>`
			}
    </section>
  `;
}

function scrollRow(button, direction) {
	const section = button.closest('.row-section');
	if (!section) return;

	const rowScroll = section.querySelector('.row-scroll');
	if (!rowScroll) return;

	const scrollAmount = 400 * direction;

	rowScroll.scrollBy({
		left: scrollAmount,
		behavior: 'smooth',
	});
}

window.scrollRow = scrollRow;

document.addEventListener('DOMContentLoaded', () => {
	const burgerBtn = document.getElementById('burgerBtn');
	const mainNav = document.getElementById('mainNav');

	if (burgerBtn && mainNav) {
		burgerBtn.addEventListener('click', () => {
			mainNav.classList.toggle('active');
		});
	}

	const navItems = document.querySelectorAll('.nav-item');
	navItems.forEach((item) => {
		const link = item.querySelector('.nav-link');
		if (link) {
			link.addEventListener('click', (e) => {
				if (window.innerWidth <= 900) {
					const wrapper = item.querySelector('.dropdown-wrapper');
					if (wrapper) {
						e.preventDefault();
						wrapper.style.display =
							wrapper.style.display === 'block' ? 'none' : 'block';
					}
				}
			});
		}
	});

	const input = document.getElementById('searchInput');
	if (input) {
		input.addEventListener('input', (e) => {
			const val = e.target.value;
			if (val.trim() === '') {
				renderAll();
			} else {
				renderSearch(val);
			}
		});
	}

	renderAll();
});
