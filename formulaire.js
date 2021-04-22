var button = document.getElementById('submit'); // on récupere l'id du button 

function ajax(data) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", 'exo.php', true); // on va chercher le fichier php
  xmlhttp.send(data);
  xmlhttp.onload = response; // permet d'enlever le : if (this.readyState == 4 && this.status == 200) si besoin 
}

function response() { // suite de la fonction ONLOAD
  console.log(this.responseText); // pour voir le texte dans la console 
  document.getElementById("response").innerHTML = this.responseText; // permet de faire apparaitre le texte 
}

button.addEventListener("click", function () { 
  var form = document.getElementById('form'); // on récupere tout les inputs du formulaire
  var formData = new FormData(form);
  ajax(formData); // on exécute la fonction ajax avec les données du formulaire 

  console.log(form); // affiche dans la console 

 if (document.getElementById("email").value == "") // si email n'est pas rempli exécute la suite 
 { // met en rouge email 
    var i = document.getElementById("test"); 
    i.setAttribute("style", "color:red");


  } else 
  { // remet E-mail en noir
    var i = document.getElementById("test"); 
    i.setAttribute("style", "color:black")
  }
  if (document.getElementById("age").value == "")  // si age n'est pas rempli exécute la suite 
  {
    // met en rouge Votre age 
    var p = document.getElementById("ages");
    p.setAttribute("style", "color:red");
  } else 
  { // remet Votre age en noir
    var i = document.getElementById("ages");
    i.setAttribute("style", "color:black")
  }


});