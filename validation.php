<?php
$name = $_POST["usename"]; // récupere ce qui est dans l'input de email
$surname = $_POST["usersurname"]; // récupere ce qui est dans l'input de age
$sexe = $_POST["sexe"];
$age = $_POST["age"];
$adresse = $_POST["adresse"];


if (filter_var($adresse, FILTER_VALIDATE_EMAIL)) {
    echo("$adresse adresse mail valide");
  } else {
    echo("$adresse adresse mail invalide");
  }

?>