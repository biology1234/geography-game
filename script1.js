import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbxyzEinSN9mYtkyuNh-mknJrgVUo62hQ",
    authDomain: "geography-project-9d.firebaseapp.com",
    databaseURL: "https://geography-project-9d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "geography-project-9d",
    storageBucket: "geography-project-9d.appspot.com",
    messagingSenderId: "64187644991",
    appId: "1:64187644991:web:1124e89ce464a94f634c8a",
    measurementId: "G-4M391EXT97"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const button = document.getElementById('Enter');
button.addEventListener('click', function name(event){
 
    event.preventDefault();
    set(ref(db, 'users/' + document.getElementById('name').value),{
           name: document.getElementById('name').value
     });


});


document.getElementById('start').addEventListener('click', function(){
    document.getElementById('start').style.display = 'none';
    document.getElementById('startGame').style.display = 'block';
});