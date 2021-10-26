<?php
    //Al cerrar sesion, se borran los cookies que almacenaban el DUI e ID del empleado
    setcookie( "idUsuarioSession", "", time()- 60, "/","", 0);
    setcookie( "DuiUsuarioSession", "", time()- 60, "/","", 0);
    
    session_start();
    unset($_SESSION["s_usuario"]);
    session_destroy();

    header("Location: ../index.php");

?>