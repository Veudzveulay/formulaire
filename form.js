
document.forms["formulaire"].addEventListener("submit", function(e) {
 
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