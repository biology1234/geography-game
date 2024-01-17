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
let scoreResult = `Вашият резултат е ${score} точки от ${finalScore} точки`;
let outputElement = document.getElementById('scoreOutput');
outputElement.textContent = scoreResult;
}
