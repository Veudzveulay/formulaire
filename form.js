var button = document.getElementById('envoi'); // on récupere l'id du button 

function ajax(data) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", 'validation.php', true); // on va chercher le fichier php
  xmlhttp.send(data);
  xmlhttp.onload = response; //  
}

function response() { // suite de la fonction ONLOAD
  console.log(this.responseText); // pour voir le texte dans la console 
  document.getElementById("response").innerHTML = this.responseText; // permet de faire apparaitre le texte 
}
button.addEventListener("click", function () {
  // Vérification du nom
  if (validation_Nom_Prenom(document.getElementById("name").value)) 
  
  {  
    var name = document.getElementById("name");
    name.style.background = '';
    var p = 1;

  } else { 
    var name = document.getElementById("name");
    name.style.background = 'red';
  }
  // Vérification du prénom
  if (validation_Nom_Prenom(document.getElementById("prenom").value))
  {  
    var surname = document.getElementById("prenom");
    surname.style.background = '';
    var v = 1;

  } else { 
    var surname = document.getElementById("prenom");
    surname.style.background = 'red';

  }
  // Vérification de l'âge
  if (document.getElementById("age").value == "")  
  {
     
    var age = document.getElementById("age");
    age.style.background = 'red';



  } else { 
    var age = document.getElementById("age");
    age.style.background = '';
    var y = 1;
  }
  // vérfication du téléphone 
  if (Verifier_Numero_Telephone(document.getElementById("numero").value))  
  {
    var numero = document.getElementById("numero");
    numero.style.background = '';
    var m = 1;

  } else { // remet Votre age en noir
    var numero = document.getElementById("numero");
    numero.style.background = 'red';
  }
  // Vérification de l'adresse mail
  if (validerEmail(document.getElementById("adresse").value))  
  {
    var adresse = document.getElementById("adresse");
    adresse.style.background = '';
    var o = 1;

  } else { 
    var adresse = document.getElementById("adresse");
    adresse.style.background = 'red';
  }
  // Vérification du statut
  if (document.getElementById("statut").value == "choix")  
  {
     
    var statut = document.getElementById("statut");
    statut.style.color = 'red';



  } else { 
    var statut = document.getElementById("statut");
    statut.style.color = '';
    var n = 1;
  }


  if (y == 1 && v == 1 && p == 1 && m == 1 && o == 1 && n == 1) {
    var form = document.getElementById('formulaire'); // on récupere tout les inputs du formulaire
    var formData = new FormData(form);
    ajax(formData); // on exécute la fonction ajax avec les données du formulaire 

    console.log(form); // affiche dans la console 

  } else {
    document.getElementById("response").innerHTML = "";
  }
});

function validerEmail(email) {
  var mail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return mail.test(email);
}

function Verifier_Numero_Telephone(num_tel) {

  var tel = new RegExp(/^(01|02|03|04|05|06|08)[0-9]{8}/gi);
  return tel.test(num_tel);
}
function validation_Nom_Prenom(verif) {

 var nom_Prenom = new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u);
 return nom_Prenom.test(verif);
}
