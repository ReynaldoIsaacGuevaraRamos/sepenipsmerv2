<?php
session_start();
unset($_SESSION["s_usuario"]);
session_destroy();
setcookie( "idUsuarioSession", "", time()- 60, "/","", 0);
header("Location: ../index.php");

?>