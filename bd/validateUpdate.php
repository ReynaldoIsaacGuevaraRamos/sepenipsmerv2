<?php
$consulta = "SELECT id, dui, correo FROM users WHERE dui='$dui' OR correo='$correo' ";
$resultado = $conexion->prepare($consulta);
$resultado->execute();
$duiVal = $resultado->fetchColumn(0);
$correoVal = $resultado->fetchColumn(1);
if ($duiVal == $dui) {
    return true;
} elseif ($correoVal == $correo) {
    return true;
} else {
    return false;
}
?>