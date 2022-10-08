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
const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const mail = document.getElementById("yourMail");
const birth = document.getElementById("birthday");
const tournament = document.getElementById("howManyTournament");
const locations = document.getElementsByName("location");

const checkbox1CGU = document.getElementById("checkbox1");
// Regex validation
const numbers = /^[1-9]+$/;
const mailRegex =
  /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
const birthdayRegex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
const nameRegex = /(.*[a-z]){2}/i;
// error validation dom element

const errorFirst = document.getElementById("error-first");
const errorLast = document.getElementById("error-last");
const errorMail = document.getElementById("error-mail");
const errorBirth = document.getElementById("error-birth");
const errorQuantity = document.getElementById("error-howMany");
const errorCity = document.getElementById("error-city");
const errorValidation = document.getElementById("error-validation");

// messages de validation

const confirmation = document.getElementById("confirmation");
const confirmationCloseBtn = document.getElementsByClassName("btn-close");
confirmationCloseBtn[0].addEventListener("click", close);

// functions validation formulaire

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
});

function validate() {
  let firstChecked;
  let lastChecked;
  let mailChecked;
  let birthChecked;
  let tournamentChecked;
  let radioChecked;
  let CGUChecked;

  if ( //Vérification du champ prénom
    !firstname.value.match(nameRegex) ||
    firstname.value == " " ||
    firstname.value.length < 2
  ) {
    errorFirst.style.display = "block";
    firstname.style.border = "solid #FF4E60 2px";
  } else {
    errorFirst.style.display = "none";
    firstname.style.border = "none";
    firstChecked = true;
  }

  if (//Vérification du champ nom
    !lastname.value.match(nameRegex) ||
    lastname.value == " " ||
    lastname.value == null ||
    lastname.value.length < 2
  ) {
    errorLast.style.display = "block";
    lastname.style.border = "solid #FF4E60 2px";
  } else {
    errorLast.style.display = "none";
    lastname.style.border = "none";
    lastChecked = true;
  }

  if (!mailRegex.test(mail.value)) {//Vérification du champ mail
    errorMail.style.display = "block";
    mail.style.border = "solid #FF4E60 2px";
  } else {
    errorMail.style.display = "none";
    mail.style.border = "none";
    mailChecked = true;
  }

  if (!birth.value.match(birthdayRegex)) {//Vérification du champ date de naissance 
    errorBirth.style.display = "block";
    birth.style.border = "solid #FF4E60 2px";
  } else {
    errorBirth.style.display = "none";
    birth.style.border = "none";
    birthChecked = true;
  }

  if (!tournament.value.match(numbers)) {//Vérification du champ tournoi
    errorQuantity.style.display = "block";
    tournament.style.border = "solid #FF4E60 2px";
  } else {
    errorQuantity.style.display = "none";
    tournament.style.border = "none";
    tournamentChecked = true;
  }

  radioChecked = false;
  for (let i = 0; i < locations.length; i++) {//Vérification du champ locations
    if (locations[i].checked) {
      radioChecked = true;
    }
  }

  if (radioChecked) {
    errorCity.style.display = "none";
  } else {
    errorCity.style.display = "block";
  }

  if (!checkbox1CGU.checked) {
    errorValidation.style.display = "block";
    errorValidation.style.marginBottom = "20px";
  } else {
    errorValidation.style.display = "none";
    CGUChecked = true;
  }

  // validation final du formulaire
  if (
    firstChecked &&
    lastChecked &&
    mailChecked &&
    tournamentChecked &&
    radioChecked &&
    CGUChecked &&
    birthChecked
  ) {
    form.style.display = "none";
    confirmation.style.display = "flex";
  }
}
