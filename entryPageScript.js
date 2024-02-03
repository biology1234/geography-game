
    let input = document.getElementById('passwordInput');
    
    let dot1 = document.getElementById('dot1');
    let dot2 = document.getElementById('dot2');
    let dot3 = document.getElementById('dot3');
    let dot4 = document.getElementById('dot4');

    let p1 = document.getElementById('p1');
    let p2 = document.getElementById('p2');
    let p3 = document.getElementById('p3');
    let p4 = document.getElementById('p4');

    let form = document.getElementById('form');
    
    let checkBox1 = document.getElementById('checkbox1');
    let savingProfile = document.getElementById('savingProfile');
    let submitReg = document.getElementById('submitReg');

    let google = document.getElementById('google');
    let facebook = document.getElementById('facebook');
    let github = document.getElementById('github');

    let informationContainer = document.getElementById('informationContainer');
    let title = document.getElementById('title1');
    let informationText = document.getElementById('informationText'); 
    let haveAccount = document.getElementById('haveAccount');

    input.addEventListener('input', passwordActivate);
    input.addEventListener('blur', passwordDeactivate);

    const eightChapter = /^.{8,}$/;
    const containsUpperCase = /[A-Z]/;
    const containsSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
    const containsNumber = /\d/;
    let passwordShowingImg = document.getElementById('passwordShowingImg');
        function passwordActivate(){
        
      form.style.paddingTop = '300px';
      form.style.height = '300px';
      dot1.style.display = 'block';
      dot2.style.display = 'block';
      dot3.style.display = 'block';
      dot4.style.display = 'block';

      p1.style.display = 'block';
      p2.style.display = 'block';
      p3.style.display = 'block';
      p4.style.display = 'block';
         
      checkBox1.style.bottom = '285px';
      savingProfile.style.bottom = '307px';
      submitReg.style.bottom = '290px';

      google.style.bottom = '240px';
      facebook.style.bottom = '240px';
      github.style.bottom = '240px';

      informationContainer.style.paddingTop = '290px';
      title.style.bottom = '265px';
      informationText.style.bottom = '175px';
      haveAccount.style.bottom = '115px';
      passwordShowingImg.style.bottom='187px';

      if (eightChapter.test(input.value)){
         dot1.style.background = 'green';
      }
      else {
        dot1.style.background = 'red';
      }
      if (containsUpperCase.test(input.value)){
         dot2.style.background='green';
      }
      else {
        dot2.style.background='red';
      }
       if(containsSpecialChar.test(input.value)){
        dot3.style.background='green';
       }
       else {
        dot3.style.background ='red';
       }
       if (containsNumber.test(input.value)){
        dot4.style.background = 'green';
       }
       else{
        dot4.style.background='red';
       }
       
      }

function passwordDeactivate () {
    form.style.paddingTop = '';
      form.style.height = '';
      dot1.style.display = '';
      dot2.style.display = '';
      dot3.style.display = '';
      dot4.style.display = '';

      p1.style.display = '';
      p2.style.display = '';
      p3.style.display = '';
      p4.style.display = '';
         
      checkBox1.style.bottom = '';
      savingProfile.style.bottom = '';
      submitReg.style.bottom = '';

      google.style.bottom = '';
      facebook.style.bottom = '';
      github.style.bottom = '';

      informationContainer.style.paddingTop = '';
      title.style.bottom = '';
      informationText.style.bottom = '';
      haveAccount.style.bottom = '';
      passwordShowingImg.style.bottom='';
      if (pat1.test(input.value)){
        dot1.style.background = '';
     }
     else {
       dot1.style.background = '';
     }
     }

     passwordShowingImg.addEventListener('click', function passwordShowing(event){
       event.preventDefault;
       if (input.type === 'password'){
        input.type='text';
       }
       else {
        input.type='password';
       }
      });
 
