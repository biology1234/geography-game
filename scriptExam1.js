let studentScore = 0;
let examScore = 0;

function submitQuiz(event) {
  const firstQuestion = document.querySelector('input[name="q1"]:checked');
 

  if (firstQuestion && firstQuestion.value === 'c') {
    studentScore += 1;
  }

  examScore += 1;
  alert(`Браво, вие изкарахте ${studentScore} точки от ${examScore} точки`);
  event.preventDefault();
}
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
    import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
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
    
  
    const db = getDatabase(app);
  
               document.getElementById("submitButton").addEventListener('click', function database(e){
                e.preventDefault();
                set(ref(db, 'user/'),
                {
     
                  Брой_точки: studentScore.value,
                  
  
                });
                  
               })

            
               const timerElement = document.getElementById("timer");
               const startTime = Date.now();
               const endTime = startTime + (2 * 60 * 60 * 1000); // 2 часа в милисекунди
       
               const updateTimer = () => {
                   const currentTime = Date.now();
                   const remainingTime = endTime - currentTime;
       
                   const hours = Math.floor(remainingTime / (1000 * 60 * 60));
                   const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
                   const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
       
                   timerElement.textContent = `${hours} часа, ${minutes} минути`;
       
                   if (remainingTime <= 0) {
                       clearInterval(interval);
                       timerElement.textContent = "Времето изтече!";
                   }
               };
       
               const interval = setInterval(updateTimer, 1000); // Актуализира таймера всяка секунда
       
               updateTimer();
     