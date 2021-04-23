var button = document.getElementById('envoi')

function ajax (data) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", 'validation.php', true);
    xmlhttp.send(data);
    xmlhttp.onload = response; // permet d'enlever le : if (this.readyState == 4 && this.status == 200) si besoin 
}

   function response() { // suite de la fonction ONLOAD
    console.log(this.responseText);
    document.getElementById("response").innerHTML = this.responseText;// permet de faire apparaitre la suggestion 
}
button.addEventListener("click", function (evenement) {
    var form = document.getElementById('formulaire');
    var formData = new FormData(form);
    ajax(formData);
  
    console.log(form);
});


function verif(event) {
    event.preventDefault();
    var name = document.forms["formulaire"]["name"];
    var name2 = document.forms["formulaire"]["prenom"];
    var age = document.forms["formulaire"]["age"];
    var adresse = document.forms["formulaire"]["adresse"];
    var errors = 0;
    
  
    if (name.value == "") {
        name.style.backgroundColor = "#FF0000";
        errors++;
    }
    else{
        name.style.backgroundColor = "#FFFFFF"
    }
  
    if (name2.value == "") {
        name2.style.backgroundColor = "#FF0000";
        errors++;
    }
    else {
        name2.style.backgroundColor = "#FFFFFF"
    }
    if (age.value == "") {
        age.style.backgroundColor = "#FF0000";
        errors++;
    }
    else {
        age.style.backgroundColor = "#FFFFFF";
    }
    if (adresse.value == "") {
        adresse.style.backgroundColor = "#FF0000";
        errors++;
    }
    else {
        adresse.style.backgroundColor = "#FFFFFF";
    }
    
    if (errors === 0){
        document.getElementById("formulaire").submit();
    }
  }
  document.getElementById("formulaire").addEventListener("submit", verif); 
  