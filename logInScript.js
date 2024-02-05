import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
        import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
        import { onAuthStateChanged, signInWithEmailAndPassword, GithubAuthProvider, getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithRedirect, getRedirectResult, FacebookAuthProvider  } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

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
        const db = getDatabase(app);
        const auth = getAuth();

        document.getElementById("submit2").addEventListener('click', function (event) {
            event.preventDefault();
            const email = document.getElementById('email2').value;
            const password = document.getElementById('password2').value;

            signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
    // Signed in 
     const user = userCredential.user;
     alert('Влизането в профила бе успешно!');
     window.location.href = "index.html";
    // ...
    })
    .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     alert('Моля, въведете валиден имейл адрес или парола');
  });
        });

        document.getElementById("submit2").addEventListener('click', function (event) {

            set(ref(db, 'Потребители/' + document.getElementById("name").value), {
                name: document.getElementById("name").value,
                lastName: document.getElementById("lastName").value,
            });
        });

        const google = document.getElementById('google2');
        google.addEventListener('click', (event) => {
            event.preventDefault();
            signInWithRedirect(auth, new GoogleAuthProvider());
        });

        const provider = new FacebookAuthProvider();
        const facebook = document.getElementById('facebook2');
        facebook.addEventListener('click', (event) => {
          event.preventDefault();
          signInWithRedirect(auth, new FacebookAuthProvider());

        });
        const provider3 = new GithubAuthProvider();
        const github = document.getElementById('github2');
        github.addEventListener('click', (event) =>{
          event.preventDefault();
          signInWithRedirect(auth, new GithubAuthProvider() );
        });
        onAuthStateChanged(auth, (user) => {
    if (user) {
    alert('Влизането в профила бе успешно!');
   window.location.href ='index.html';
    const uid = user.uid;
    // ...

  } else {
    // User is signed out
    // ...
   
  }
});
  

  
     const passwordShowingImg2 = document.getElementById('passwordShowingImg2');
     let password2 = document.getElementById('password2');
     passwordShowingImg2.addEventListener('click', function passwordShowing(event){
        event.preventDefault();
        if (password2.type === 'password'){
            password2.type = 'text';
        }
        else {
            password2.type = 'password';
        }
     });