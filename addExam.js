const chooseQuestion = document.getElementById('chooseQuestion');
const background = document.getElementById('background');

document.getElementById('addQuestion').addEventListener('click', function test() {

chooseQuestion.style.display = 'block';
if(chooseQuestion.style.display = 'block'){
    background.style.filter = 'blur(4px)';

}

});
const close = document.getElementById('close');
close.addEventListener('click', function(){
    chooseQuestion.style.display = 'none'; // Hide the question element
    background.style.filter = 'none'; // Reset the blur effect
});


document.getElementById('addQuestion2').addEventListener('click', function(){
    // Get the checked radio button with the name 'radio1'
    const question = document.querySelector('input[name="radio1"]:checked');

    // Check if a radio button is checked and its value is 'a'
    if (question && question.value === 'a'){
      
        chooseQuestion.style.display = 'none'; // Hide the question element
    background.style.filter = 'none'; // Reset the blur effect
    const Exercise = document.createElement('input');
    Exercise.placeholder = 'Въведете въпрос';
    Exercise.type = 'text';
    Exercise.className = 'Question1';
    }
});
