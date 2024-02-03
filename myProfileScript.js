        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
        import { getAuth, signOut  } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
        

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
        const auth = getAuth();
        const firebase = app;
        let signOutBttn = document.getElementById('signOut');
        signOutBttn.addEventListener('click', function signOut12(){
       signOut(auth).then(() => {
   // Sign-out successful.
   alert('Излизането от профила бе успешно!');
   window.location.href = "index.html";
          }).catch((error) => {
      // An error happened.
      alert('Грешка, моля опитайте по-късно.');
         });
        });
        

        const user = auth.currentUser;
        let profileName = '';
        let profileEmail = '';
        let profilePhoto = '';
        if (user !== null) {
          user.providerData.forEach((profile) => {
           
           profileName = profile.displayName;
           profileEmail = profile.email;
           profilePhoto = profile.photoURL; 
          });
        }
        
        let htmlEmail = document.getElementById('email');
        let htmlName = document.getElementById('name');
        
        htmlName.textContent = profileName; 
        htmlEmail.textContent = profileEmail; 
