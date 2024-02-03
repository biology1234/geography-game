import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";

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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const auth = getAuth();
const user = auth.currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;
     alert('OK');
  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;
}
else{
    alert('error');
}
