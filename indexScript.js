document.addEventListener('DOMContentLoaded', function() {
    let start = 0; 
    let text = 'Добре дошли в BioMedicine!';
    let speed = 110;
    let textInnerElement = document.querySelector('.textInner');

    function typeWriter() {
        if (start < text.length) {
            textInnerElement.innerHTML += text.charAt(start);
            start++;
            setTimeout(typeWriter, speed);
        } 
    }
    typeWriter();
 }); 
   
  
 let start = 0;
let question1 = 'Какво е ключовото в тази платформа?';
let smallTextInnerElement = document.getElementById('question1');
let speed2 = 105;
let scroll = 0;

function typeWriter2() {
    if (start < question1.length) {
        smallTextInnerElement.innerHTML += question1.charAt(start);
        start++;
        setTimeout(typeWriter2, speed2);
    }
}

addEventListener('scroll', function showingQuestion(event) {
  scroll = window.pageYOffset;
    if (scroll >= 340) {
        typeWriter2(); // Call the function when scroll reaches 80
    }
});

let text1 = document.getElementById('answerTopic1');
let scroll1 = 0;

// Променено събитие от 'wheel' на 'scroll'
addEventListener('scroll', function coloredText1(event) {
  // Използвайте pageYOffset, за да получите текущата позиция на скролбара
  scroll1 = window.pageYOffset;

  if (scroll1 >= 480) {
    text1.style.color = "#43B68A";
  }
});
      let text2 = document.getElementById('answerTopic2');
      let scroll2 = 0; 
       addEventListener('scroll', function coloredText2 (event){

        scroll2 = window.pageYOffset;
         if (scroll2 >= 680){
          text2.style.color = "#43B68A";
         }
       });
   
      let text3 = document.getElementById('answerTopic3'); 
      let scroll3 = 0; 
      addEventListener('scroll', function coloredText3 (event){
       scroll3 = window.pageYOffset;
        if (scroll3 >= 880) {
          text3.style.color = '#43B68A';
        }

      });
  const header = document.getElementById('header');

addEventListener('scroll', function headerscroll() {
  if (window.scrollY > 420) {
    header.classList.add('fixed-header');
  }
  else {
    
    header.classList.remove('fixed-header');
  }
});
