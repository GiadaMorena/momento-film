// Inizializza Firebase usando la configurazione da firebase-config.js
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('login-error');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = emailInput.value;
    const password = passwordInput.value;

    errorMessage.textContent = 'Accesso in corso...';

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Login riuscito, reindirizza alla pagina principale
            window.location.href = 'index.html';
        })
        .catch((error) => {
            console.error("Errore di login:", error.code, error.message);
            errorMessage.textContent = "Credenziali non valide. Riprova.";
        });
});