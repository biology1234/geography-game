let isGoogleAccount;
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
 import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
 import "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";  // Добавете този ред
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

 window.addEventListener('load', () => {
     // Initialize Firebase
     const app = initializeApp(firebaseConfig);
     const analytics = getAnalytics(app);
     const auth = getAuth();

     let signOutBttn = document.getElementById('signOut');
     signOutBttn.addEventListener('click', () => {
         signOut(auth).then(() => {
             // Sign-out successful.
             alert('Излизането от профила бе успешно!');
             window.location.href = "index.html";
         }).catch((error) => {
             // An error happened.
             alert('Грешка, моля опитайте по-късно.');
         });
     });
     const userName2 = localStorage.getItem('userName');
     const name2 = document.getElementById('name');
     
    const userEmail = localStorage.getItem('userEmail');
    const email2 = document.getElementById('email');
    name2.textContent = userName2;
     email2.textContent = userEmail; 
    
    onAuthStateChanged(auth, (user) => {
if (user !== null) {
 // Провери дали потребителят е влязъл с Google акаунт
 const isGoogleAccount = user.providerData.some(provider => ['google.com', 'facebook.com', 'github.com'].includes(provider.providerId));

 if (isGoogleAccount) {
  img.style.backgroundImage = `url(${user.photoURL})`;
    name2.textContent = user.displayName;
    email2.textContent = user.email;    
 } 
 else {
 name2.textContent = userName2;
 email2.textContent = userEmail;
 
function getRandomColor(){


const colors = ['#587C9D', '#649E59', '#9E595B', '#858585', '#BF8045', '#AF84C2', '#BAA7C2'];

const randomIndex = Math.floor(Math.random() * colors.length);
return colors[randomIndex];
}

// Извикване на функцията и извеждане на резултата в конзолата
const randomColor = getRandomColor();

img.style.background = randomColor;

let initial = document.getElementById('initial');
const firstLetter = userName2;
const first2 = firstLetter[0];
const fullName = name2.textContent;

// Разделяне на текста на думи
const words = fullName.split(' ');

// Проверка дали има поне две думи
if (words.length >= 2) {
// Вземане на втората дума
const secondWord = words[1];

// Вземане на първата буква от втората дума
const firstLetterOfSecondWord = secondWord[0];

const intial2 = first2 + firstLetterOfSecondWord;
initial.textContent = intial2;
}

}
}
});

let img = document.getElementById('img');

});