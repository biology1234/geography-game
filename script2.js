const inputNumber = document.getElementById('pin');

// Import the functions you need from the SDKs you need
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

// Get the necessary elements
const pin = document.getElementById('pin');
const button = document.getElementById('start');

// Event listener for the button click
button.addEventListener('click', function num1() {
    // Generate random number and hide the button
    const num = generateRandomNum();
    button.style.display = 'none';
    
    // Display the generated number
    pin.innerHTML = num;
    
    // Write the generated number to the database
    writeCode(num);
      
});


// Function to generate a 6-digit random number
function generateRandomNum() {
    let num = '';
    for (let i = 0; i < 6; i++) {
        num += Math.floor(Math.random() * 10);
    }
    return num;
}

// Function to write the generated number to the database
function writeCode(num) {
    set(ref(db, 'pin/'), {
       num: num  
    });
    
}

const inputNum = document.getElementById('pin1');

let num12; // Дефинирайте num12 тук, за да е достъпен в главния обхват

const button1 = document.getElementById('Enter');

button1.addEventListener('click', function() {
    var inputValue = inputNum.value;
    const dbRef = ref(getDatabase());

    // Извикване на асинхронната функция за получаване на стойността от базата данни
    get(child(dbRef, '/pin')).then((snapshot) => {
        if (snapshot.exists()) {
            num12 = snapshot.val().num; // Задаване на стойността на num12
            // Сравняване на стойностите само след като стойността на num12 е получена
            if (inputValue === num12) {
                window.location.href ='quiz.html';
     
            } else {
                alert('Моля, въведете пина правилно!'); 
                
            }
        } else {
            alert('Няма данни в базата данни.');
            
        }
    }).catch((error) => {
        console.error(error);
        alert('Възникна грешка при взимането на данните от базата данни.');
        
    });
});
document.getElementById('start').addEventListener('click', function(){
    document.getElementById('start').style.display = 'none';
    document.getElementById('startGame').style.display = 'block';
});
 document.getElementById('tableView').addEventListener('click', function(){

    document.getElementById('table').style.display ='block';
    document.getElementById('startGame').style.display = 'none';
 });



  


 
