
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
button.addEventListener("click", function () 
{
      if (document.getElementById("name").value == "") // si email n'est pas rempli exécute la suite 
      { // met en rouge email 
        var i = document.getElementById("name");
        i.style.background = 'red';

      } else { // remet E-mail en noir
        var i = document.getElementById("name");
        i.style.background = '';
        var p = 1;
      }
        if (document.getElementById("prenom").value == "") // si email n'est pas rempli exécute la suite 
        { // met en rouge email 
          var i = document.getElementById("prenom");
          i.style.background = 'red';

        } else { // remet E-mail en noir
          var i = document.getElementById("prenom");
          i.style.background = '';

          var v = 1;
        }
        if (document.getElementById("age").value == "") // si age n'est pas rempli exécute la suite 
        {
          // met en rouge Votre age 
          var i = document.getElementById("age");
          i.style.background = 'red';



        } else { // remet Votre age en noir
          var i = document.getElementById("age");
          i.style.background = '';
          var y = 1;
        }
        if (y == 1 && v == 1 && p == 1) {
          var form = document.getElementById('formulaire'); // on récupere tout les inputs du formulaire
          var formData = new FormData(form);
          ajax(formData); // on exécute la fonction ajax avec les données du formulaire 

          console.log(form); // affiche dans la console 
        } else {
          document.getElementById("response").innerHTML = "";
        }
      });














/* document.forms["formulaire"].addEventListener("submit", function(e) {
 
    var erreur;
 
    var inputs = this;
 
    // Traitement générique
    for (var i = 0; i < inputs.length; i++) {
        console.log(inputs[i]);
        if (!inputs[i].value) {
            erreur = "Veuillez renseigner tous les champs";
            break;
        }
    }
 
    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {
        alert('Formulaire envoyé !');
    }
    
});

document.getElementById("formulaire").addEventListener("submit", function(e) {
 
    var erreur;
 
    var inputs = this.getElementsByTagName("input");
 
    for (var i = 0; i < inputs.length; i++) {
        console.log(inputs[i]);
        if (!inputs[i].value) {
            erreur = "Veuillez renseigner tous les champs";
        }
    }
 
    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {
        alert('Formulaire envoyé !');
    }
 
    var name = document.getElementById("username");
    var surname= document.getElementById("usersurname");
    var age = document.getElementById("age");
    var adresse = document.getElementById("adresse");
 
    if (!name.value) {
        erreur = "Veuillez renseigner votre nom";
    }
    if (!surname.value) {
        erreur = "Veuillez renseigner votre prénom";
    }
    if (!age.value) {
        erreur = "Veuillez renseigner votre age";
    }
    if (!adresse.value) {
        erreur = "Veuillez renseigner votre adresse";
    }
    
    
    
 
    
});
*/
