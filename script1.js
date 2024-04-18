import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
const button1 = document.getElementById('Enter');

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
const name =  document.getElementById('name2');


button1.addEventListener('click', function name(event){
let num = '';
function generateRandomNum() {
  
  for (let i = 0; i < 6; i++) {
      num += Math.floor(Math.random() * 10);
  }

}
generateRandomNum();

    event.preventDefault();
    set(ref(db, 'users/' +  document.getElementById('name2').value ),{
           name: document.getElementById('name2').value,
           id: num
     });


});





