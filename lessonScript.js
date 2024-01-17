
let text1 = document.getElementById('tissue');
let scroll1 = 0;

// Променено събитие от 'wheel' на 'scroll'
addEventListener('scroll', function coloredText1(event) {
  // Използвайте pageYOffset, за да получите текущата позиция на скролбара
  scroll1 = window.pageYOffset;

  if (scroll1 >= 380) {
    text1.style.color = "red";
  }
});

let text2 = document.getElementById('boldText1');
let scroll2 = 0;

// Променено събитие от 'wheel' на 'scroll'
addEventListener('scroll', function coloredText2(event) {
  // Използвайте pageYOffset, за да получите текущата позиция на скролбара
  scroll2 = window.pageYOffset;

  if (scroll2 >= 580) {
    text2.style.color = "#43B68A";
  }
});

let text3 = document.getElementById('boldText2');
let scroll3 = 0;

// Променено събитие от 'wheel' на 'scroll'
addEventListener('scroll', function coloredText3(event) {
  // Използвайте pageYOffset, за да получите текущата позиция на скролбара
  scroll3 = window.pageYOffset;

  if (scroll3 >= 780) {
    text3.style.color = "#F4BC1C";
  }
});