import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getDatabase, ref, onValue  } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

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

const tableName = document.getElementById('name'); 
const starCountRef = ref(db, 'users/');
const addedNames = []; // Дефиниране на масива за вече добавените имена

onValue(starCountRef, (snapshot) => {
    const usersData = snapshot.val();

    for (const userId in usersData) {
        const user = usersData[userId];
        
        // Проверка дали името вече е добавено
        if (!addedNames.includes(user.name)) {
            const newTd = document.createElement('td'); 
            newTd.textContent = user.name;
            const newRow = document.createElement('tr');
            newRow.appendChild(newTd);
            tableName.appendChild(newRow);
            
            // Добавяне на името към масива на добавените имена
            addedNames.push(user.name);
        }
    }
});