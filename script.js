document.addEventListener('DOMContentLoaded', () => {
    // --- 1. DATI DEI FILM (invariato) ---
    const filmList = [
        { id: 1, title: "Biancaneve e i sette nani", year: 1937, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 2, title: "Pinocchio", year: 1940, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 3, title: "Fantasia", year: 1940, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 4, title: "Dumbo", year: 1941, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 5, title: "Bambi", year: 1942, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 6, title: "Saludos Amigos", year: 1943, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 7, title: "I Tre Caballeros", year: 1945, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 8, title: "Musica Maestro", year: 1946, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 9, title: "Bongo e i tre avventurieri", year: 1947, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 10, title: "Lo scrigno delle sette perle", year: 1948, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 11, title: "Le avventure di Ichabod e Mr. Toad", year: 1949, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 12, title: "Cenerentola", year: 1950, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 13, title: "Alice nel Paese delle Meraviglie", year: 1951, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 14, title: "Le avventure di Peter Pan", year: 1953, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 15, title: "Lilli e il vagabondo", year: 1955, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 16, title: "La bella addormentata nel bosco", year: 1959, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 17, title: "La carica dei cento e uno", year: 1961, category: "Anni ’60–’70 (Silver e Bronze Era)" }, { id: 18, title: "La spada nella roccia", year: 1963, category: "Anni ’60–’70 (Silver e Bronze Era)" }, { id: 19, title: "Il libro della giungla", year: 1967, category: "Anni ’60–’70 (Silver e Bronze Era)" }, { id: 20, title: "Gli Aristogatti", year: 1970, category: "Anni ’60–’70 (Silver e Bronze Era)" }, { id: 21, title: "Robin Hood", year: 1973, category: "Anni ’60–’70 (Silver e Bronze Era)" }, { id: 22, title: "Le avventure di Winnie the Pooh", year: 1977, category: "Anni ’60–’70 (Silver e Bronze Era)" }, { id: 23, title: "Le avventure di Bianca e Bernie", year: 1977, category: "Anni ’60–’70 (Silver e Bronze Era)" }, { id: 24, title: "Red e Toby nemiciamici", year: 1981, category: "Anni ’60–’70 (Silver e Bronze Era)" }, { id: 25, title: "Taron e la pentola magica", year: 1985, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 26, title: "Basil l'investigatopo", year: 1986, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 27, title: "Oliver & Company", year: 1988, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 28, title: "La sirenetta", year: 1989, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 29, title: "Bianca e Bernie nella terra dei canguri", year: 1990, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 30, title: "La bella e la bestia", year: 1991, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 31, title: "Aladdin", year: 1992, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 32, title: "Il re leone", year: 1994, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 33, title: "Pocahontas", year: 1995, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 34, title: "Il gobbo di Notre Dame", year: 1996, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 35, title: "Hercules", year: 1997, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 36, title: "Mulan", year: 1998, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 37, title: "Tarzan", year: 1999, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 38, title: "Dinosauri", year: 2000, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 39, title: "Le follie dell’imperatore", year: 2000, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 40, title: "Atlantis - L'impero perduto", year: 2001, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 41, title: "Lilo & Stitch", year: 2002, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 42, title: "Il pianeta del tesoro", year: 2002, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 43, title: "Koda, fratello orso", year: 2003, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 44, title: "Mucche alla riscossa", year: 2004, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 45, title: "Chicken Little", year: 2005, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 46, title: "I Robinson - Una famiglia spaziale", year: 2007, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 47, title: "Bolt - Un eroe a quattro zampe", year: 2008, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 48, title: "La principessa e il ranocchio", year: 2009, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 49, title: "Rapunzel - L’intreccio della torre", year: 2010, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 50, title: "Winnie the Pooh - Nuove avventure nel Bosco dei 100 Acri", year: 2011, category: "Anni 2010–2020 (Seconda Rinascita)" }, { id: 51, title: "Ralph Spaccatutto", year: 2012, category: "Anni 2010–2020 (Seconda Rinascita)" }, { id: 52, title: "Frozen - Il regno di ghiaccio", year: 2013, category: "Anni 2010–2020 (Seconda Rinascita)" }, { id: 53, title: "Big Hero 6", year: 2014, category: "Anni 2010–2020 (Seconda Rinascita)" }, { id: 54, title: "Zootropolis", year: 2016, category: "Anni 2010–2020 (Seconda Rinascita)" }, { id: 55, title: "Oceania", year: 2016, category: "Anni 2010–2020 (Seconda Rinascita)" }, { id: 56, title: "Ralph spacca Internet", year: 2018, category: "Anni 2010–2020 (Seconda Rinascita)" }, { id: 57, title: "Frozen II - Il segreto di Arendelle", year: 2019, category: "Anni 2010–2020 (Seconda Rinascita)" }, { id: 58, title: "Raya e l’ultimo drago", year: 2021, category: "Anni 2020–2023" }, { id: 59, title: "Encanto", year: 2021, category: "Anni 2020–2023" }, { id: 60, title: "Strange World - Un mondo misterioso", year: 2022, category: "Anni 2020–2023" }, { id: 61, title: "Wish", year: 2023, category: "Anni 2020–2023" }, { id: 101, title: "Mufasa: Il re leone", year: 2024, category: "Live-action & Futuri" }, { id: 102, title: "Snow White", year: 2025, category: "Live-action & Futuri" }, { id: 103, title: "Lilo & Stitch (live-action)", year: 2025, category: "Live-action & Futuri" }, { id: 104, title: "Freakier Friday", year: 2025, category: "Live-action & Futuri" }, { id: 105, title: "Moana (live-action)", year: 2026, category: "Live-action & Futuri" }, { id: 201, title: "Il gobbo di Notre Dame (live-action)", year: "TBD", category: "In Sviluppo" }, { id: 202, title: "Cruella 2", year: "TBD", category: "In Sviluppo" }, { id: 203, title: "Bambi (live-action)", year: "TBD", category: "In Sviluppo" }, { id: 204, title: "Il libro della giungla 2", year: "TBD", category: "In Sviluppo" }, { id: 205, title: "Gli Aristogatti (live-action)", year: "TBD", category: "In Sviluppo" }, { id: 206, title: "Hercules (live-action)", year: "TBD", category: "In Sviluppo" }, { id: 207, title: "Robin Hood (live-action)", year: "TBD", category: "In Sviluppo" }, { id: 208, title: "La spada nella roccia (live-action)", year: "TBD", category: "In Sviluppo" },
    ];
    
    let appState = { theme: 'dark', movies: {} };

    // SELETTORI DOM AGGIORNATI
    const filmContainer = document.getElementById('film-container');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    const modal = document.getElementById('movie-modal');
    const modalCloseBtn = document.querySelector('.close-btn');
    const exportBtn = document.getElementById('export-btn');
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const markAllSeenBtn = document.getElementById('mark-all-seen-btn');
    const resetAllBtn = document.getElementById('reset-all-btn');

    let currentlyVisibleFilmIds = [];

    // FUNZIONI
    function loadState() { /* ... identica a prima ... */ }
    function saveState() { /* ... identica a prima ... */ }

    function renderMovies() {
        if (!filmContainer) return;

        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;

        const filteredList = filmList.filter(movie => {
            const matchesSearch = movie.title.toLowerCase().includes(searchTerm);
            const matchesCategory = selectedCategory === 'all' || movie.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });

        currentlyVisibleFilmIds = filteredList.map(m => m.id);

        const groupedMovies = filteredList.reduce((acc, movie) => { acc[movie.category] = acc[movie.category] || []; acc[movie.category].push(movie); return acc; }, {});
        
        filmContainer.innerHTML = ''; 
        if (filteredList.length === 0) {
            filmContainer.innerHTML = `<p style="text-align:center; font-size: 1.2rem; color: var(--dark-secondary-text);">Nessun film trovato per questa ricerca.</p>`;
            return;
        }

        for (const category in groupedMovies) {
            const categorySection = document.createElement('section');
            categorySection.className = 'film-category';
            categorySection.innerHTML = `<h2>${category}</h2>`;
            const grid = document.createElement('div');
            grid.className = 'film-grid';
            groupedMovies[category].forEach(movie => {
                const movieState = appState.movies[movie.id] || {};
                const card = document.createElement('div');
                card.className = 'movie-card';
                card.innerHTML = `
                    <div class="movie-title">${movie.title} (${movie.year})</div>
                    <div class="checkbox-container">
                        <label class="checkbox-label">
                            <input type="checkbox" data-id="${movie.id}" ${movieState.seen ? 'checked' : ''}>
                            <span>Visto</span>
                        </label>
                    </div>
                    <div class="movie-actions">
                        <button class="fav-btn ${movieState.favorite ? 'favorited' : ''}" data-id="${movie.id}" aria-label="Aggiungi ai preferiti"><i class="fas fa-heart"></i></button>
                        <button class="details-btn" data-id="${movie.id}">Dettagli</button>
                    </div>`;
                grid.appendChild(card);
            });
            categorySection.appendChild(grid);
            filmContainer.appendChild(categorySection);
        }
    }

    function populateCategoryFilter() {
        const categories = [...new Set(filmList.map(movie => movie.category))];
        categoryFilter.innerHTML = `<option value="all">Tutte le ere Disney</option>`;
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });
    }

    function animateCounter(element, start, end, duration, isPercentage = false) { /* ... identica a prima ... */ }
    function updateStatsDashboard(isInitialLoad = false) { /* ... identica a prima ... */ }
    function handleContainerClick(e) { /* ... identica a prima ... */ }
    function openModal(movieId) { /* ... identica a prima ... */ }
    function closeModal() { /* ... identica a prima ... */ }
    function toggleTheme() { /* ... identica a prima ... */ }
    function updateThemeIcon() { /* ... identica a prima ... */ }
    function handleScroll() { /* ... identica a prima ... */ }
    function exportSeenMovies() { /* ... identica a prima ... */ }

    // NUOVE FUNZIONI PER I PULSANTI
    function markAllVisibleAsSeen() {
        currentlyVisibleFilmIds.forEach(id => {
            appState.movies[id] = appState.movies[id] || {};
            appState.movies[id].seen = true;
            if (!appState.movies[id].dateSeen) {
                appState.movies[id].dateSeen = new Date().toLocaleDateString('it-IT');
            }
        });
        saveState();
        renderMovies();
        updateStatsDashboard();
    }

    function resetAllData() {
        const confirmation = confirm("Sei sicuro di voler cancellare tutti i dati? Tutti i film visti, i preferiti e le note verranno persi per sempre. Questa azione non può essere annullata.");
        if (confirmation) {
            appState.movies = {};
            saveState();
            renderMovies();
            updateStatsDashboard();
            alert("Tutti i dati sono stati cancellati. Si riparte da zero!");
        }
    }

    // EVENT LISTENERS AGGIORNATI
    if (filmContainer) filmContainer.addEventListener('click', handleContainerClick);
    if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
    window.addEventListener('scroll', handleScroll);
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => { if (e.target == modal) { closeModal(); } });
    if (exportBtn) exportBtn.addEventListener('click', exportSeenMovies);
    
    // NUOVI EVENT LISTENERS
    if (searchInput) searchInput.addEventListener('input', renderMovies);
    if (categoryFilter) categoryFilter.addEventListener('change', renderMovies);
    if (markAllSeenBtn) markAllSeenBtn.addEventListener('click', markAllVisibleAsSeen);
    if (resetAllBtn) resetAllBtn.addEventListener('click', resetAllData);

    // INIZIALIZZAZIONE
    loadState();
    populateCategoryFilter();
    renderMovies();
    updateStatsDashboard(true);
});