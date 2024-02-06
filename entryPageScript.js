
    let input = document.getElementById('passwordInput');
    
    let dot1 = document.getElementById('dot1');
    let dot2 = document.getElementById('dot2');
    let dot3 = document.getElementById('dot3');
    let dot4 = document.getElementById('dot4');

    let p1 = document.getElementById('p1');
    let p2 = document.getElementById('p2');
    let p3 = document.getElementById('p3');
    let p4 = document.getElementById('p4');

    let form = document.getElementById('form');
    
    let checkBox1 = document.getElementById('checkbox1');
    let savingProfile = document.getElementById('savingProfile');
    let submitReg = document.getElementById('submitReg');

    let google = document.getElementById('google');
    let facebook = document.getElementById('facebook');
    let github = document.getElementById('github');

    let informationContainer = document.getElementById('informationContainer');
    let title = document.getElementById('title1');
    let informationText = document.getElementById('informationText'); 
    let haveAccount = document.getElementById('haveAccount');

    input.addEventListener('input', passwordActivate);
    input.addEventListener('blur', passwordDeactivate);

    const eightChapter = /^.{8,}$/;
    const containsUpperCase = /[A-Z]/;
    const containsSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
    const containsNumber = /\d/;
    
    let passwordShowingImg = document.getElementById('passwordShowingImg');
        
    
    
    
    function passwordActivate(){
        
      form.style.paddingTop = '300px';
      form.style.height = '380px';
      dot1.style.display = 'block';
      dot2.style.display = 'block';
      dot3.style.display = 'block';
      dot4.style.display = 'block';

      p1.style.display = 'block';
      p2.style.display = 'block';
      p3.style.display = 'block';
      p4.style.display = 'block';
         
      checkBox1.style.bottom = '285px';
      savingProfile.style.bottom = '307px';
      submitReg.style.bottom = '290px';

      google.style.bottom = '240px';
      facebook.style.bottom = '240px';
      github.style.bottom = '240px';

      informationContainer.style.paddingTop = '290px';
      title.style.bottom = '265px';
      informationText.style.bottom = '175px';
      haveAccount.style.bottom = '115px';
      passwordShowingImg.style.bottom='187px';

      if (eightChapter.test(input.value)){
         dot1.style.background = 'green';
      }
      else {
        dot1.style.background = 'red';
      }
      if (containsUpperCase.test(input.value)){
         dot2.style.background='green';
      }
      else {
        dot2.style.background='red';
      }
       if(containsSpecialChar.test(input.value)){
        dot3.style.background='green';
       }
       else {
        dot3.style.background ='red';
       }
       if (containsNumber.test(input.value)){
        dot4.style.background = 'green';
       }
       else{
        dot4.style.background='red';
       }
       
      }

function passwordDeactivate () {
    form.style.paddingTop = '';
      form.style.height = '';
      dot1.style.display = '';
      dot2.style.display = '';
      dot3.style.display = '';
      dot4.style.display = '';

      p1.style.display = '';
      p2.style.display = '';
      p3.style.display = '';
      p4.style.display = '';
         
      checkBox1.style.bottom = '';
      savingProfile.style.bottom = '';
      submitReg.style.bottom = '';

      google.style.bottom = '';
      facebook.style.bottom = '';
      github.style.bottom = '';

      informationContainer.style.paddingTop = '';
      title.style.bottom = '';
      informationText.style.bottom = '';
      haveAccount.style.bottom = '';
      passwordShowingImg.style.bottom='';
      if (pat1.test(input.value)){
        dot1.style.background = '';
     }
     else {
       dot1.style.background = '';
     }
     }

     passwordShowingImg.addEventListener('click', function passwordShowing(event){
       event.preventDefault;
       if (input.type === 'password'){
        input.type='text';
       }
       else {
        input.type='password';
       }
      });
   
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
        import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
        import { onAuthStateChanged, GithubAuthProvider, getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithRedirect, getRedirectResult, FacebookAuthProvider  } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

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

        document.getElementById("submitReg").addEventListener('click', function (event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('passwordInput').value;
            const name = document.getElementById('name').value;
            const lastName = document.getElementById('lastName').value;
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    alert('Влизането в профила е успешно!');
                   window.location.href='index.html';
                   localStorage.setItem('userName', name + ' ' + lastName);
                   localStorage.setItem('userEmail', email);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert('Error');
                    // ..
                });
        });

     

        google.addEventListener('click', (event) => {
    event.preventDefault();
    signInWithRedirect(auth, new GoogleAuthProvider()).then(() => {
        // Handle successful sign-in
        window.location.href = 'index.html'; // Redirect to the home page
    }).catch((error) => {
        // Handle errors if needed
        console.error(error);
    });
});

        const provider = new FacebookAuthProvider();
         facebook = document.getElementById('facebook');
        facebook.addEventListener('click', (event) => {
          event.preventDefault();
          signInWithRedirect(auth, new FacebookAuthProvider());

        });
        const provider3 = new GithubAuthProvider();
         github = document.getElementById('github');
        github.addEventListener('click', (event) =>{
          event.preventDefault();
          signInWithRedirect(auth, new GithubAuthProvider() );
        });
        onAuthStateChanged(auth, (user) => {
    if (user) {
   window.location.href='index.html';
    const uid = user.uid;
    // ...

  } else {
    // User is signed out
    // ...
  
  }
});


 






