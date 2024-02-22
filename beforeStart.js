const div = document.getElementById('bluredLogIn');
let bluredBackground = document.getElementById('container');
const passwordShowingImg = document.getElementById('passwordShowingImg2'); 
const password = document.getElementById('password2'); 

passwordShowingImg.addEventListener('click', function(event){
    event.preventDefault();
    if (password.type === 'password'){
        password.type = 'text';
    }
    else {
        password.type = 'password';
    }
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
 import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

let logInBttn = document.getElementById('logInBttn');
let myProfileBttn = document.getElementById('myProfileBttn');

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const auth = getAuth();
 
 onAuthStateChanged(auth, (user) => {
     if (user) {
         // User is signed in
         bluredBackground.style.filter = 'none';
         div.style.display = 'none';
         alert('OK');
         const uid = user.uid;
         
         // Additional logic for signed-in user
     } 
     else{
        alert('error');
     }
 });

 