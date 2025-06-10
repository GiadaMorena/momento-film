document.addEventListener('DOMContentLoaded', () => {
    // --- 1. DATI DEI FILM ---
    const filmList = [
        { id: 1, title: "Biancaneve e i sette nani", year: 1937, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 2, title: "Pinocchio", year: 1940, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 3, title: "Fantasia", year: 1940, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 4, title: "Dumbo", year: 1941, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 5, title: "Bambi", year: 1942, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 6, title: "Saludos Amigos", year: 1943, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 7, title: "I Tre Caballeros", year: 1945, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 8, title: "Musica Maestro", year: 1946, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 9, title: "Bongo e i tre avventurieri", year: 1947, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 10, title: "Lo scrigno delle sette perle", year: 1948, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 11, title: "Le avventure di Ichabod e Mr. Toad", year: 1949, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 12, title: "Cenerentola", year: 1950, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 13, title: "Alice nel Paese delle Meraviglie", year: 1951, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 14, title: "Le avventure di Peter Pan", year: 1953, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 15, title: "Lilli e il vagabondo", year: 1955, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 16, title: "La bella addormentata nel bosco", year: 1959, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 17, title: "La carica dei cento e uno", year: 1961, category: "Anni ’60–’70 (Silver e Bronze Era)" }, { id: 18, title: "La spada nella roccia", year: 1963, category: "Anni ’60–’70 (Silver e Bronze Era)" }, { id: 19, title: "Il libro della giungla", year: 1967, category: "Anni ’60–’70 (Silver e Bronze Era)" }, { id: 20, title: "Gli Aristogatti", year: 1970, category: "Anni ’60–’70 (Silver e Bronze Era)" }, { id: 21, title: "Robin Hood", year: 1973, category: "Anni ’60–’70 (Silver e Bronze Era)" }, { id: 22, title: "Le avventure di Winnie the Pooh", year: 1977, category: "Anni ’60–’70 (Silver e Bronze Era)" }, { id: 23, title: "Le avventure di Bianca e Bernie", year: 1977, category: "Anni ’60–’70 (Silver e Bronze Era)" }, { id: 24, title: "Red e Toby nemiciamici", year: 1981, category: "Anni ’60–’70 (Silver e Bronze Era)" }, { id: 25, title: "Taron e la pentola magica", year: 1985, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 26, title: "Basil l'investigatopo", year: 1986, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 27, title: "Oliver & Company", year: 1988, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 28, title: "La sirenetta", year: 1989, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 29, title: "Bianca e Bernie nella terra dei canguri", year: 1990, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 30, title: "La bella e la bestia", year: 1991, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 31, title: "Aladdin", year: 1992, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 32, title: "Il re leone", year: 1994, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 33, title: "Pocahontas", year: 1995, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 34, title: "Il gobbo di Notre Dame", year: 1996, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 35, title: "Hercules", year: 1997, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 36, title: "Mulan", year: 1998, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 37, title: "Tarzan", year: 1999, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 38, title: "Dinosauri", year: 2000, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 39, title: "Le follie dell’imperatore", year: 2000, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 40, title: "Atlantis - L'impero perduto", year: 2001, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 41, title: "Lilo & Stitch", year: 2002, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 42, title: "Il pianeta del tesoro", year: 2002, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 43, title: "Koda, fratello orso", year: 2003, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 44, title: "Mucche alla riscossa", year: 2004, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 45, title: "Chicken Little", year: 2005, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 46, title: "I Robinson - Una famiglia spaziale", year: 2007, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 47, title: "Bolt - Un eroe a quattro zampe", year: 2008, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 48, title: "La principessa e il ranocchio", year: 2009, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 49, title: "Rapunzel - L’intreccio della torre", year: 2010, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 50, title: "Winnie the Pooh - Nuove avventure nel Bosco dei 100 Acri", year: 2011, category: "Anni 2010–2020 (Seconda Rinascita)" }, { id: 51, title: "Ralph Spaccatutto", year: 2012, category: "Anni 2010–2020 (Seconda Rinascita)" }, { id: 52, title: "Frozen - Il regno di ghiaccio", year: 2013, category: "Anni 2010–2020 (Seconda Rinascita)" }, { id: 53, title: "Big Hero 6", year: 2014, category: "Anni 2010–2020 (Seconda Rinascita)" }, { id: 54, title: "Zootropolis", year: 2016, category: "Anni 2010–2020 (Seconda Rinascita)" }, { id: 55, title: "Oceania", year: 2016, category: "Anni 2010–2020 (Seconda Rinascita)" }, { id: 56, title: "Ralph spacca Internet", year: 2018, category: "Anni 2010–2020 (Seconda Rinascita)" }, { id: 57, title: "Frozen II - Il segreto di Arendelle", year: 2019, category: "Anni 2010–2020 (Seconda Rinascita)" }, { id: 58, title: "Raya e l’ultimo drago", year: 2021, category: "Anni 2020–2023" }, { id: 59, title: "Encanto", year: 2021, category: "Anni 2020–2023" }, { id: 60, title: "Strange World - Un mondo misterioso", year: 2022, category: "Anni 2020–2023" }, { id: 61, title: "Wish", year: 2023, category: "Anni 2020–2023" }, { id: 101, title: "Mufasa: Il re leone", year: 2024, category: "Live-action & Futuri" }, { id: 102, title: "Snow White", year: 2025, category: "Live-action & Futuri" }, { id: 103, title: "Lilo & Stitch (live-action)", year: 2025, category: "Live-action & Futuri" }, { id: 104, title: "Freakier Friday", year: 2025, category: "Live-action & Futuri" }, { id: 105, title: "Moana (live-action)", year: 2026, category: "Live-action & Futuri" }, { id: 201, title: "Il gobbo di Notre Dame (live-action)", year: "TBD", category: "In Sviluppo" }, { id: 202, title: "Cruella 2", year: "TBD", category: "In Sviluppo" }, { id: 203, title: "Bambi (live-action)", year: "TBD", category: "In Sviluppo" }, { id: 204, title: "Il libro della giungla 2", year: "TBD", category: "In Sviluppo" }, { id: 205, title: "Gli Aristogatti (live-action)", year: "TBD", category: "In Sviluppo" }, { id: 206, title: "Hercules (live-action)", year: "TBD", category: "In Sviluppo" }, { id: 207, title: "Robin Hood (live-action)", year: "TBD", category: "In Sviluppo" }, { id: 208, title: "La spada nella roccia (live-action)", year: "TBD", category: "In Sviluppo" },
    ];
    
    let appState = { theme: 'dark', movies: {} };
    let currentlyVisibleFilmIds = [];

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

    function loadState() {
        const savedState = localStorage.getItem('momentoFilmState');
        if (savedState) appState = JSON.parse(savedState);
        document.body.className = `${appState.theme || 'dark'}-mode`;
        updateThemeIcon();
    }

    function saveState() {
        localStorage.setItem('momentoFilmState', JSON.stringify(appState));
    }

    function generateRatingStars(rating) {
        let starsHTML = '';
        const numRating = parseFloat(rating);
        if (isNaN(numRating) || numRating < 0.5) return 'Nessun voto';

        for (let i = 1; i <= 5; i++) {
            if (numRating >= i) starsHTML += '<i class="fas fa-star"></i>';
            else if (numRating >= i - 0.5) starsHTML += '<i class="fas fa-star-half-alt"></i>';
            else starsHTML += '<i class="far fa-star"></i>';
        }
        return starsHTML;
    }
    
    function getSeenDetailsHTML(movieState) {
        return `
            <div class="card-body">
                <div class="info-row">
                    <i class="fas fa-calendar-alt"></i>
                    <span>Visto il ${movieState.dateSeen || 'N/D'}</span>
                </div>
                <div class="info-row">
                    <i class="fas fa-poll"></i>
                    <div class="rating-stars">${generateRatingStars(movieState.rating)}</div>
                </div>
                <div class="info-row">
                    <i class="fas fa-comment-dots"></i>
                    <span>${movieState.note ? movieState.note.substring(0, 25) + (movieState.note.length > 25 ? '...' : '') : 'Nessun ricordo'}</span>
                </div>
            </div>
        `;
    }

    function renderMovies() {
        if (!filmContainer) return;
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;

        const filteredList = filmList.filter(movie => 
            movie.title.toLowerCase().includes(searchTerm) && 
            (selectedCategory === 'all' || movie.category === selectedCategory)
        );

        currentlyVisibleFilmIds = filteredList.map(m => m.id);
        const groupedMovies = filteredList.reduce((acc, movie) => {
            (acc[movie.category] = acc[movie.category] || []).push(movie);
            return acc;
        }, {});
        
        filmContainer.innerHTML = ''; 
        if (filteredList.length === 0) {
            filmContainer.innerHTML = `<p class="no-results">Nessun film trovato.</p>`;
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
                const isSeen = !!movieState.seen;
                const isFavorite = !!movieState.favorite;

                const card = document.createElement('div');
                card.className = `movie-card ${isSeen ? 'is-seen' : ''} ${isFavorite ? 'is-favorite' : ''}`;
                card.dataset.id = movie.id;
                
                card.innerHTML = `
                    <div class="card-header">
                        <label class="custom-checkbox">
                            <input type="checkbox" data-action="toggle-seen" ${isSeen ? 'checked' : ''}>
                            <span class="checkmark"></span>
                        </label>
                        <div class="title-year">
                            <div class="movie-title">${movie.title}</div>
                            <div class="movie-year">(${movie.year})</div>
                        </div>
                        <button class="fav-btn ${isFavorite ? 'favorited' : ''}" data-action="toggle-favorite" aria-label="Aggiungi ai preferiti">
                            <i class="fa-star"></i>
                        </button>
                    </div>
                    ${isSeen ? getSeenDetailsHTML(movieState) : ''}
                `;
                grid.appendChild(card);
            });
            categorySection.appendChild(grid);
            filmContainer.appendChild(categorySection);
        }
    }

    function populateCategoryFilter() {
        if (!categoryFilter) return;
        const categories = [...new Set(filmList.map(movie => movie.category))];
        categoryFilter.innerHTML = `<option value="all">Tutte le ere Disney</option>`;
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });
    }
    
    function updateStatsDashboard() {
        const seenCounterEl = document.getElementById('stats-seen-count');
        const favCounterEl = document.getElementById('stats-favorite-count');
        const completionEl = document.getElementById('stats-completion-percentage');
        
        const totalCanonicalMovies = filmList.filter(f => f.category.includes("Anni")).length;
        let totalSeenCount = 0, canonicalSeenCount = 0, favoriteCount = 0;
    
        for (const id in appState.movies) {
            const state = appState.movies[id];
            if (state.favorite) favoriteCount++;
            if (state.seen) {
                totalSeenCount++;
                const movie = filmList.find(m => m.id == id);
                if (movie && movie.category.includes("Anni")) canonicalSeenCount++;
            }
        }
        
        const completionPercentage = totalCanonicalMovies > 0 ? (canonicalSeenCount / totalCanonicalMovies) * 100 : 0;
    
        if(seenCounterEl) seenCounterEl.textContent = totalSeenCount;
        if(favCounterEl) favCounterEl.textContent = favoriteCount;
        if(completionEl) completionEl.textContent = `${completionPercentage.toFixed(1)}%`;
    }

    function handleContainerClick(e) {
        const card = e.target.closest('.movie-card');
        if (!card) return;

        const movieId = card.dataset.id;
        const action = e.target.closest('[data-action]')?.dataset.action;
        
        appState.movies[movieId] = appState.movies[movieId] || {};
        const movieState = appState.movies[movieId];

        if (action === 'toggle-seen') {
            movieState.seen = e.target.checked;
            if (movieState.seen && !movieState.dateSeen) {
                movieState.dateSeen = new Date().toLocaleDateString('it-IT');
            }
            card.classList.toggle('is-seen', movieState.seen);
            const existingBody = card.querySelector('.card-body');
            if(movieState.seen && !existingBody) card.insertAdjacentHTML('beforeend', getSeenDetailsHTML(movieState));
            else if (!movieState.seen && existingBody) existingBody.remove();
        } else if (action === 'toggle-favorite') {
            movieState.favorite = !movieState.favorite;
            card.classList.toggle('is-favorite', movieState.favorite);
            e.target.closest('.fav-btn').classList.toggle('favorited', movieState.favorite);
        } else {
            openModal(movieId);
            return;
        }
        saveState();
        updateStatsDashboard();
    }

    function markAllVisibleAsSeen() {
        currentlyVisibleFilmIds.forEach(id => {
            appState.movies[id] = appState.movies[id] || {};
            appState.movies[id].seen = true;
            if (!appState.movies[id].dateSeen) appState.movies[id].dateSeen = new Date().toLocaleDateString('it-IT');
        });
        saveState();
        renderMovies();
        updateStatsDashboard();
    }

    function resetAllData() {
        if (confirm("Sei sicuro di voler cancellare tutti i dati? Questa azione non può essere annullata.")) {
            appState.movies = {};
            saveState();
            renderMovies();
            updateStatsDashboard();
        }
    }

    function openModal(movieId) {
        const movie = filmList.find(m => m.id == movieId);
        if (!movie || !modal) return;
        const movieState = appState.movies[movieId] || {};
        const modalBody = document.getElementById('modal-body');

        modalBody.innerHTML = `
            <h3>${movie.title} (${movie.year})</h3>
            <p class="modal-seen-date">Visto il: ${movieState.dateSeen || 'Non ancora visto'}</p>
            
            <div class="form-group">
                <label for="movie-note">Il nostro ricordo speciale:</label>
                <textarea id="movie-note" rows="4" placeholder="Cosa ricordiamo di questo momento?">${movieState.note || ''}</textarea>
            </div>
            
            <div class="form-group">
                <label for="movie-rating">Voto (da 1 a 5):</label>
                <input type="number" id="movie-rating" min="0.5" max="5" step="0.5" value="${movieState.rating || ''}">
            </div>
            
            <button id="save-modal-btn" class="action-btn">Salva Ricordo</button>
        `;

        modal.style.display = 'flex';
        
        document.getElementById('save-modal-btn').addEventListener('click', () => {
            const state = appState.movies[movieId] || {};
            state.note = document.getElementById('movie-note').value;
            state.rating = document.getElementById('movie-rating').value;
            appState.movies[movieId] = state;
            saveState();
            closeModal();

            const cardInDom = document.querySelector(`.movie-card[data-id="${movieId}"]`);
            if(cardInDom && state.seen) {
                let cardBody = cardInDom.querySelector('.card-body');
                if(cardBody) cardBody.remove();
                cardInDom.insertAdjacentHTML('beforeend', getSeenDetailsHTML(state));
            }
        }, { once: true });
    }
    
    function closeModal() { if (modal) modal.style.display = 'none'; }
    function toggleTheme() { appState.theme = appState.theme === 'dark' ? 'light' : 'dark'; document.body.className = `${appState.theme}-mode`; updateThemeIcon(); saveState(); }
    function updateThemeIcon() { if (themeToggleBtn) { const icon = themeToggleBtn.querySelector('i'); if (icon) icon.className = appState.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'; } }
    function handleScroll() { if (!scrollToTopBtn) return; if (window.scrollY > 300) scrollToTopBtn.style.display = 'flex'; else scrollToTopBtn.style.display = 'none'; }
    
    function exportSeenMovies() {
        const seenMoviesData = filmList
            .filter(film => appState.movies[film.id] && appState.movies[film.id].seen)
            .map(film => {
                const state = appState.movies[film.id];
                return { titolo: film.title, anno: film.year, preferito: !!state.favorite, dataVisione: state.dateSeen || 'N/D', ricordo: state.note || '', voto: state.rating || 'N/D' };
            });

        if (seenMoviesData.length === 0) { alert("Nessun film è stato ancora segnato come visto!"); return; }
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(seenMoviesData, null, 2));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "momento_film_visti.json");
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }

    // --- EVENT LISTENERS ---
    filmContainer.addEventListener('click', handleContainerClick);
    themeToggleBtn.addEventListener('click', toggleTheme);
    window.addEventListener('scroll', handleScroll);
    modalCloseBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => { if (e.target == modal) closeModal(); });
    exportBtn.addEventListener('click', exportSeenMovies);
    searchInput.addEventListener('input', () => setTimeout(renderMovies, 300));
    categoryFilter.addEventListener('change', renderMovies);
    markAllSeenBtn.addEventListener('click', markAllVisibleAsSeen);
    resetAllBtn.addEventListener('click', resetAllData);

    // --- INIZIALIZZAZIONE ---
    loadState();
    populateCategoryFilter();
    renderMovies();
    updateStatsDashboard();
});