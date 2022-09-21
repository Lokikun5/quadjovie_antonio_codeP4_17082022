function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal

modalClose.addEventListener("click", close);

function close() {
  modalbg.style.display = "none";
}

// Formulaire dom element
const form = document.getElementById ('form');
const firstname = document.getElementById ('firstname');
const lastname = document.getElementById ('lastname');
const mail = document.getElementById ('yourMail');
const birth = document.getElementById ('birthday');
const tournament = document.getElementById('howManyTournament');
const location1 = document.getElementById("location1");
const location2 =  document.getElementById("location2");
const location3 =  document.getElementById("location3");
const location4 =  document.getElementById("location4");
const location5 =  document.getElementById("location5");
const location6 =  document.getElementById("location6");
const checkbox1CGU = document.getElementById("checkbox1"); 
// Regex validation
const numbers = /^[0-9]+$/;
const mailRegex = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
const birthdayRegex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
const nameRegex = /(.*[a-z]){2}/i;
// error validation dom element

const errorFirst = document.getElementById ('error-first');
const errorLast = document.getElementById ('error-last');
const errorMail = document.getElementById ('error-mail');
const errorBirth = document.getElementById ('error-birth');
const errorQuantity = document.getElementById ('error-howMany');
const errorCity = document.getElementById ('error-city');
const errorValidation = document.getElementById ('error-validation');

// messages de validation

const confirmation = document.getElementById ('confirmation');
const confirmationCloseBtn = document.getElementsByClassName('btn-close');
confirmationCloseBtn[0].addEventListener("click", close);

// functions validation formulaire 

form.addEventListener('submit', (e) => {
  e.preventDefault();
})

function validate () {
  let firstChecked;
  let lastChecked;
  let mailChecked;
  let birthChecked;
  let tournamentChecked;
  let radioChecked;
  let CGUChecked;

  if (!firstname.value.match(nameRegex) || firstname.value == ' ' || firstname.value.length < 2) {
    errorFirst.innerText = 'Veuillez renseigner un prénom valide';
    errorFirst.style.color = '#FF4E60';
    errorFirst.style.fontSize = '0.8rem';
    errorFirst.style.marginTop = '10px';
    firstname.style.border = 'solid #FF4E60 2px';
  } else {
    errorFirst.style.display = 'none';
    firstname.style.border = 'none';
    firstChecked = true;
  };

  if (!lastname.value.match(nameRegex) || lastname.value == ' ' || lastname.value == null || lastname.value.length < 2) { 
    errorLast.innerText = 'Veuillez renseigner un nom valide';
    errorLast.style.color = '#FF4E60';
    errorLast.style.fontSize = '0.8rem';
    errorLast.style.marginTop = '10px';
    lastname.style.border = 'solid #FF4E60 2px';      
}  else {
  errorLast.style.display = 'none';
  lastname.style.border = 'none';
  lastChecked = true;
};

if (!mailRegex.test(mail.value)) { 
  errorMail.innerText = 'Veuillez renseigner une adresse mail valide';
  errorMail.style.color = '#FF4E60';
  errorMail.style.fontSize = '0.8rem';
  errorMail.style.marginTop = '10px';
  mail.style.border = 'solid #FF4E60 2px';
} else {
errorMail.style.display = 'none';
mail.style.border = 'none';
mailChecked = true;
};

if (!birth.value.match(birthdayRegex)) { 
  errorBirth.innerText = 'Veuillez remplir votre date danniversaire';
  errorBirth.style.color = '#FF4E60';
  errorBirth.style.fontSize = '0.8rem';
  errorBirth.style.marginTop = '10px';
  birth.style.border = 'solid #FF4E60 2px';
  } else {
  errorBirth.style.display = 'none';
  birth.style.border = 'none';
  birthChecked = true;      
  }

  if (!tournament.value.match(numbers)) { 
    errorQuantity.innerText = 'Vous devez indiquer un nombre';
    errorQuantity.style.color = '#FF4E60';
    errorQuantity.style.fontSize = '0.8rem';
    errorQuantity.style.marginTop = '10px';
    tournament.style.border = 'solid #FF4E60 2px';
  } else {
    errorQuantity.style.display = 'none';
    tournament.style.border = 'none';
    tournamentChecked = true;
  };

  if (!location1.checked && !location2.checked && !location3.checked && !location4.checked && !location5.checked && !location6.checked) { 
    errorCity.innerText = 'choisissez une ville';
    errorCity.style.color = '#FF4E60';
    errorCity.style.fontSize = '0.8rem';
    errorCity.style.marginTop = '10px';          
  } else {
    errorCity.style.display = 'none';
    radioChecked = true;
  };

  if (!checkbox1CGU.checked) {
    errorValidation.innerText = 'veuillez accepter les conditions d\'utilisation';
    errorValidation.style.color = '#FF4E60';
    errorValidation.style.fontSize = '0.8rem';
    errorValidation.style.marginTop = '10px';
    errorValidation.style.marginBottom = '20px';
  } else {
    errorValidation.style.display = 'none';
    CGUChecked = true;
  };

  // validation final du formulaire
  if (firstChecked == true && lastChecked == true && mailChecked == true && tournamentChecked == true && radioChecked == true && CGUChecked == true && birthChecked == true) {
    form.style.display = "none";
    confirmation.style.display = "flex";
  }
}


