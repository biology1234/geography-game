import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

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

const auth = getAuth();





const user = auth.currentUser; 

  if (user !== null) {
  alert('OK!');
   
  }
  else {
    alert('Error');
  }

