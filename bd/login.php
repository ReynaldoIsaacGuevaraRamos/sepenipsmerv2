<?php
session_start();

include_once 'conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

//recepción de datos enviados mediante POST desde ajax
$usuario = (isset($_POST['usuario'])) ? $_POST['usuario'] : '';
$password = (isset($_POST['password'])) ? $_POST['password'] : '';

$pass = hash('ripemd160', $password); //encripto la clave enviada por el usuario para compararla con la clava encriptada y almacenada en la BD
$consulta = "SELECT correo, password, nombre, id_rol, id, dui FROM users WHERE correo='$usuario' AND password='$pass' ";
$resultado = $conexion->prepare($consulta);
$resultado->execute();
$rol = $resultado->fetchColumn(3);
$resultado->execute();
$nombreUser = $resultado->fetchColumn(2);

//Obtenemos el DUI del Usuario
$resultado->execute();
$DuiUsuario = $resultado->fetchColumn(5);

$consulta = "SELECT correo, password, nombre, id_rol, sexo FROM users WHERE correo='$usuario' AND password='$pass' ";
$resultado = $conexion->prepare($consulta);
$resultado->execute();
$fila = $resultado->fetchAll();
print_r ("HOLA");
if($resultado->rowCount() >= 1){
    $data = $resultado->fetchAll(PDO::FETCH_ASSOC);
    $_SESSION["s_usuario"] = $fila[0][2];
    $_SESSION["s_rol"] = $fila[0][3];
    $_SESSION["s_sexo"] = $fila[0][4];
    $_SESSION["s_dui"] = $DuiUsuario;
    $_SESSION["s_usu"] = $usuario;
}else{
    $_SESSION["s_usuario"] = null;
    $_SESSION["s_rol"] = null;
    $_SESSION["s_sexo"] = null;
    $_SESSION["s_dui"] = $DuiUsuario;
    $_SESSION["s_usu"] = $usuario;
    $data=null;
}



print json_encode($data);
$conexion=null;

// Hay 4 roles establecidos
// 1: Administrador de sistema - Soporte
// 2: Pisolcogo (Lic- Nelson Ayala) - Psicologo
// 3: Administrador de recursos humaos - AdministradorRRHH
// 4: Empleados
