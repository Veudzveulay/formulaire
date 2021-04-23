<?php
// definition des variables
$name = $surname = $sexe = $adresse = $age = "";

//le php récupère les données du formulaire
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = test_input($_POST["username"]);
  $surname = test_input($_POST["usersurname"]);
  $age = test_input($_POST["age"]);
  $sexe = test_input($_POST["sexe"]);
  $adresse = test_input($_POST["adresse"]);
}
//vérification en prennant en compte les caractères spéciaux
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

//phrase envoyée avec les données du formulaire dedans
echo "Vous etes " . $sexe . " " . $name ." " . $surname . " vous avez " . $age . " ans, vous habitez " . $adresse . ".";
?>