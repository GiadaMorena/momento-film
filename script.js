// === FASE DI AUTENTICAZIONE E INIZIALIZZAZIONE GLOBALE ===
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

auth.onAuthStateChanged(user => {
    if (user) {
        document.body.style.display = 'block';
        initializeApp(user);
    } else {
        if (!window.location.pathname.endsWith('login.html')) {
            window.location.href = 'login.html';
        }
    }
});

function logout() {
    auth.signOut().catch(error => console.error("Errore durante il logout:", error));
}


// === FUNZIONE PRINCIPALE DELL'APPLICAZIONE ===
function initializeApp(user) {

    // Lista Film e Obiettivi (invariate)
    const filmList = [ { id: 1, title: "Biancaneve e i sette nani", year: 1937, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 2, title: "Pinocchio", year: 1940, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 3, title: "Fantasia", year: 1940, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 4, title: "Dumbo", year: 1941, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 5, title: "Bambi", year: 1942, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 6, title: "Saludos Amigos", year: 1943, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 7, title: "I Tre Caballeros", year: 1945, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 8, title: "Musica Maestro", year: 1946, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 9, title: "Bongo e i tre avventurieri", year: 1947, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 10, title: "Lo scrigno delle sette perle", year: 1948, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 11, title: "Le avventure di Ichabod e Mr. Toad", year: 1949, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 12, title: "Cenerentola", year: 1950, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 13, title: "Alice nel Paese delle Meraviglie", year: 1951, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 14, title: "Le avventure di Peter Pan", year: 1953, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 15, title: "Lilli e il vagabondo", year: 1955, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 16, title: "La bella addormentata nel bosco", year: 1959, category: "Anni '30–'50 (Era Classica e post‑Guerra)" }, { id: 17, title: "La carica dei cento e uno", year: 1961, category: "Anni ’60–’70 (Silver e Bronze Era)" }, { id: 18, title: "La spada nella roccia", year: 1963, category: "Anni ’60–’70 (Silver e Bronze Era)" }, { id: 19, title: "Il libro della giungla", year: 1967, category: "Anni ’60–’70 (Silver e Bronze Era)" }, { id: 20, title: "Gli Aristogatti", year: 1970, category: "Anni ’60–’70 (Silver e Bronze Era)" }, { id: 21, title: "Robin Hood", year: 1973, category: "Anni ’60–’70 (Silver e Bronze Era)" }, { id: 22, title: "Le avventure di Winnie the Pooh", year: 1977, category: "Anni ’60–’70 (Silver e Bronze Era)" }, { id: 23, title: "Le avventure di Bianca e Bernie", year: 1977, category: "Anni ’60–’70 (Silver e Bronze Era)" }, { id: 24, title: "Red e Toby nemiciamici", year: 1981, category: "Anni ’60–’70 (Silver e Bronze Era)" }, { id: 25, title: "Taron e la pentola magica", year: 1985, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 26, title: "Basil l'investigatopo", year: 1986, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 27, title: "Oliver & Company", year: 1988, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 28, title: "La sirenetta", year: 1989, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 29, title: "Bianca e Bernie nella terra dei canguri", year: 1990, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 30, title: "La bella e la bestia", year: 1991, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 31, title: "Aladdin", year: 1992, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 32, title: "Il re leone", year: 1994, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 33, title: "Pocahontas", year: 1995, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 34, title: "Il gobbo di Notre Dame", year: 1996, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 35, title: "Hercules", year: 1997, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 36, "title": "Mulan", year: 1998, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 37, title: "Tarzan", year: 1999, category: "Anni ’80–’90 (Disney Renaissance)" }, { id: 38, title: "Dinosauri", year: 2000, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 39, title: "Le follie dell’imperatore", year: 2000, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 40, title: "Atlantis - L'impero perduto", year: 2001, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 41, title: "Lilo & Stitch", year: 2002, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 42, title: "Il pianeta del tesoro", year: 2002, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 43, title: "Koda, fratello orso", year: 2003, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 44, title: "Mucche alla riscossa", year: 2004, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 45, title: "Chicken Little", year: 2005, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 46, title: "I Robinson - Una famiglia spaziale", year: 2007, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 47, title: "Bolt - Un eroe a quattro zampe", year: 2008, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 48, title: "La principessa e il ranocchio", year: 2009, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 49, title: "Rapunzel - L’intreccio della torre", year: 2010, category: "Anni 2000–2010 (Transizione e rinascita moderna)" }, { id: 50, title: "Winnie the Pooh - Nuove avventure nel Bosco dei 100 Acri", year: 2011, category: "Anni 2010–2020 (Seconda Rinascita)" }, { id: 51, title: "Ralph Spaccatutto", year: 2012, category: "Anni 2010–2020 (Seconda Rinascita)" }, { id: 52, title: "Frozen - Il regno di ghiaccio", year: 2013, category: "Anni 2010–2020 (Seconda Rinascita)" }, { id: 53, title: "Big Hero 6", year: 2014, category: "Anni 2010–2020 (Seconda Rinascita)" }, { id: 54, title: "Zootropolis", year: 2016, category: "Anni 2010–2020 (Seconda Rinascita)" }, { id: 55, title: "Oceania", year: 2016, category: "Anni 2010–2020 (Seconda Rinascita)" }, { id: 56, title: "Ralph spacca Internet", year: 2018, category: "Anni 2010–2020 (Seconda Rinascita)" }, { id: 57, title: "Frozen II - Il segreto di Arendelle", year: 2019, category: "Anni 2010–2020 (Seconda Rinascita)" }, { id: 58, title: "Raya e l’ultimo drago", year: 2021, category: "Anni 2020–2023" }, { id: 59, title: "Encanto", year: 2021, category: "Anni 2020–2023" }, { id: 60, title: "Strange World - Un mondo misterioso", year: 2022, category: "Anni 2020–2023" }, { id: 61, title: "Wish", year: 2023, category: "Anni 2020–2023" }, { id: 101, title: "Mufasa: Il re leone", year: 2024, category: "Live-action & Futuri" }, { id: 102, title: "Snow White", year: 2025, category: "Live-action & Futuri" }, { id: 103, title: "Lilo & Stitch (live-action)", year: 2025, category: "Live-action & Futuri" }, { id: 104, title: "Freakier Friday", year: 2025, category: "Live-action & Futuri" }, { id: 105, title: "Moana (live-action)", year: 2026, category: "Live-action & Futuri" }, { id: 201, title: "Il gobbo di Notre Dame (live-action)", year: "TBD", category: "In Sviluppo" }, { id: 202, title: "Cruella 2", year: "TBD", category: "In Sviluppo" }, { id: 203, title: "Bambi (live-action)", year: "TBD", category: "In Sviluppo" }, { id: 204, title: "Il libro della giungla 2", year: "TBD", category: "In Sviluppo" }, { id: 205, title: "Gli Aristogatti (live-action)", year: "TBD", category: "In Sviluppo" }, { id: 206, title: "Hercules (live-action)", year: "TBD", category: "In Sviluppo" }, { id: 207, title: "Robin Hood (live-action)", year: "TBD", category: "In Sviluppo" }, { id: 208, title: "La spada nella roccia (live-action)", year: "TBD", category: "In Sviluppo" }, ];
    const achievementsList = [ { id: 'pioniere', name: 'Pioniere del Classico', description: "Hai visto tutti i film dell'Era Classica ('30-'50).", icon: 'fa-chess-rook', condition: (state) => checkCategoryCompletion(state, "Anni '30–'50 (Era Classica e post‑Guerra)") }, { id: 'rinascimento', name: 'Eroe del Rinascimento', description: "Hai visto tutti i film del Disney Renaissance ('80-'90).", icon: 'fa-paint-brush', condition: (state) => checkCategoryCompletion(state, "Anni ’80–’90 (Disney Renaissance)") }, { id: 'cuore_oro', name: 'Cuore d\'Oro', description: 'Hai segnato 10 o più film come preferiti.', icon: 'fa-gem', condition: (state) => Object.values(state.movies).filter(m => m.favorite).length >= 10 }, { id: 'primi_passi', name: 'L\'Avventura ha Inizio', description: 'Hai visto il tuo primo film della lista.', icon: 'fa-flag-checkered', condition: (state) => Object.values(state.movies).some(m => m.seen) }, { id: 'collezionista', name: 'Collezionista di Momenti', description: 'Hai visto 25 film.', icon: 'fa-film', condition: (state) => Object.values(state.movies).filter(m => m.seen).length >= 25 }, { id: 'critico', name: 'Critico Cinematografico', description: 'Hai lasciato una recensione per almeno 10 film.', icon: 'fa-pencil-alt', condition: (state) => Object.values(state.movies).filter(m => m.note && m.note.trim() !== '').length >= 10 }, { id: 'signore_tempo', name: 'Signore del Tempo', description: "Hai visto tutti i film degli anni '60-'70.", icon: 'fa-hourglass-half', condition: (state) => checkCategoryCompletion(state, "Anni ’60–’70 (Silver e Bronze Era)") }, { id: 'modernista', name: 'Modernista', description: 'Hai visto tutti i film degli anni 2000-2010.', icon: 'fa-laptop', condition: (state) => checkCategoryCompletion(state, "Anni 2000–2010 (Transizione e rinascita moderna)") }, { id: 'pioniere_digitale', name: 'Pioniere Digitale', description: "Hai visto tutti i film della Seconda Rinascita ('10-'20).", icon: 'fa-rocket', condition: (state) => checkCategoryCompletion(state, "Anni 2010–2020 (Seconda Rinascita)") }, { id: 'amante_musica', name: 'Amante della Musica', description: 'Hai dato un voto di 5 stelle a 5 o più film.', icon: 'fa-music', condition: (state) => Object.values(state.movies).filter(m => m.ratings && (m.ratings.m === 5 || m.ratings.g === 5)).length >= 5 }, { id: 'inarrestabile', name: 'Inarrestabile', description: 'Hai visto 50 film. Un traguardo incredibile!', icon: 'fa-bolt', condition: (state) => Object.values(state.movies).filter(m => m.seen).length >= 50 }, { id: 'viaggio_completo', name: 'Il Viaggio è Completo!', description: 'Hai visto tutti i film di animazione principali!', icon: 'fa-crown', condition: (state) => checkCategoryCompletion(state, "Anni") } ];
    
    // Riferimenti agli elementi DOM (invariati)
    const docRef = db.collection('userStates').doc(user.uid);
    let appState = {};
    const filmContainer = document.getElementById('film-container');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const logoutBtn = document.getElementById('logout-btn');
    const achievementsBtn = document.getElementById('achievements-btn');
    const achievementsModal = document.getElementById('achievements-modal');
    const toastContainer = document.getElementById('toast-container');
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    const modal = document.getElementById('movie-modal');
    const exportBtn = document.getElementById('export-btn');
    const searchInput = document.getElementById('search-input');
    const sortOrderSelect = document.getElementById('sort-order');
    const sortIcon = document.getElementById('sort-icon');
    const resetAllBtn = document.getElementById('reset-all-btn');
    const randomPickBtn = document.getElementById('random-pick-btn');
    const randomPickModal = document.getElementById('random-pick-modal');

    // Il resto delle funzioni (onSnapshot, renderUI, openModal, renderMovies, etc.)
    // rimane esattamente lo stesso della versione precedente, fino a `exportSeenMovies`.
    // ... (tutto il codice fino alla funzione di esportazione è invariato) ...
    docRef.onSnapshot((doc) => {
        const data = doc.data();
        if (doc.exists && data) {
            appState = { movies: data.movies || {}, achievements: data.achievements || [], theme: data.theme || 'dark' };
        } else {
            appState = { movies: {}, achievements: [], theme: 'dark' };
            docRef.set(appState);
        }
        renderUI(appState);
    }, (error) => console.error("Errore nell'ascolto dei dati: ", error));
    
    function renderUI(state) {
        document.body.className = `${state.theme}-mode`;
        updateThemeIcon(state.theme);
        renderMovies(state);
        updateStatsDashboard(state);
        checkAchievements(state);
    }

    async function updateMovieData(movieId, movieData) {
        const updatePayload = {};
        for (const key in movieData) {
            updatePayload[`movies.${movieId}.${key}`] = movieData[key];
        }
        await docRef.update(updatePayload).catch(e => console.error(e));
    }
    
    function handleContainerClick(e) {
        const card = e.target.closest('.movie-card');
        if (!card) return;
        const movieId = card.dataset.id;
        const action = e.target.closest('[data-action]')?.dataset.action;
        const currentMovieState = appState.movies[movieId] || {};
        
        if (action === 'toggle-seen') {
            updateMovieData(movieId, { 
                seen: !currentMovieState.seen,
                dateSeen: !currentMovieState.seen ? new Date().toLocaleDateString('it-IT') : (currentMovieState.dateSeen || null)
            });
        } else if (action === 'toggle-favorite') {
            updateMovieData(movieId, { favorite: !currentMovieState.favorite });
        } else {
            openModal(movieId);
        }
    }

    function openModal(movieId) {
        const movie = filmList.find(m => m.id == movieId);
        if (!movie) return;
        const movieState = appState.movies[movieId] || {};
        const ratings = movieState.ratings || { m: '', g: '' };
        const modalBody = document.getElementById('modal-body');
        modalBody.innerHTML = `<h3>${movie.title} (${movie.year})</h3><p class="modal-seen-date">Visto il: ${movieState.dateSeen || 'Non ancora visto'}</p><div class="couple-rating-container"><div class="form-group rating-group"><label for="movie-rating-m">Voto di M <i class="fas fa-male"></i></label><input type="number" id="movie-rating-m" min="0.5" max="5" step="0.5" value="${ratings.m || ''}"></div><div class="affinity-meter"><label>Affinità</label><div id="affinity-score">--%</div></div><div class="form-group rating-group"><label for="movie-rating-g">Voto di G <i class="fas fa-female"></i></label><input type="number" id="movie-rating-g" min="0.5" max="5" step="0.5" value="${ratings.g || ''}"></div></div><div class="form-group"><label for="movie-note">Il nostro ricordo speciale:</label><textarea id="movie-note" rows="4" placeholder="Cosa ricordiamo di questo momento?">${movieState.note || ''}</textarea></div><button id="save-modal-btn">Salva Ricordo</button>`;
        const saveBtn = modalBody.querySelector('#save-modal-btn');
        saveBtn.className = 'toolbar-btn primary'; 
        saveBtn.style.width = '100%';
        modal.style.display = 'flex';
        const ratingM_input = document.getElementById('movie-rating-m');
        const ratingG_input = document.getElementById('movie-rating-g');
        const affinityScoreEl = document.getElementById('affinity-score');
        function calculateAffinity() {
            const voteM = parseFloat(ratingM_input.value);
            const voteG = parseFloat(ratingG_input.value);
            if (!isNaN(voteM) && !isNaN(voteG) && voteM >= 0.5 && voteG >= 0.5) {
                const difference = Math.abs(voteM - voteG);
                const affinity = Math.max(0, 100 - (difference * 22.5));
                affinityScoreEl.textContent = `${affinity.toFixed(0)}%`;
                affinityScoreEl.style.color = `hsl(${affinity * 1.2}, 80%, 50%)`;
            } else {
                affinityScoreEl.textContent = '--%';
                affinityScoreEl.style.color = 'inherit';
            }
        }
        ratingM_input.addEventListener('input', calculateAffinity);
        ratingG_input.addEventListener('input', calculateAffinity);
        calculateAffinity();
        saveBtn.addEventListener('click', () => {
            const movieUpdate = {
                ratings: { m: parseFloat(ratingM_input.value) || 0, g: parseFloat(ratingG_input.value) || 0 },
                note: document.getElementById('movie-note').value
            };
            if ((movieUpdate.ratings.m > 0 || movieUpdate.ratings.g > 0) && !movieState.seen) {
                movieUpdate.seen = true;
                movieUpdate.dateSeen = movieState.dateSeen || new Date().toLocaleDateString('it-IT');
            }
            updateMovieData(movieId, movieUpdate);
            closeModal(modal);
        }, { once: true });
    }

    function renderMovies(state) {
        if (!filmContainer) return;
        const searchTerm = searchInput.value.toLowerCase();
        const sortOrder = sortOrderSelect.value;
        let filteredList = filmList.filter(movie => movie.title.toLowerCase().includes(searchTerm));
        filteredList.sort((a, b) => {
            const yearA = a.year === 'TBD' ? Infinity : a.year; const yearB = b.year === 'TBD' ? Infinity : b.year;
            const ratingsA = state.movies[a.id]?.ratings || { m: 0, g: 0 }; const votesA = Object.values(ratingsA).filter(r => r > 0);
            const averageA = votesA.length > 0 ? votesA.reduce((sum, val) => sum + parseFloat(val), 0) / votesA.length : 0;
            const ratingsB = state.movies[b.id]?.ratings || { m: 0, g: 0 }; const votesB = Object.values(ratingsB).filter(r => r > 0);
            const averageB = votesB.length > 0 ? votesB.reduce((sum, val) => sum + parseFloat(val), 0) / votesB.length : 0;
            switch (sortOrder) {
                case 'year-desc': return yearB - yearA; case 'year-asc': return yearA - yearB;
                case 'title-asc': return a.title.localeCompare(b.title); case 'title-desc': return b.title.localeCompare(a.title);
                case 'rating-desc': const ratingDiffDesc = averageB - averageA; return ratingDiffDesc !== 0 ? ratingDiffDesc : yearB - yearA;
                case 'rating-asc': const ratingDiffAsc = averageA - averageB; return ratingDiffAsc !== 0 ? ratingDiffAsc : yearA - yearB;
                default: return a.id - b.id;
            }
        });
        filmContainer.innerHTML = '';
        if (filteredList.length === 0) { filmContainer.innerHTML = `<p class="no-results">Nessun film trovato.</p>`; return; }
        const createMovieCardHTML = (movie) => {
            const movieState = state.movies[movie.id] || {};
            const isSeen = !!movieState.seen; const isFavorite = !!movieState.favorite;
            const showCategoryTag = sortOrder !== 'default';
            const categoryTag = showCategoryTag ? `<span class="movie-category-tag">${movie.category}</span>` : '';
            return `<div class="movie-card ${isSeen ? 'is-seen' : ''} ${isFavorite ? 'is-favorite' : ''}" data-id="${movie.id}">${categoryTag}<div class="card-header"><label class="custom-checkbox"><input type="checkbox" data-action="toggle-seen" ${isSeen ? 'checked' : ''}><span class="checkmark"></span></label><div class="title-year"><div class="movie-title">${movie.title}</div><div class="movie-year">(${movie.year})</div></div><button class="fav-btn ${isFavorite ? 'favorited' : ''}" data-action="toggle-favorite" aria-label="Aggiungi ai preferiti"><i class="fas fa-heart"></i></button></div>${isSeen ? getSeenDetailsHTML(movieState) : ''}</div>`;
        };
        if (sortOrder === 'default') {
            const groupedMovies = filteredList.reduce((acc, movie) => { (acc[movie.category] = acc[movie.category] || []).push(movie); return acc; }, {});
            const sortedCategories = Object.keys(groupedMovies).sort((a, b) => groupedMovies[a][0].id - groupedMovies[b][0].id);
            sortedCategories.forEach(category => {
                const categorySection = document.createElement('section');
                categorySection.className = 'film-category';
                categorySection.innerHTML = `<h2>${category}</h2>`;
                const grid = document.createElement('div'); grid.className = 'film-grid';
                grid.innerHTML = groupedMovies[category].map(movie => createMovieCardHTML(movie)).join('');
                categorySection.appendChild(grid); filmContainer.appendChild(categorySection);
            });
        } else {
            const sortText = sortOrderSelect.options[sortOrderSelect.selectedIndex].text;
            filmContainer.innerHTML = `<h2 class="context-title">Film ordinati per ${sortText}</h2>`;
            const grid = document.createElement('div'); grid.className = 'film-grid';
            grid.innerHTML = filteredList.map(movie => createMovieCardHTML(movie)).join('');
            filmContainer.appendChild(grid);
        }
    }

    function generateRatingStars(rating) { let starsHTML = ''; const numRating = parseFloat(rating); if (isNaN(numRating) || numRating < 0.5) return 'Nessun voto'; for (let i = 1; i <= 5; i++) { if (numRating >= i) starsHTML += '<i class="fas fa-star"></i>'; else if (numRating >= i - 0.5) starsHTML += '<i class="fas fa-star-half-alt"></i>'; else starsHTML += '<i class="far fa-star"></i>'; } return starsHTML; }
    function getSeenDetailsHTML(movieState) { const ratings = movieState.ratings || {}; const votes = Object.values(ratings).filter(r => r > 0); let averageRating = 0; if (votes.length > 0) { averageRating = votes.reduce((a, b) => a + parseFloat(b), 0) / votes.length; } return ` <div class="card-body"> <div class="info-row"><i class="fas fa-calendar-alt"></i><span>Visto il ${movieState.dateSeen || 'N/D'}</span></div> <div class="info-row"><i class="fas fa-poll"></i><div class="rating-stars">${generateRatingStars(averageRating)}</div> <span>(${votes.length}/2 voti)</span></div> <div class="info-row"><i class="fas fa-comment-dots"></i><span>${movieState.note ? movieState.note.substring(0, 25) + (movieState.note.length > 25 ? '...' : '') : 'Nessun ricordo'}</span></div> </div>`; }
    function updateStatsDashboard(state) { const seenCounterEl = document.getElementById('stats-seen-count'); const favCounterEl = document.getElementById('stats-favorite-count'); const completionEl = document.getElementById('stats-completion-percentage'); const totalCanonicalMovies = filmList.filter(f => f.category.includes("Anni")).length; let totalSeenCount = 0, canonicalSeenCount = 0, favoriteCount = 0; if (state.movies) { for (const id in state.movies) { const movieData = state.movies[id]; if (movieData.favorite) favoriteCount++; if (movieData.seen) { totalSeenCount++; const movie = filmList.find(m => m.id == id); if (movie && movie.category.includes("Anni")) canonicalSeenCount++; } } } const completionPercentage = totalCanonicalMovies > 0 ? (canonicalSeenCount / totalCanonicalMovies) * 100 : 0; if(seenCounterEl) seenCounterEl.textContent = totalSeenCount; if(favCounterEl) favCounterEl.textContent = favoriteCount; if(completionEl) completionEl.textContent = `${completionPercentage.toFixed(1)}%`; }
    function checkCategoryCompletion(state, categorySubstring) { const categoryMovies = filmList.filter(f => f.category.includes(categorySubstring)); return categoryMovies.length > 0 && categoryMovies.every(movie => state.movies[movie.id]?.seen); }
    function showToast(message) { const toast = document.createElement('div'); toast.className = 'toast'; toast.innerHTML = `<span class="toast-icon"><i class="fas fa-trophy"></i></span><span class="toast-message">${message}</span>`; toastContainer.appendChild(toast); setTimeout(() => toast.remove(), 8000); }
    function checkAchievements(state) { const newlyUnlocked = []; achievementsList.forEach(ach => { if (!(state.achievements || []).includes(ach.id) && ach.condition(state)) { newlyUnlocked.push(ach.id); showToast(`Medaglia Sbloccata: ${ach.name}`); } }); if (newlyUnlocked.length > 0) { docRef.update({ achievements: firebase.firestore.FieldValue.arrayUnion(...newlyUnlocked) }); } }
    function openAchievementsModal() { const grid = document.getElementById('achievements-grid'); grid.innerHTML = ''; achievementsList.forEach(ach => { const isUnlocked = appState.achievements.includes(ach.id); const card = document.createElement('div'); card.className = `medal-card ${isUnlocked ? 'unlocked' : 'locked'}`; card.innerHTML = `<div class="medal-icon"><i class="fas ${ach.icon}"></i></div><div class="medal-title">${ach.name}</div><div class="medal-description">${ach.description}</div>`; grid.appendChild(card); }); achievementsModal.style.display = 'flex'; }
    function closeModal(modalElement) { if (modalElement) modalElement.style.display = 'none'; }
    function updateThemeIcon(theme) { if (themeToggleBtn) { const icon = themeToggleBtn.querySelector('i'); icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'; } }
    function handleScroll() { if (!scrollToTopBtn) return; if (window.scrollY > 300) { scrollToTopBtn.style.display = 'flex'; scrollToTopBtn.style.opacity = '1'; } else { scrollToTopBtn.style.opacity = '0'; setTimeout(() => { if (window.scrollY <= 300) scrollToTopBtn.style.display = 'none'; }, 300); } }
    function pickRandomMovie() { const unseenMovies = filmList.filter(film => !(appState.movies[film.id]?.seen) && typeof film.year === 'number' && film.year <= new Date().getFullYear()); const body = randomPickModal.querySelector('#random-pick-body'); if (unseenMovies.length === 0) { body.innerHTML = `<h2>Congratulazioni!</h2><p class="picked-movie-title" style="font-size: 1.5rem; animation: none; text-shadow: none; color: var(--dark-primary-text);">Hai già visto tutti i film disponibili!</p>`; } else { const pickedMovie = unseenMovies[Math.floor(Math.random() * unseenMovies.length)]; body.innerHTML = `<h2>Il Prossimo Momento Magico è...</h2><div class="picked-movie-title">${pickedMovie.title}</div><p class="picked-movie-year">(${pickedMovie.year})</p>`; } randomPickModal.style.display = 'flex'; }
    function setupStickyToolbar() { const toolbar = document.querySelector('.filter-toolbar'); if (!toolbar) return; const observer = new IntersectionObserver(([e]) => e.target.classList.toggle('is-stuck', e.intersectionRatio < 1), { threshold: [1] }); observer.observe(toolbar); }
    
    async function resetAllData() {
        const confirmation = confirm("Sei sicuro di voler resettare tutti i progressi? Questa azione è irreversibile e cancellerà tutti i film visti, i preferiti, i voti e le medaglie.");
        if (confirmation) {
            try {
                await docRef.delete();
                showToast("Dati resettati. Si ricomincia!");
            } catch (error) {
                console.error("Errore durante il reset dei dati:", error);
                alert("Si è verificato un errore durante il reset. Riprova.");
            }
        }
    }
    
    // --- VERSIONE FINALE: Esportazione PDF a prova di errore ---
    async function exportSeenMovies(state) {
        const container = document.createElement('div');
        
        try {
            exportBtn.disabled = true;
            exportBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparazione...';

            const seenMovies = filmList.filter(f => state.movies[f.id]?.seen).sort((a, b) => a.id - b.id);
            if (seenMovies.length === 0) {
                alert("Nessun film visto da esportare!");
                return;
            }
            
            // Per il PDF, carichiamo gli stili direttamente invece di linkarli
            const pdfStyles = await fetch('pdf-styles.css').then(res => res.text());

            // Crea l'HTML completo da renderizzare
            container.style.position = 'absolute';
            container.style.left = '-9999px'; // Nascondilo fuori schermo
            container.style.width = '210mm'; // Larghezza standard A4
            document.body.appendChild(container);
            
            // Inietta gli stili e il contenuto HTML
            let contentHTML = `<style>${pdfStyles}</style>`;
            contentHTML += `
                <div class="pdf-cover-page">
                    <div class="pdf-cover-content"><h1 class="logo-text">Momento Film</h1><p class="tagline">La Nostra Avventura Disney</p></div>
                    <div class="pdf-footer">Generato il ${new Date().toLocaleDateString('it-IT')}</div>
                </div>
                <div class="pdf-page-break"></div>
                <section class="pdf-section">
                    <h2 class="pdf-section-title"><i class="fas fa-film"></i> I Nostri Momenti Magici</h2>
                    <div class="pdf-card-grid">`;
            
            seenMovies.forEach(movie => {
                const movieState = state.movies[movie.id];
                const ratings = movieState.ratings || {};
                const votes = Object.values(ratings).filter(r => r > 0);
                const averageRating = votes.length > 0 ? votes.reduce((a, b) => a + parseFloat(b), 0) / votes.length : 0;
                contentHTML += `
                    <div class="pdf-movie-card ${movieState.favorite ? 'is-favorite-pdf' : ''}">
                        <h3 class="pdf-movie-title">${movie.title} <span class="pdf-movie-year">(${movie.year})</span></h3>
                        <div class="pdf-info-grid">
                            <div class="pdf-info-item"><span class="pdf-info-label">Visto il</span><span class="pdf-info-value">${movieState.dateSeen || 'N/D'}</span></div>
                            <div class="pdf-info-item"><span class="pdf-info-label">Voto Medio</span><span class="pdf-info-value pdf-rating-stars">${generateRatingStars(averageRating)}</span></div>
                        </div>
                        ${movieState.note ? `<div class="pdf-notes"><span class="pdf-info-label">Il Nostro Ricordo</span><p>${movieState.note}</p></div>` : ''}
                    </div>`;
            });
            contentHTML += `</div></section>`;
            container.innerHTML = contentHTML;
            
            exportBtn.innerHTML = '<i class="fas fa-cog fa-spin"></i> Generazione PDF...';
            
            // Usa il metodo .html() che gestisce tutto automaticamente
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
            
            await pdf.html(container, {
                // Il callback viene eseguito DOPO che il PDF è stato generato in memoria
                callback: function(doc) {
                    doc.save(`MomentoFilm_Export_${new Date().toISOString().slice(0, 10)}.pdf`);
                },
                x: 0,
                y: 0,
                width: 210, // Larghezza A4 in mm
                windowWidth: 794, // Larghezza A4 in pixel (210mm * 96dpi / 25.4mm/inch)
                html2canvas: {
                    scale: 3, // Scala alta per ottima qualità
                    useCORS: true,
                    logging: false
                }
            });

        } catch (err) {
            console.error("Errore durante la creazione del PDF:", err);
            alert("Si è verificato un errore durante l'esportazione. Controlla la console per i dettagli.");
        } finally {
            // Cleanup finale: rimuovi il contenitore e ripristina il pulsante
            if (document.body.contains(container)) {
                document.body.removeChild(container);
            }
            exportBtn.disabled = false;
            exportBtn.innerHTML = '<i class="fas fa-download"></i> Esporta PDF';
        }
    }


    // Event Listeners (nessuna modifica qui)
    filmContainer.addEventListener('click', handleContainerClick);
    logoutBtn.addEventListener('click', logout);
    themeToggleBtn.addEventListener('click', () => docRef.update({ theme: appState.theme === 'dark' ? 'light' : 'dark' }));
    achievementsBtn.addEventListener('click', openAchievementsModal);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    modal.querySelector('.close-btn').addEventListener('click', () => closeModal(modal));
    randomPickModal.querySelector('.close-btn').addEventListener('click', () => closeModal(randomPickModal));
    achievementsModal.querySelector('.close-btn').addEventListener('click', () => closeModal(achievementsModal));
    window.addEventListener('click', (e) => { 
        if (e.target == modal) closeModal(modal); 
        if (e.target == randomPickModal) closeModal(randomPickModal); 
        if (e.target == achievementsModal) closeModal(achievementsModal); 
    });
    
    exportBtn.addEventListener('click', () => exportSeenMovies(appState));
    searchInput.addEventListener('input', () => { clearTimeout(window.searchTimeout); window.searchTimeout = setTimeout(() => renderMovies(appState), 300); });
    sortOrderSelect.addEventListener('change', () => { 
        const value = sortOrderSelect.value; 
        if (value.includes('year')) { sortIcon.className = 'fas fa-calendar-alt'; } 
        else if (value.includes('title')) { sortIcon.className = 'fas fa-sort-alpha-down'; } 
        else if (value.includes('rating')) { sortIcon.className = 'fas fa-star'; } 
        else { sortIcon.className = 'fas fa-clock'; } 
        renderMovies(appState); 
    });
    resetAllBtn.addEventListener('click', resetAllData);
    randomPickBtn.addEventListener('click', pickRandomMovie);
    
    setupStickyToolbar();
}