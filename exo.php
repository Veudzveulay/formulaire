    <?php
    $name = $_POST["username"];
    $prenom = $_POST["usersurname"];
    $tel = $_POST["telephone"]; // récupere ce qui est dans l'input de email
    $age = $_POST["age"]; // récupere ce qui est dans l'input de age
    $adresse = $_POST["adresse"]; // récupere ce qui est dans l'input de age
    
    if(preg_match("/^([a-zA-Z' ]+)$/",$name)) {
        echo "Votre nom est correct";
    }
    else {
        echo "Vous avez mal écrit votre nom";
    }
    if(preg_match("/^([a-zA-Z' ]+)$/",$prenom)) {
        echo "<br>Votre prenom est correct";
    }
    else {
        echo "Vous avez mal écrit votre prenom"; 
    }
    ?>
