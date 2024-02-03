import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

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
const analytics = getAnalytics(app);
const auth = getAuth();
const firebase = app;

let signOutBttn = document.getElementById('signOut');
let emailElement = document.getElementById('email'); // Define the email element

signOutBttn.addEventListener('click', function signOut12() {
  signOut(auth).then(() => {
    // Sign-out successful.
    alert('Излизането от профила бе успешно!');
    window.location.href = "index.html";

  });
});
const user = auth.currentUser;

if (user !== null) {
  // Инициализиране на променливи за съхранение на информацията
  let providerId, uid, displayName, email, photoURL;

  // Итерация през информацията за доставчиците на потребителски данни
  user.providerData.forEach((profile) => {
    providerId = profile.providerId;
    uid = profile.uid;
    displayName = profile.displayName;
    email = profile.email;
    photoURL = profile.photoURL;

    // Извеждане на информацията в конзолата (може да се използва и за тестване)
    console.log("Sign-in provider: " + providerId);
    console.log("  Provider-specific UID: " + uid);
    console.log("  Name: " + displayName);
    console.log("  Email: " + email);
    console.log("  Photo URL: " + photoURL);
  });

  
  // Извеждане на информацията в HTML документа
  const userInfoContainer = document.getElementById("user-info-container");
  userInfoContainer.innerHTML = `
    <p>Sign-in provider: ${providerId}</p>
    <p>Provider-specific UID: ${uid}</p>
    <p>Name: ${displayName}</p>
    <p>Email: ${email}</p>
    <p>Photo URL: ${photoURL}</p>
  `;
}
else{
    alert('Error');
}

