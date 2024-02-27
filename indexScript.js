
const text = document.getElementById('question1');
  /*Показване на "ключовия" въпрос*/
 addEventListener('scroll', function(){
  if(window.pageYOffset >= 120){
    text.style.display ='block';
  text.style.animation = 'animation3 2s forwards'
  }

 });
/*Оцветяване на текста, а се скролне до определено положение*/
addEventListener('scroll', function showingQuestion(event) {
  scroll = window.pageYOffset;
    if (scroll >= 340) {
        typeWriter2(); // Call the function when scroll reaches 80
    }
});

const text1 = document.getElementById('answerTopic1');
let scroll1 = 0;

// Променено събитие от 'wheel' на 'scroll'
addEventListener('scroll', function coloredText1(event) {
  // Използвайте pageYOffset, за да получите текущата позиция на скролбара
  scroll1 = window.pageYOffset;

  if (scroll1 >= 480) {
    text1.style.color = "#43B68A";
  }
});
      const text2 = document.getElementById('answerTopic2');
      let scroll2 = 0; 
       addEventListener('scroll', function coloredText2 (event){

        scroll2 = window.pageYOffset;
         if (scroll2 >= 680){
          text2.style.color = "#43B68A";
         }
       });
   
      const text3 = document.getElementById('answerTopic3'); 
      let scroll3 = 0; 
      addEventListener('scroll', function coloredText3 (event){
       scroll3 = window.pageYOffset;
        if (scroll3 >= 880) {
          text3.style.color = '#43B68A';
        }

      

      const howTo1 = document.getElementById('howTo1');

      let scroll4 = 0;
      this.addEventListener('scroll', function colorText4(){
        scroll4 = this.window.pageYOffset; 
        if (scroll4 >= 1020){
          howTo1.style.color = '#6C5BC2';
        }
      });
   });   

   /*Поставяне на фикснатия хедър*/
  const header = document.getElementById('header');

addEventListener('scroll', function headerscroll() {
  if (window.scrollY > 470) {
    header.classList.add('fixed-header');
  }
  else {
    
    header.classList.remove('fixed-header');
  }
});
/*Връзка с базата данни*/
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
 import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
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

const logInBttn = document.getElementById('logInBttn');
const myProfileBttn = document.getElementById('myProfileBttn');
/*Проверка дали има логнат потребител*/
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const auth = getAuth();
onAuthStateChanged(auth, (user) => {
if (user) {
logInBttn.style.display = 'none';
myProfileBttn.style.display='block';
const uid = user.uid;
// ...

} else {
// User is signed out
// ...
logInBttn.style.display = 'block';
myProfileBttn.style.display='none';
}
});

/*Поставяне на топ бутона*/
const topBttn = document.getElementById('topBttn');
let scroll5 = 0;

addEventListener('scroll', function() {
  if (window.pageYOffset >= 30) {
    topBttn.style.display = 'block';
  } 
  
  else if (window.pageYOffset >= 50){
      topBttn.style.display = 'none';
  }
  else {
    topBttn.style.display = 'none';
  }


topBttn.addEventListener('click', function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;


});
});