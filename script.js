// Incolla questo nel tuo file script.js

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. DATI DEI FILM ---
    // Struttura dati completa per gestire tutte le informazioni.
    const filmList = [
        // Era Classica e post-Guerra
        { id: 1, title: "Biancaneve e i sette nani", year: 1937, category: "Anni '30–'50 (Era Classica e post‑Guerra)" },
        { id: 2, title: "Pinocchio", year: 1940, category: "Anni '30–'50 (Era Classica e post‑Guerra)" },
        { id: 3, title: "Fantasia", year: 1940, category: "Anni '30–'50 (Era Classica e post‑Guerra)" },
        { id: 4, title: "Dumbo", year: 1941, category: "Anni '30–'50 (Era Classica e post‑Guerra)" },
        { id: 5, title: "Bambi", year: 1942, category: "Anni '30–'50 (Era Classica e post‑Guerra)" },
        { id: 6, title: "Saludos Amigos", year: 1943, category: "Anni '30–'50 (Era Classica e post‑Guerra)" },
        { id: 7, title: "I Tre Caballeros", year: 1945, category: "Anni '30–'50 (Era Classica e post‑Guerra)" },
        { id: 8, title: "Musica Maestro", year: 1946, category: "Anni '30–'50 (Era Classica e post‑Guerra)" },
        { id: 9, title: "Bongo e i tre avventurieri", year: 1947, category: "Anni '30–'50 (Era Classica e post‑Guerra)" },
        { id: 10, title: "Lo scrigno delle sette perle", year: 1948, category: "Anni '30–'50 (Era Classica e post‑Guerra)" },
        { id: 11, title: "Le avventure di Ichabod e Mr. Toad", year: 1949, category: "Anni '30–'50 (Era Classica e post‑Guerra)" },
        { id: 12, title: "Cenerentola", year: 1950, category: "Anni '30–'50 (Era Classica e post‑Guerra)" },
        { id: 13, title: "Alice nel Paese delle Meraviglie", year: 1951, category: "Anni '30–'50 (Era Classica e post‑Guerra)" },
        { id: 14, title: "Le avventure di Peter Pan", year: 1953, category: "Anni '30–'50 (Era Classica e post‑Guerra)" },
        { id: 15, title: "Lilli e il vagabondo", year: 1955, category: "Anni '30–'50 (Era Classica e post‑Guerra)" },
        { id: 16, title: "La bella addormentata nel bosco", year: 1959, category: "Anni '30–'50 (Era Classica e post‑Guerra)" },
        // Silver e Bronze Era
        { id: 17, title: "La carica dei cento e uno", year: 1961, category: "Anni ’60–’70 (Silver e Bronze Era)" },
        { id: 18, title: "La spada nella roccia", year: 1963, category: "Anni ’60–’70 (Silver e Bronze Era)" },
        { id: 19, title: "Il libro della giungla", year: 1967, category: "Anni ’60–’70 (Silver e Bronze Era)" },
        { id: 20, title: "Gli Aristogatti", year: 1970, category: "Anni ’60–’70 (Silver e Bronze Era)" },
        { id: 21, title: "Robin Hood", year: 1973, category: "Anni ’60–’70 (Silver e Bronze Era)" },
        { id: 22, title: "Le avventure di Winnie the Pooh", year: 1977, category: "Anni ’60–’70 (Silver e Bronze Era)" },
        { id: 23, title: "Le avventure di Bianca e Bernie", year: 1977, category: "Anni ’60–’70 (Silver e Bronze Era)" },
        { id: 24, title: "Red e Toby nemiciamici", year: 1981, category: "Anni ’60–’70 (Silver e Bronze Era)" },
        // Disney Renaissance
        { id: 25, title: "Taron e la pentola magica", year: 1985, category: "Anni ’80–’90 (Disney Renaissance)" },
        { id: 26, title: "Basil l'investigatopo", year: 1986, category: "Anni ’80–’90 (Disney Renaissance)" },
        { id: 27, title: "Oliver & Company", year: 1988, category: "Anni ’80–’90 (Disney Renaissance)" },
        { id: 28, title: "La sirenetta", year: 1989, category: "Anni ’80–’90 (Disney Renaissance)" },
        { id: 29, title: "Bianca e Bernie nella terra dei canguri", year: 1990, category: "Anni ’80–’90 (Disney Renaissance)" },
        { id: 30, title: "La bella e la bestia", year: 1991, category: "Anni ’80–’90 (Disney Renaissance)" },
        { id: 31, title: "Aladdin", year: 1992, category: "Anni ’80–’90 (Disney Renaissance)" },
        { id: 32, title: "Il re leone", year: 1994, category: "Anni ’80–’90 (Disney Renaissance)" },
        { id: 33, title: "Pocahontas", year: 1995, category: "Anni ’80–’90 (Disney Renaissance)" },
        { id: 34, title: "Il gobbo di Notre Dame", year: 1996, category: "Anni ’80–’90 (Disney Renaissance)" },
        { id: 35, title: "Hercules", year: 1997, category: "Anni ’80–’90 (Disney Renaissance)" },
        { id: 36, title: "Mulan", year: 1998, category: "Anni ’80–’90 (Disney Renaissance)" },
        { id: 37, title: "Tarzan", year: 1999, category: "Anni ’80–’90 (Disney Renaissance)" },
        // Transizione e rinascita moderna
        { id: 38, title: "Dinosauri", year: 2000, category: "Anni 2000–2010 (Transizione e rinascita moderna)" },
        { id: 39, title: "Le follie dell’imperatore", year: 2000, category: "Anni 2000–2010 (Transizione e rinascita moderna)" },
        { id: 40, title: "Atlantis - L'impero perduto", year: 2001, category: "Anni 2000–2010 (Transizione e rinascita moderna)" },
        { id: 41, title: "Lilo & Stitch", year: 2002, category: "Anni 2000–2010 (Transizione e rinascita moderna)" },
        { id: 42, title: "Il pianeta del tesoro", year: 2002, category: "Anni 2000–2010 (Transizione e rinascita moderna)" },
        { id: 43, title: "Koda, fratello orso", year: 2003, category: "Anni 2000–2010 (Transizione e rinascita moderna)" },
        { id: 44, title: "Mucche alla riscossa", year: 2004, category: "Anni 2000–2010 (Transizione e rinascita moderna)" },
        { id: 45, title: "Chicken Little", year: 2005, category: "Anni 2000–2010 (Transizione e rinascita moderna)" },
        { id: 46, title: "I Robinson - Una famiglia spaziale", year: 2007, category: "Anni 2000–2010 (Transizione e rinascita moderna)" },
        { id: 47, title: "Bolt - Un eroe a quattro zampe", year: 2008, category: "Anni 2000–2010 (Transizione e rinascita moderna)" },
        { id: 48, title: "La principessa e il ranocchio", year: 2009, category: "Anni 2000–2010 (Transizione e rinascita moderna)" },
        { id: 49, title: "Rapunzel - L’intreccio della torre", year: 2010, category: "Anni 2000–2010 (Transizione e rinascita moderna)" },
        // Seconda Rinascita
        { id: 50, title: "Winnie the Pooh - Nuove avventure nel Bosco dei 100 Acri", year: 2011, category: "Anni 2010–2020 (Seconda Rinascita)" },
        { id: 51, title: "Ralph Spaccatutto", year: 2012, category: "Anni 2010–2020 (Seconda Rinascita)" },
        { id: 52, title: "Frozen - Il regno di ghiaccio", year: 2013, category: "Anni 2010–2020 (Seconda Rinascita)" },
        { id: 53, title: "Big Hero 6", year: 2014, category: "Anni 2010–2020 (Seconda Rinascita)" },
        { id: 54, title: "Zootropolis", year: 2016, category: "Anni 2010–2020 (Seconda Rinascita)" },
        { id: 55, title: "Oceania", year: 2016, category: "Anni 2010–2020 (Seconda Rinascita)" },
        { id: 56, title: "Ralph spacca Internet", year: 2018, category: "Anni 2010–2020 (Seconda Rinascita)" },
        { id: 57, title: "Frozen II - Il segreto di Arendelle", year: 2019, category: "Anni 2010–2020 (Seconda Rinascita)" },
        // Anni 2020–2023
        { id: 58, title: "Raya e l’ultimo drago", year: 2021, category: "Anni 2020–2023" },
        { id: 59, title: "Encanto", year: 2021, category: "Anni 2020–2023" },
        { id: 60, title: "Strange World - Un mondo misterioso", year: 2022, category: "Anni 2020–2023" },
        { id: 61, title: "Wish", year: 2023, category: "Anni 2020–2023" },
        // Remake e Futuri (li mettiamo tutti per completezza)
        { id: 101, title: "Mufasa: Il re leone", year: 2024, category: "Live-action & Futuri" },
        { id: 102, title: "Snow White", year: 2025, category: "Live-action & Futuri" },
        { id: 103, title: "Lilo & Stitch (live-action)", year: 2025, category: "Live-action & Futuri" },
        { id: 104, title: "Freakier Friday", year: 2025, category: "Live-action & Futuri" },
        { id: 105, title: "Moana (live-action)", year: 2026, category: "Live-action & Futuri" },
        { id: 201, title: "Il gobbo di Notre Dame (live-action)", year: "TBD", category: "In Sviluppo" },
        { id: 202, title: "Cruella 2", year: "TBD", category: "In Sviluppo" },
        { id: 203, title: "Bambi (live-action)", year: "TBD", category: "In Sviluppo" },
        { id: 204, title: "Il libro della giungla 2", year: "TBD", category: "In Sviluppo" },
        { id: 205, title: "Gli Aristogatti (live-action)", year: "TBD", category: "In Sviluppo" },
        { id: 206, title: "Hercules (live-action)", year: "TBD", category: "In Sviluppo" },
        { id: 207, title: "Robin Hood (live-action)", year: "TBD", category: "In Sviluppo" },
        { id: 208, title: "La spada nella roccia (live-action)", year: "TBD", category: "In Sviluppo" },
    ];
    
    // --- 2. STATO DELL'APPLICAZIONE ---
    let appState = {
        theme: 'dark',
        movies: {} 
    };

    // --- 3. SELETTORI DEL DOM ---
    const filmContainer = document.getElementById('film-container');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    const modal = document.getElementById('movie-modal');
    const modalCloseBtn = document.querySelector('.close-btn');
    const exportBtn = document.getElementById('export-btn');

    // --- 4. FUNZIONI PRINCIPALI ---

    function loadState() {
        const savedState = localStorage.getItem('momentoFilmState');
        if (savedState) {
            appState = JSON.parse(savedState);
        }
        document.body.className = `${appState.theme || 'dark'}-mode`;
        updateThemeIcon();
    }

    function saveState() {
        localStorage.setItem('momentoFilmState', JSON.stringify(appState));
    }

    function renderMovies() {
        const groupedMovies = filmList.reduce((acc, movie) => {
            acc[movie.category] = acc[movie.category] || [];
            acc[movie.category].push(movie);
            return acc;
        }, {});

        filmContainer.innerHTML = ''; 

        console.log(`Trovato il contenitore film. Sto per renderizzare ${filmList.length} film.`);

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
                card.style.opacity = 0;
                card.style.transform = 'translateY(20px)';

                card.innerHTML = `
                    <div class="movie-title">${movie.title} (${movie.year})</div>
                    <div class="checkbox-container">
                        <label class="checkbox-label">
                            <input type="checkbox" data-id="${movie.id}" data-user="maria" ${movieState.seenMaria ? 'checked' : ''}> Maria
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" data-id="${movie.id}" data-user="giada" ${movieState.seenGiada ? 'checked' : ''}> Giada
                        </label>
                    </div>
                    <div class="movie-actions">
                        <button class="fav-btn ${movieState.favorite ? 'favorited' : ''}" data-id="${movie.id}">
                            <i class="fas fa-heart"></i>
                        </button>
                        <button class="details-btn" data-id="${movie.id}">Dettagli</button>
                    </div>
                `;
                grid.appendChild(card);
            });
            categorySection.appendChild(grid);
            filmContainer.appendChild(categorySection);
        }

        const motion = window.motion; 
        if (motion && motion.stagger) {
            motion.stagger(0.05, [
                motion.animate(".movie-card", { opacity: 1, y: 0 }, { duration: 0.5 })
            ]);
        } else {
             // Fallback se Framer Motion non carica
            document.querySelectorAll('.movie-card').forEach(card => {
                card.style.opacity = 1;
                card.style.transform = 'none';
            });
        }
    }

    function updateProgress() {
        const totalMovies = filmList.filter(f => f.category.includes("Anni")).length; // Conta solo i film canonici
        let mariaSeenCount = 0;
        let giadaSeenCount = 0;

        Object.keys(appState.movies).forEach(movieId => {
            const movie = filmList.find(f => f.id == movieId);
            if(movie && movie.category.includes("Anni")){
                if (appState.movies[movieId].seenMaria) mariaSeenCount++;
                if (appState.movies[movieId].seenGiada) giadaSeenCount++;
            }
        });

        const mariaPercent = totalMovies > 0 ? Math.round((mariaSeenCount / totalMovies) * 100) : 0;
        const giadaPercent = totalMovies > 0 ? Math.round((giadaSeenCount / totalMovies) * 100) : 0;
        
        const progressMaria = document.getElementById('progress-maria');
        const progressGiada = document.getElementById('progress-giada');
        
        progressMaria.style.width = `${mariaPercent}%`;
        document.getElementById('percent-maria').textContent = `${mariaPercent}%`;

        progressGiada.style.width = `${giadaPercent}%`;
        document.getElementById('percent-giada').textContent = `${giadaPercent}%`;
    }

    function handleContainerClick(e) {
        const target = e.target;
        const card = target.closest('.movie-card');
        if (!card) return;

        const movieId = target.dataset.id || target.closest('[data-id]')?.dataset.id;
        if (!movieId) return;

        appState.movies[movieId] = appState.movies[movieId] || {};
        const movieState = appState.movies[movieId];

        if (target.type === 'checkbox') {
            const user = target.dataset.user;
            const isChecked = target.checked;
            
            if (user === 'maria') movieState.seenMaria = isChecked;
            if (user === 'giada') movieState.seenGiada = isChecked;

            if (isChecked && !movieState.dateSeen) {
                movieState.dateSeen = new Date().toLocaleDateString('it-IT');
            }
            
            updateProgress();
            saveState();
        }

        if (target.classList.contains('fav-btn') || target.parentElement.classList.contains('fav-btn')) {
            const btn = target.closest('.fav-btn');
            movieState.favorite = !movieState.favorite;
            btn.classList.toggle('favorited', movieState.favorite);
            saveState();
        }

        if (target.classList.contains('details-btn')) {
            openModal(movieId);
        }
    }

    function openModal(movieId) {
        const movie = filmList.find(m => m.id == movieId);
        const movieState = appState.movies[movieId] || {};
        const modalBody = document.getElementById('modal-body');

        modalBody.innerHTML = `
            <h3>${movie.title} (${movie.year})</h3>
            <p><strong>Visto il:</strong> ${movieState.dateSeen || 'Non ancora visto'}</p>
            <div>
                <label for="movie-note">Il nostro ricordo speciale:</label>
                <textarea id="movie-note" rows="4" placeholder="Cosa ricordiamo di questo momento?">${movieState.note || ''}</textarea>
            </div>
            <div>
                <label for="movie-rating">Voto (1-10):</label>
                <input type="number" id="movie-rating" min="1" max="10" value="${movieState.rating || ''}">
            </div>
            <button id="save-modal-btn" class="action-btn" data-id="${movieId}">Salva Ricordo</button>
        `;

        modal.style.display = 'block';

        document.getElementById('save-modal-btn').addEventListener('click', () => {
            const state = appState.movies[movieId] || {};
            state.note = document.getElementById('movie-note').value;
            state.rating = document.getElementById('movie-rating').value;
            appState.movies[movieId] = state;
            saveState();
            closeModal();
        });
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    function toggleTheme() {
        appState.theme = appState.theme === 'dark' ? 'light' : 'dark';
        document.body.className = `${appState.theme}-mode`;
        updateThemeIcon();
        saveState();
    }
    
    function updateThemeIcon() {
        const icon = themeToggleBtn.querySelector('i');
        if (appState.theme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }
    
    function handleScroll() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
            scrollToTopBtn.style.opacity = '1';
        } else {
            scrollToTopBtn.style.opacity = '0';
            setTimeout(() => {
                if (window.scrollY <= 300) {
                    scrollToTopBtn.style.display = 'none';
                }
            }, 300);
        }
    }

    function exportSeenMovies() {
        const seenMovies = [];
        for (const id in appState.movies) {
            const state = appState.movies[id];
            if (state.seenMaria || state.seenGiada) {
                const movie = filmList.find(m => m.id == id);
                if (movie) {
                    seenMovies.push({
                        titolo: movie.title,
                        anno: movie.year,
                        vistoDaMaria: !!state.seenMaria,
                        vistoDaGiada: !!state.seenGiada,
                        preferito: !!state.favorite,
                        dataVisione: state.dateSeen || 'N/D',
                        ricordo: state.note || '',
                        voto: state.rating || 'N/D'
                    });
                }
            }
        }

        if (seenMovies.length === 0) {
            alert("Nessun film è stato ancora segnato come visto!");
            return;
        }

        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(seenMovies, null, 2));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "momento_film_visti.json");
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }

    // --- 5. EVENT LISTENERS ---
    filmContainer.addEventListener('click', handleContainerClick);
    themeToggleBtn.addEventListener('click', toggleTheme);
    window.addEventListener('scroll', handleScroll);
    modalCloseBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            closeModal();
        }
    });
    exportBtn.addEventListener('click', exportSeenMovies);

    // --- 6. INIZIALIZZAZIONE ---
    loadState();
    renderMovies();
    updateProgress();
});