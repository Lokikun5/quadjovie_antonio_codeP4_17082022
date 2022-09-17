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

// formulaire DOM elements
const myForm = document.getElementById ('myForm');
const firstname = document.getElementById ('firstname');
const last = document.getElementById ('lastname');
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
 
// formulaire regex 
  const mailRegex = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
  const nameRegex = /^[a-zA-Z-\s]+$/;

// fonction validation du mail

myForm.addEventListener('submit', function(e){

  if (firstname.value === "" || firstname.value.length< 2) { 
    alert("Complétez le champ prénom !");
    e.preventDefault();
  }  else if (nameRegex.test(firstname.value) == false){
    alert("champ non valide !");
    e.preventDefault();
  }

  if (last.value === "" || last.value.length< 2) {
    alert("Complétez le champ prénom !");
    e.preventDefault();
  }  else if (nameRegex.test(last.value) == false){
    alert("champ non valide !");
    e.preventDefault();
  }

  if (mail.value === "") {
    alert("Complétez le champ mail !");
    e.preventDefault();
  }  else if (mailRegex.test(mail.value) == false){
    alert("champ non valide !");
    e.preventDefault();
  }
  if (!birth.value.match(dateFormat)) {
    alert("Complétez le champ Date de naissance !");
    e.preventDefault();
  }

  if (!tournament.value.match(numbers)) {
    alert ("Veuillez indiquer le nombre de tournois");
    e.preventDefault();
  }

  if ((!location1.checked)|| (!location2.checked) || (!location3.checked)
      ||(!location4.checked) ||(!location5.checked) ||(!location6.checked)) {
      alert("Veuillez choisir une ville");
      e.preventDefault();
  }

  if (!checkbox1CGU.checked){
    alert("Veuillez accepter les condition d'utilisation");
    e.preventDefault();
  }
  console.log('coucou');
  
});

