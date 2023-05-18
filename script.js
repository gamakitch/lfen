const firstPage = document.getElementById("firstPage"); //première page
const secondPage = document.getElementById("secondPage"); //deuxième page
const thirdPage = document.getElementById("thirdPage"); //troisième page
const stepper = document.getElementsByClassName("stepper-item"); //la barre de progression

firstPage.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche l'envoi du formulaire

  const selectedOption = document.getElementById("selectOffre").value;

  firstPage.style.display = "none"; // Masqué le premier formulaire
  secondPage.style.display = "flex"; // Affiche le deuxième formulaire

  stepper[0].classList.remove("active"); // supprime la classe active pour le premier formulaire
  stepper[0].classList.add("completed"); // donner la classe finie pour le premier formulaire
  stepper[1].classList.add("active"); // donner la classe active pour le deuxième formulaire
});

secondPage.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche l'envoi du formulaire

  // Récupère les valeurs des champs de texte du deuxième formulaire
  const name = document.getElementById("name").value;
  const familyName = document.getElementById("familyName").value;
  const email = document.getElementById("email").value;
  const birthdate = document.getElementById("birthdate").value;
  const gender = document.getElementById("gender").value;
  const phoneNumber = document.getElementById("phoneNumber").value;

  //afficher les valeurs des champs de texte du deuxième formulaire
  console.log("Nom :", name);
  console.log("Prénom :", familyName);
  console.log("Email :", email);
  console.log("Date de naissance :", birthdate);
  console.log("Sexe :", gender);
  console.log("Numéro de téléphone :", phoneNumber);

  secondPage.style.display = "none"; // Masque le deuxième formulaire
  thirdPage.style.display = "flex"; // Affiche le troisième formulaire

  stepper[1].classList.remove("active");
  stepper[1].classList.add("completed");
  stepper[2].classList.add("active");
});

thirdPage.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche l'envoi du formulaire

  // Récupère les valeurs des champs de texte du formulaire de paiement
  const cardNumber = document.getElementById("cardNumber").value;
  const cardName = document.getElementById("cardName").value;
  const expiryDate = document.getElementById("expiryDate").value;
  const cvv = document.getElementById("cvv").value;

  console.log("Numéro de carte :", cardNumber);
  console.log("Nom sur la carte :", cardName);
  console.log("Date d'expiration :", expiryDate);
  console.log("CVV :", cvv);

  alert("Paiement effectué avec succès !");

  //retourner a la premiere page
  thirdPage.style.display = "none";
  firstPage.style.display = "flex";

  //rénitialliser progress bar
  stepper[0].classList.add("active");
  stepper[0].classList.remove("completed");
  stepper[1].classList.remove("active");
  stepper[1].classList.remove("completed");
  stepper[2].classList.remove("completed");
  stepper[2].classList.remove("active");
});

const birthdateInput = document.getElementById("birthdate");

//cette fonction ajoute une contrainte sur l'age dans cette exemple le form va pas accepter une personne -16 ans
birthdateInput.addEventListener("input", function () {
  const minimumAge = 16;
  const selectedDate = new Date(this.value);
  const currentDate = new Date();
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - minimumAge); // Calculate the minimum date
  // Compare the selected date with the minimum date
  if (selectedDate > minDate) {
    this.setCustomValidity(`You must be at least ${minimumAge} years old.`);
  } else {
    this.setCustomValidity("");
  }
});