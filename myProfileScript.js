/*import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_TgoZVBgp8xqflkvVJbRbPfvTWnyYfOc",
  authDomain: "biomedicine-29379.firebaseapp.com",
  databaseURL: "https://biomedicine-29379-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "biomedicine-29379",
  storageBucket: "biomedicine-29379.appspot.com",
  messagingSenderId: "1023601874434",
  appId: "1:1023601874434:web:da6c166d9d0598a237f91b",
  measurementId: "G-58F1VKGWFK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const firebase = app;

let signOutBttn = document.getElementById('signOut');
let emailElement = document.getElementById('email'); // Define the email element

signOutBttn.addEventListener('click', function signOut12() {
  signOut(auth).then(() => {
    // Sign-out successful.
    alert('Излизането от профила бе успешно!');
    window.location.href = "index.html";

    // Получаване на информацията за потребителя след успешно излизане
    const user = auth.currentUser;
    if (user !== null) {
      user.providerData.forEach((profile) => {
        // profile.providerId;
        // profile.uid;
        // profile.displayName;
        // profile.photoURL;
        emailElement.textContent = profile.email; // Use the emailElement instead of email
      });
    }
  })
});*/
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyB_TgoZVBgp8xqflkvVJbRbPfvTWnyYfOc",
    authDomain: "biomedicine-29379.firebaseapp.com",
    databaseURL: "https://biomedicine-29379-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "biomedicine-29379",
    storageBucket: "biomedicine-29379.appspot.com",
    messagingSenderId: "1023601874434",
    appId: "1:1023601874434:web:da6c166d9d0598a237f91b",
    measurementId: "G-58F1VKGWFK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

// Функция за проверка на състоянието на аутентикацията
function checkAuthState() {
  onAuthStateChanged(auth, function(user) {
    if (user) {
      // Потребителят е логнат
      alert('Има логнат потребител');
    } else {
      // Няма логнат потребител
      alert('Няма логнат потребител');
    }
  });
}