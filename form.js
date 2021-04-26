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
        var name = document.getElementById("name");
        name.style.background = 'red';

      } else { // remet E-mail en noir
        var name = document.getElementById("name");
        name.style.background = '';
        var p = 1;
      }
        if (document.getElementById("prenom").value == "") // si email n'est pas rempli exécute la suite 
        { // met en rouge email 
          var surname = document.getElementById("prenom");
          surname.style.background = 'red';

        } else { // remet E-mail en noir
          var surname = document.getElementById("prenom");
          surname.style.background = '';

          var v = 1;
        }
        if (document.getElementById("age").value == "") // si age n'est pas rempli exécute la suite 
        {
          // met en rouge Votre age 
          var age = document.getElementById("age");
          age.style.background = 'red';



        } else { // remet Votre age en noir
          var age = document.getElementById("age");
          age.style.background = '';
          var y = 1;
        }
        if (document.getElementById("numero").value == "") // si age n'est pas rempli exécute la suite 
        {
          // met en rouge Votre age 
          var numero = document.getElementById("numero");
          numero.style.background = 'red';



        } else { // remet Votre age en noir
          var numero = document.getElementById("numero");
          numero.style.background = '';
          var m = 1;
        }if (document.getElementById("adresse").value == "") // si age n'est pas rempli exécute la suite 
        {
          // met en rouge Votre age 
          var adresse = document.getElementById("adresse");
          adresse.style.background = 'red';



        } else { // remet Votre age en noir
          var adresse = document.getElementById("adresse");
          adresse.style.background = '';
          var o = 1;
        }if (document.getElementById("statut").value == "choix") // si age n'est pas rempli exécute la suite 
        {
          // met en rouge Votre age 
          var statut = document.getElementById("statut");
          statut.style.color = 'red';



        } else { // remet Votre age en noir
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
