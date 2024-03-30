const inputNumber = document.getElementById('pin');

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

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
button.addEventListener('click', function() {
    // Generate random number and hide the button
    const num = generateRandomNum();
    button.style.display = 'none';
    
    // Display the generated number
    pin.innerHTML = num;
    
    // Write the generated number to the database
    writeUserData(num);
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
function writeUserData(num) {
    set(ref(db, 'pin/'), {
       num: num  
    });
    localStorage.setItem('num', num);
}

const inputNum = document.getElementById('pin1');

// Event listener for input changes
inputNum.addEventListener('change', function() {
    // Получаване на стойността на инпута
    var inputValue = inputNum.value;

    // Получаване на стойността от localStorage
    var localNum = localStorage.getItem('num');

    // Сравняване на стойностите
    if (inputValue == localNum) {
        alert('ок');
    } else {
        alert('не е ок');
    }
});
