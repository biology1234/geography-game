function submitQuiz() {
    let score = 0; 
    let finalScore = 0; 
    const q1Answer = document.querySelector('input[name="q1"]:checked').value;

    if (q1Answer === "c") {
        score += 1;
        finalScore +=1;
    } 
    else {
        finalScore += 1; 
    }
    
   const q2Answer = document.querySelector('input[name="q2"]:checked').value;

    if (q2Answer === "a") {
        score += 1;
        finalScore +=1;
    } 
    else {
        finalScore += 1; 
    }/*
 
const q3Answer = document.querySelector('input[name="q3"]:checked').value;

    if (q3Answer === "a") {
        score += 1;
        finalScore +=1;
    } 
    else {
        finalScore += 1; 
   } 
 const q4Answer = document.querySelector('input[name="q4"]:checked').value;

    if (q4Answer === "c") {
        score += 1;
        finalScore +=1;
    } 
    else {
        finalScore += 1; 
    }
 const q5Answer = document.querySelector('input[name="q5"]:checked').value;
 if (q5Answer ==="c") {
    score += 1;
    finalScore +=1;
 }
 else {
    finalScore +=1;
 }
 const q6Answer = document.querySelector('input[name="q6"]:checked').value;
 if (q6Answer ==="c") {
    score += 1;
    finalScore +=1;
 }
 else {
    finalScore +=1;
 }
 const q7Answer = document.querySelector('input[name="q7"]:checked').value;
 if (q7Answer ==="b") {
    score += 1;
    finalScore +=1;
 }
 else {
    finalScore +=1;
 }
 const q8Answer = document.querySelector('input[name="q8"]:checked').value;
 if (q8Answer ==="d") {
    score += 1;
    finalScore +=1;
 }
 else {
    finalScore +=1;
 }
 const q9Answer = document.querySelector('input[name="q9"]:checked').value;
 if (q9Answer ==="d") {
    score += 1;
    finalScore +=1;
 }
 else {
    finalScore +=1;
 }
 const q10Answer = document.querySelector('input[name="q10"]:checked').value;
 if (q10Answer ==="b") {
    score += 1;
    finalScore +=1;
 }
 else {
    finalScore +=1;
 }
 const q11Answer = document.querySelector('input[name="q11"]:checked').value;
 if (q11Answer ==="c") {
    score += 1;
    finalScore +=1;
 }
 else {
    finalScore +=1;
 }
 const q12Answer = document.querySelector('input[name="q12"]:checked').value;
 if (q12Answer ==="c") {
    score += 1;
    finalScore +=1;
 }
 else {
    finalScore +=1;
 }
 const q13Answer = document.querySelector('input[name="q13"]:checked').value;
 if (q13Answer ==="d") {
    score += 1;
    finalScore +=1;
 }
 else {
    finalScore +=1;
 }
 */
alert(`Вашият резултат е ${score} точки от ${finalScore} точки`) ;

}


