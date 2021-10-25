<?php
session_start();

include_once 'conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

//recepción de datos enviados mediante POST desde ajax
$usuario = (isset($_POST['usuario'])) ? $_POST['usuario'] : '';
$password = (isset($_POST['password'])) ? $_POST['password'] : '';

$pass = hash('ripemd160', $password); //encripto la clave enviada por el usuario para compararla con la clava encriptada y almacenada en la BD
$consulta = "SELECT correo, password, nombre, id_rol, id FROM users WHERE correo='$usuario' AND password='$pass' ";
$resultado = $conexion->prepare($consulta);
$resultado->execute();
$rol = $resultado->fetchColumn(3);
$resultado->execute();
$nombreUser = $resultado->fetchColumn(2);
$resultado->execute();
$idUsuarioSession = $resultado->fetchColumn(4);

//Guardamos ID del usuario
setcookie("idUsuarioSession", $idUsuarioSession,time()+3600, "/","", 0);

if($resultado->rowCount() >= 1){
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);
    $_SESSION["s_usuario"] = $nombreUser;
    $_SESSION["s_rol"] = $rol;
}else{
    $_SESSION["s_usuario"] = null;
    $_SESSION["s_rol"] = null;
    $data=null;
}

print json_encode($data);
$conexion=null;

// Hay 4 roles establecidos
// 1: Administrador de sistema - Soporte
// 2: Pisolcogo (Lic- Nelson Ayala) - Psicologo
// 3: Administrador de recursos humaos - AdministradorRRHH
// 4: Empleados 

