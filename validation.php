<?php
    $name = $_POST["username"];
    $prenom = $_POST["usersurname"];
    $tel = $_POST["telephone"];
    $age = $_POST["age"];
    $adresse = $_POST["adresse"];

    if (preg_match("/^([a-zA-Z' ]+)$/", $name)) {
        echo "Votre nom est correct";
    } else {
        echo "Vous avez mal écrit votre nom";
    }
    if (preg_match("/^([a-zA-Z' ]+)$/", $prenom)) {
        echo "<br>Votre prenom est correct";
    } else {
        echo "<br>Vous avez mal écrit votre prenom";
    }
    if (filter_var($adresse, FILTER_VALIDATE_EMAIL)) {
        echo ("<br> adresse mail valide");
    } else {
        echo ("<br> adresse mail invalide");
    }
    if (filter_var($age, FILTER_SANITIZE_NUMBER_INT)) {
        echo ("<br> Vous avez $age");
    } else {
        echo ("<br> Veuillez renseigner un âge valide");
    }
    if (filter_var($tel, FILTER_SANITIZE_NUMBER_INT)) {
        echo "<br>Votre numéro: $tel est bon";
    } else {
        echo "<br>Numéro de téléphone pas valide";
    }


    ?>
