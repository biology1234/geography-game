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
onValue(starCountRef, (snapshot) => {
    const usersData = snapshot.val();
    // Предполагайки, че usersData е обект със списък от потребители, може да извлечете стойностите на ключовете и да ги изведете
    for (const userId in usersData) {
        if (Object.hasOwnProperty.call(usersData, userId)) {
            const user = usersData[userId];
            const newTd = document.createElement('td'); 
            newTd.innerHTML += user.name + "<br>";
            const newRow = document.createElement('tr');
            
            
            // Set the innerHTML of td to user's name
            newTd.textContent = user.name;
            
            // Append the new td to the new row
            newRow.appendChild(newTd);
            
            // Append the new row to the table
            tableName.appendChild(newRow);
        }
    }
});
