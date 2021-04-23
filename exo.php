<?php
$mail = $_POST["email"]; // récupere ce qui est dans l'input de email
$age = $_POST["age"]; // récupere ce qui est dans l'input de age
$nom = $_POST["code"];

if (empty($age)) // si il n'y a rien dans age: fait echo 
{
    echo "La case age n'est pas rempli";
}
if (empty($mail)) // si il n'y a rien dans email: fait echo 
{
    echo "<br> La case mail n'est pas rempli";
}

if(preg_match ( " /^.+@.+\.[a-zA-Z]{2,}$/ " , $mail )) // si email possède tout les caractéristique d'un email correct
{
    if (!empty($age)) // si il y a quelque chose dans age: fait echo 
    {
    echo "<br>Votre adresse mail est valide et vous avez $age ans ";
    }
} 
else // l'email n'a pas les caratéristique d'un email correct   
{
    echo"<br>L'email n'est pas valide";
}
