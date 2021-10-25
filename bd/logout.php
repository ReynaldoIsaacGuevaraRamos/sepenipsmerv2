<?php
    setcookie( "idUsuarioSession", "", time()- 60, "/","", 0);

    if(isset($_COOKIE['state_inteligencia'])){
        setcookie( 'state_inteligencia', "", time()- 60, "/","", 0);
    }
    if(isset($_COOKIE['state_personalidad'])){
        setcookie( 'state_personalidad', "", time()- 60, "/","", 0);
    }
    if(isset($_COOKIE['state_proyectiva'])){
        setcookie( 'state_proyectiva', "", time()- 60, "/","", 0);
    }
    if(isset($_COOKIE['state_emocional'])){
        setcookie( 'state_emocional', "", time()- 60, "/","", 0);
    }

    session_start();
    unset($_SESSION["s_usuario"]);
    session_destroy();

    header("Location: ../index.php");

?>