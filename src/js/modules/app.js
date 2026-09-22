import { CARTOONS, CATEGORIES } from '../data/data.js';

function cardHTML(item) {
	const isSubpage = window.location.pathname.includes('/src/pages/');
	const imagePath = item.img.replace(
		'./src/assets/',
		isSubpage ? '../assets/' : './src/assets/',
	);
	const detailPath = isSubpage
		? `detail.html?id=${item.id}`
		: `./src/pages/detail.html?id=${item.id}`;
	const rating = (4.2 + ((item.title.length * 17) % 7) / 10).toFixed(1);
	const fans = Math.max(
		1200,
		Math.round((item.title.length + item.genre.length) * 220),
	);
	const formattedFans = `${(fans / 1000).toFixed(fans >= 10000 ? 0 : 1)}K`;

	return `
	    <a class="card" href="${detailPath}">
      <div class="card-thumb">
				<img src="${imagePath}" alt="${item.title}">
        <span class="card-genre-badge">${item.genre || ''}</span>
      </div>

      <div class="card-body">
        <div class="card-meta">
          <span class="card-rating">⭐ ${rating}</span>
          <span>${formattedFans} Fans</span>
        </div>
        <h3 class="card-title">${item.title}</h3>
        <p class="card-desc">${item.short}</p>
        <span class="card-tag">Mehr erfahren <span aria-hidden="true">→</span></span>
      </div>
    </a>
  `;
}

function getCategoryItems(categoryId) {
	if (categoryId === 'klassiker') return CARTOONS;
	return CARTOONS.filter((cartoon) => cartoon.cat === categoryId);
}

function renderAll() {
	const main = document.getElementById('results');
	if (!main) return;
	if (main.classList.contains('catalog-results')) {
		renderCatalogByCategory();
		return;
	}
	main.innerHTML = '';
	CATEGORIES.forEach((cat) => {
		const items = getCategoryItems(cat.id);
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

function renderCatalogByCategory() {
	const main = document.getElementById('results');
	if (!main) return;
	main.innerHTML = CATEGORIES.map((category) => {
		const items = getCategoryItems(category.id);
		if (!items.length) return '';
		return `
			<section class="category-section row-section catalog-section" id="${category.id}">
				<div class="row-head">
					<h2>${category.label}</h2>
					<span class="subtitle">${items.length} Titel</span>
				</div>
				<div class="slider-container">
					<button class="slide-btn prev-btn" onclick="scrollRow(this, -1)" aria-label="Vorherige Serien">❮</button>
					<div class="row-scroll">${items.map(cardHTML).join('')}</div>
					<button class="slide-btn next-btn" onclick="scrollRow(this, 1)" aria-label="Nächste Serien">❯</button>
				</div>
			</section>
		`;
	}).join('');
}

function renderCatalog(items, heading) {
	const main = document.getElementById('results');
	if (!main) return;
	main.innerHTML = `
		<section class="category-section row-section catalog-section">
			<div class="row-head">
				<h2>${heading}</h2>
				<span class="subtitle">${items.length} Titel</span>
			</div>
			${
				items.length
					? `<div class="slider-container">
						<button class="slide-btn prev-btn" onclick="scrollRow(this, -1)" aria-label="Vorherige Serien">❮</button>
						<div class="row-scroll">${items.map(cardHTML).join('')}</div>
						<button class="slide-btn next-btn" onclick="scrollRow(this, 1)" aria-label="Nächste Serien">❯</button>
					</div>`
					: '<p class="no-results">Keine Serien gefunden.</p>'
			}
		</section>
	`;
}

function renderSearch(query) {
	const main = document.getElementById('results');
	if (!main) return;
	const q = query.trim().toLowerCase();
	const matches = CARTOONS.filter(
		(c) =>
			c.title.toLowerCase().includes(q) ||
			(c.search && c.search.toLowerCase().includes(q)),
	);
	if (main.classList.contains('catalog-results')) {
		renderCatalog(matches, `Suchergebnisse für "${query}"`);
		return;
	}
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
	const mainNav =
		document.getElementById('mainNav') || document.querySelector('.main-nav');
	const themeToggle = document.getElementById('themeToggle');
	const themeIcon = themeToggle
		? themeToggle.querySelector('.theme-icon')
		: null;

	const applyTheme = (theme) => {
		document.body.setAttribute('data-theme', theme);
		if (themeIcon) {
			themeIcon.textContent = theme === 'light' ? 'Dark' : 'Light';
		}
		localStorage.setItem('cartoon-theme', theme);
	};

	const savedTheme = localStorage.getItem('cartoon-theme');
	if (savedTheme === 'light') {
		applyTheme('light');
	} else {
		applyTheme('dark');
	}

	if (themeToggle) {
		themeToggle.addEventListener('click', () => {
			const nextTheme =
				document.body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
			applyTheme(nextTheme);
		});
	}

	if (burgerBtn && mainNav) {
		burgerBtn.addEventListener('click', () => {
			const isOpen = mainNav.classList.toggle('active');
			burgerBtn.setAttribute('aria-expanded', String(isOpen));
		});
	}

	if (mainNav) {
		mainNav.querySelectorAll('.nav-link').forEach((link) => {
			link.addEventListener('click', () => {
				const hasDropdown = link
					.closest('.nav-item')
					?.querySelector('.dropdown-wrapper');
				if (window.innerWidth <= 900 && burgerBtn && !hasDropdown) {
					mainNav.classList.remove('active');
					burgerBtn.setAttribute('aria-expanded', 'false');
				}
			});
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
						navItems.forEach((navItem) => {
							if (navItem !== item) navItem.classList.remove('mobile-open');
						});
						item.classList.toggle('mobile-open');
					}
				}
			});
		}
	});

	if (mainNav) {
		mainNav.querySelectorAll('.dropdown-wrapper a').forEach((link) => {
			link.addEventListener('click', () => {
				if (window.innerWidth <= 900 && burgerBtn) {
					mainNav.classList.remove('active');
					mainNav.querySelectorAll('.mobile-open').forEach((item) => {
						item.classList.remove('mobile-open');
					});
					burgerBtn.setAttribute('aria-expanded', 'false');
				}
			});
		});
	}

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
