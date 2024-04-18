

let score = 0;
function checkAnswers(event) {
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
    if (fourquestion && fourquestion.value === 'd') {
      score += 1;  
    }
    const fivequestion = document.querySelector('input[name="answer5"]:checked');
    if (fivequestion && fivequestion.value === 'd') {
      score += 1;  
    }
    document.getElementById('points').textContent = score;
    
  }
 
 