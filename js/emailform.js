$(function(){
  'use strict';

  const userEmail = document.getElementsByName('from')[0];
  const subject = document.getElementsByName('subject')[0];
  const message = document.getElementsByName('message')[0];
  const recaptcha = document.querySelector(".g-recaptcha");
  const formAlert = document.querySelector(".emailFormAlert");

  const contactForm = $('#contact');

  function toggleContactForm(state) {
    if (typeof state !== 'boolean') return TypeError('State must be a boolean');

    if (state === true) {
      contactForm.fadeIn();
      contactForm.attr('aria-hidden', 'false');
      firstInput.focus();
    }
    else {
      contactForm.fadeOut();
      contactForm.attr('aria-hidden', 'true');
      userEmail.value='';
      subject.value='';
      message.value='';
      formAlert.innerHTML='';
      grecaptcha.reset();
      openContactBtn.focus();
    }
  }

  const closeContactBtn = $('#close-contact-btn');
  const openContactBtn = $('#open-contact-btn');

  openContactBtn.click(function () {
    toggleContactForm(true);
  });

  closeContactBtn.click(function () {
    toggleContactForm(false);
  });

  const firstInput = $('input[name="from"]');

  closeContactBtn.on('keydown', function (e) {
   if ((e.which === 9 && !e.shiftKey)) {//tab
       e.preventDefault();
       firstInput.focus();
   }
  });

  firstInput.on('keydown', function (e) {
      if ((e.which === 9 && e.shiftKey)) {//tab
          e.preventDefault();
          closeContactBtn.focus();
      }
  });

  contactForm.on('keydown', function (e) {
      if ((e.which === 27)) {//esc
          toggleContactForm(false);
      }
  });
  

  $('.emailFormSubmit').click(function (event) {
    formAlert.innerHTML='<i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>';
    event.preventDefault();

    const recaptchaResponse = document.getElementById("g-recaptcha-response");

    const isValid = validateEmailForm();

    if(isValid===true){

      const sendEmail = $.ajax({
        type: "POST",
        url: "emailform.php",
        dataType : 'json',
        data: {
          'userEmail' : userEmail.value,
          'subject' : subject.value,
          'message' : message.value,
          'g-recaptcha-response' : recaptchaResponse.value
        }
      });

      sendEmail.fail(function(error) {
        formAlert.innerHTML='Coś poszło nie tak :( '+error.responseText;
      });

      sendEmail.done(function(response){
        formAlert.innerHTML=response.text;
      });
    }

  });

  function validateEmailForm(){
    if(userEmail.validity.valid===false){
      markWrongInput(userEmail,"Podaj poprawny email!");
    }
    else if (subject.validity.valueMissing){
      markWrongInput(subject,"Wpisz jakiś temat!");
    }
    else if (message.validity.valueMissing){
      markWrongInput(message,"Pusta wiadomość? Napisz coś!");
    }
    else if (grecaptcha.getResponse().length === 0){
      recaptcha.classList.add('shake');
      recaptcha.addEventListener("mouseover", function (){this.classList.remove('shake')});
      formAlert.innerHTML="Potwierdź, że nie jesteś robotem!";
    }
    else return true;
  }

  function markWrongInput(wrongElement,alert){
    formAlert.innerHTML=alert;
    wrongElement.classList.add('wrongInput');
    wrongElement.addEventListener("focus", function (){
      this.classList.remove('wrongInput');
      formAlert.innerHTML='';
    });
  }
});
