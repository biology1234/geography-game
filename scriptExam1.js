let studentScore = 0;
let examScore = 0;

function submitQuiz(event) {
  const firstQuestion = document.querySelector('input[name="q1"]:checked');
 
  if (firstQuestion && firstQuestion.value === 'c') {
    studentScore += 1;
    examScore += 1; 
  }
  else{
    examScore += 1; 
  }
  const secondQuestion = document.querySelector('input[name="q2"]:checked');
  if (secondQuestion && secondQuestion.value === 'a'){
    studentScore += 1;
    examScore += 1; 
  }
else{
  examScore += 1; 
}
const thirdQuestion = document.querySelector('input[name="q3"]:checked');
  if (thirdQuestion && thirdQuestion.value === 'a'){
    studentScore += 1;
    examScore += 1; 
  }
else{
  examScore += 1; 
}
const fourQuestion = document.querySelector('input[name="q4"]:checked');
  if (fourQuestion && fourQuestion.value === 'c'){
    studentScore += 1;
    examScore += 1; 
  }
else{
  examScore += 1; 
}

const fiveQuestion = document.querySelector('input[name="q5"]:checked');
  if (fiveQuestion && fiveQuestion.value === 'c'){
    studentScore += 1;
    examScore += 1; 
  }
else{
  examScore += 1; 
}
const sixQuestion = document.querySelector('input[name="q6"]:checked');
  if (sixQuestion && sixQuestion.value === 'c'){
    studentScore += 1;
    examScore += 1; 
  }
else{
  examScore += 1; 
}

const sevenQuestion = document.querySelector('input[name="q7"]:checked');
  if (sevenQuestion && sevenQuestion.value === 'd'){
    studentScore += 1;
    examScore += 1; 
  }
else{
  examScore += 1; 
}

const eightQuestion = document.querySelector('input[name="q8"]:checked');
  if (eightQuestion && eightQuestion.value === 'd'){
    studentScore += 1;
    examScore += 1; 
  }
else{
  examScore += 1; 
}

const ninestion = document.querySelector('input[name="q9"]:checked');
  if (ninestion && ninestion.value === 'a'){
    studentScore += 1;
    examScore += 1; 
  }
else{
  examScore += 1; 
}

const tenQuestion = document.querySelector('input[name="q10"]:checked');
  if (tenQuestion && tenQuestion.value === 'b'){
    studentScore += 1;
    examScore += 1; 
  }
else{
  examScore += 1; 
}

const elevenQuestion = document.querySelector('input[name="q11"]:checked');
  if (elevenQuestion && elevenQuestion.value === 'c'){
    studentScore += 1;
    examScore += 1; 
  }
else{
  examScore += 1; 
}

const twelveQuestion = document.querySelector('input[name="q12"]:checked');
  if (twelveQuestion && twelveQuestion.value === 'a'){
    studentScore += 1;
    examScore += 1; 
  }
else{
  examScore += 1; 
}
const thirteenQuestion = document.querySelector('input[name="q13"]:checked');
  if (thirteenQuestion && thirteenQuestion.value === 'd'){
    studentScore += 1;
    examScore += 1; 
  }
else{
  examScore += 1; 
}

const fourteen = document.querySelector('input[name="q14"]:checked');
  if (fourteen && fourteen.value === 'b'){
    studentScore += 1;
    examScore += 1; 
  }
else{
  examScore += 1; 
}

const fiveteen = document.querySelector('input[name="q15"]:checked');
  if (fiveteen && fiveteen.value === 'c'){
    studentScore += 1;
    examScore += 1; 
  }
else{
  examScore += 1; 
}
const sixteen = document.querySelector('input[name="q16"]:checked');
  if (sixteen && sixteen.value === 'd'){
    studentScore += 1;
    examScore += 1; 
  }
else{
  examScore += 1; 
}
const seventeen = document.querySelector('input[name="q17"]:checked');
if (seventeen && seventeen.value === 'a'){
  studentScore += 1;
  examScore += 1; 
}
else{
examScore += 1; 
}



  alert(`Браво, вие изкарахте ${studentScore} точки от ${examScore} точки`);
  event.preventDefault();  
  window.location.reload();
}
