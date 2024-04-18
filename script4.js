
const button  = document.getElementById('Send');
let score = 0;
button.addEventListener('click', function checkAnswers(event) {
 event.preventDefault();
    const firstQuestion = document.querySelector('input[name="answer1"]:checked');
    if (firstQuestion && firstQuestion.value === 'b') {
      score += 1;  
    }
    const secondQuestion = document.querySelector('input[name="answer2"]:checked');
    if (secondQuestion && secondQuestion.value === 'b') {
      score += 1;  
    }
    const thirdquestion = document.querySelector('input[name="answer3"]:checked');
    if (thirdquestion && thirdquestion.value === 'c') {
      score += 1;  
    }
    const fourquestion = document.querySelector('input[name="answer4"]:checked');
    if (fourquestion && fourquestion.value === 'b') {
      score += 1;  
    }
  });  
 
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

  
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

  button.addEventListener('click', function name(event){
   
    const dbRef = ref(getDatabase());

    // Извикване на асинхронната функция за получаване на стойността от базата данни
    get(child(dbRef, 'users/')).then((snapshot) => {
       const pin = snapshot.val();

       if (typeof pin === 'number' ){
        
     
    
      event.preventDefault();
      set(ref(db, 'results/' ),{
             result: score, 
             pin: pin
             
       });  
  }
  
   }) });
  
  