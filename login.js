// Inizializza Firebase usando la configurazione da firebase-config.js
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('login-error');

// Ascoltatore che gestisce il reindirizzamento post-login
// e previene che un utente loggato veda la pagina di login.
auth.onAuthStateChanged(user => {
    if (user) {
        // L'utente è loggato, reindirizza in modo sicuro alla pagina principale.
        // Usiamo replace() per non salvare la pagina di login nella cronologia del browser.
        window.location.replace('index.html');
    }
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = emailInput.value;
    const password = passwordInput.value;

    errorMessage.textContent = 'Accesso in corso...';

    // Imposta la persistenza della sessione
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
            // Esegui il login
            return auth.signInWithEmailAndPassword(email, password);
        })
        .then((userCredential) => {
            // Login riuscito. Non facciamo nulla qui.
            // L'ascoltatore onAuthStateChanged si occuperà del reindirizzamento.
            errorMessage.textContent = 'Accesso riuscito! Reindirizzamento...';
        })
        .catch((error) => {
            console.error("Errore di login:", error.code, error.message);
            errorMessage.textContent = "Credenziali non valide. Riprova.";
        });
});