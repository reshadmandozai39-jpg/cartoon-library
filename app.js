function cardHTML(item) {
	return `
    <a class="card" href="detail.html?id=${item.id}" target="_blank" rel="noopener" tabindex="0">
      <div class="card-theme" style="background:${item.color}">${item.title}</div>
      <div class="card-body">
        <p class="card-title">${item.title}</p>
        <p class="card-desc">${item.short}</p>
        <img class="card-thumb" src="${item.img}" alt="${item.title}">
        <span class="card-tag">Mehr erfahren →</span>
      </div>
    </a>`;
}

function renderAll() {
	const main = document.getElementById('results');
	main.innerHTML = '';
	CATEGORIES.forEach((cat) => {
		const items = CARTOONS.filter((c) => c.cat === cat.id);
		if (items.length === 0) return;
		const section = document.createElement('section');
		section.className = 'row-section';
		section.id = cat.id;
		section.innerHTML = `
      <div class="row-head">
        <h2>${cat.label}</h2>
        <span class="count">${items.length} Titel</span>
      </div>
      <div class="row-scroll">${items.map(cardHTML).join('')}</div>
    `;
		main.appendChild(section);
	});
}

function renderSearch(query) {
	const main = document.getElementById('results');
	const q = query.trim().toLowerCase();
	const matches = CARTOONS.filter(
		(c) =>
			c.title.toLowerCase().includes(q) || c.short.toLowerCase().includes(q),
	);
	main.innerHTML = `
    <section class="row-section">
      <div class="row-head">
        <h2>Suchergebnisse für "${query}"</h2>
        <span class="count">${matches.length} Treffer</span>
      </div>
      ${matches.length ? `<div class="row-scroll">${matches.map(cardHTML).join('')}</div>` : `<p class="no-results">Keine Cartoons gefunden. Versuch einen anderen Suchbegriff.</p>`}
    </section>
  `;
}

const input = document.getElementById('searchInput');
input.addEventListener('input', (e) => {
	const val = e.target.value;
	if (val.trim() === '') {
		renderAll();
	} else {
		renderSearch(val);
	}
});

renderAll();
