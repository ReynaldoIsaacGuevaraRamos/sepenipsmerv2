<?php
include_once '../bd/conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();
//Argumentos de las cansultas a capturar usando JSON y AJAX

date_default_timezone_set('America/El_Salvador');    
$fechaHoraEvaluacion = date('Y-m-d h:i:s', time());  
$puntaje;
$resultado;
$respuestasCorrectas = (isset($_POST['respuestasCorrectas'])) ? $_POST['respuestasCorrectas'] : '';
$respuestasCorrectas=(int)$respuestasCorrectas;
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';

$usernameSesion;
if( isset($_COOKIE["idUsuarioSession"])){

    $usernameSesion = $_COOKIE["idUsuarioSession"];
}
$id_user = htmlspecialchars($usernameSesion);

$consulta = "SELECT fechaNacimiento	FROM users WHERE id='$id_user'";
$resultado = $conexion->prepare($consulta);
$resultado->execute();
$fecha_nacimiento = $resultado->fetchColumn(0);
$fecha_ahora = new DateTime(date("Y-m-d"));
$diferencia = $fecha_ahora->diff($fecha_nacimiento);
$edad= $diferencia->format("%y");
$edad=(int)$edad;

//Calculamos percentiles
$percentiles;

if($edad<=13){
    if($respuestasCorrectas<=9)
    {
        $percentiles=5;
    }
    elseif($respuestasCorrectas<=14)
    {
        $percentiles=10;
    }
    elseif($respuestasCorrectas<22)
    {
        $percentiles=20;
    }
    elseif($respuestasCorrectas==22)
    {
        $percentiles=25;
    }
    elseif($respuestasCorrectas<27)
    {
        $percentiles=40;
    }
    elseif($respuestasCorrectas<=14)
    {
        $percentiles=75;
    }
    elseif($respuestasCorrectas<=14)
    {
        $percentiles=90;
    }
}
elseif($edad<=15){

}
elseif($edad<=17){

}
else{

}


$id_rol = 4; //Este sera el id_rol que identificara al rol de Empleado
switch ($opcion) {
    case 1:  //INSERTAR - INSERT
        $consulta = "INSERT INTO resultados_inteligencia (id_user, puntaje, resultado, date) VALUES('$id_user', '$nombre', '$apellido', '$correo', '$cargo', '$telefono', '$sexo', '$fechaNacimiento', '$password',  '$id_rol') ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();

        $consulta = "SELECT * FROM users WHERE id_rol='$id_rol' ORDER BY id DESC LIMIT 1";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data = $resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 2://ACTUALIZAR - UPDATE
        $password = hash('ripemd160', $telefono); // Incriptación de la contraseña
        $consulta = "UPDATE users SET dui='$dui', nombre='$nombre', apellido='$apellido', correo='$correo', cargo='$cargo', telefono='$telefono', sexo='$sexo', fechaNacimiento='$fechaNacimiento', password='$password' WHERE id='$id' ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();

        $consulta = "SELECT * FROM users WHERE id='$id' AND id_rol='$id_rol' ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data = $resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 3:// BORRAR - DELETE
        $consulta = "DELETE FROM users WHERE id='$id' ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        break;
    case 4://LEER - CONSULTAR - READ
        $consulta = "SELECT * FROM users WHERE id_rol='$id_rol' ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data = $resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
}


print json_encode($data, JSON_UNESCAPED_UNICODE);
$conexion = null;
