import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, onChildAdded } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

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
const database = getDatabase(app);
const feedbackRef = ref(database, '/Обратна връзка');
const feedbackList = document.getElementById('feedback');

const ref = database.ref('/ревюта');

// Слушане на събитие за добавяне на ново ревю
ref.on('child_added', (snapshot) => {
  const newReview = snapshot.val();
const newElement = document.createElement = 'div'; 

  // Тук можете да използвате логиката за уведомяване или известяване за ново ревю
});