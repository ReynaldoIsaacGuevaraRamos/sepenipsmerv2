<?php
include_once '../bd/conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();
//Argumentos de las cansultas a capturar usando JSON y AJAX
$dui = (isset($_POST['dui'])) ? $_POST['dui'] : '';
$nombre = (isset($_POST['nombre'])) ? $_POST['nombre'] : '';
$apellido = (isset($_POST['apellido'])) ? $_POST['apellido'] : '';
$correo = (isset($_POST['correo'])) ? $_POST['correo'] : '';
$cargo = (isset($_POST['cargo'])) ? $_POST['cargo'] : '';
$telefono = (isset($_POST['telefono'])) ? $_POST['telefono'] : '';
$sexo = (isset($_POST['sexo'])) ? $_POST['sexo'] : '';
$fechaNacimiento = (isset($_POST['fechaNacimiento'])) ? $_POST['fechaNacimiento'] : '';
$password = (isset($_POST['password'])) ? $_POST['password'] : '';
$duiAntiguo = (isset($_POST['duiAntiguo'])) ? $_POST['duiAntiguo'] : '';

$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';

$id = (isset($_POST['id'])) ? $_POST['id'] : '';

$id_rol = 4; //Este sera el id_rol que identificara al rol de Empleado
switch ($opcion) {
    case 1:  //INSERTAR - INSERT
        $password = hash('ripemd160', $telefono); // Incriptación de la contraseña
        $consulta = "INSERT INTO users (dui, nombre, apellido, correo, cargo, telefono, sexo, fechaNacimiento, password, id_rol) VALUES('$dui', '$nombre', '$apellido', '$correo', '$cargo', '$telefono', '$sexo', '$fechaNacimiento', '$password',  '$id_rol') ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        //Se agrega expediente de empleado en evaluaciones
        $consultaEvaluaciones = "INSERT INTO evaluaciones (id_user) VALUES('$dui') ";
        $resultadoEvaluaciones = $conexion->prepare($consultaEvaluaciones);
        $resultadoEvaluaciones->execute();

        $consulta = "SELECT * FROM users WHERE id_rol='$id_rol' ORDER BY id DESC LIMIT 1";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data = $resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 2://ACTUALIZAR - UPDATE
        //Se borra expediente en evaluaciones
        $consultaEvaluaciones = "DELETE FROM evaluaciones WHERE id_user='$duiAntiguo' ";
        $resultadoEvaluaciones = $conexion->prepare($consultaEvaluaciones);
        $resultadoEvaluaciones->execute();
        //Se actualiza el empleado
        $password = hash('ripemd160', $telefono); // Incriptación de la contraseña
        $consulta = "UPDATE users SET dui='$dui', nombre='$nombre', apellido='$apellido', correo='$correo', cargo='$cargo', telefono='$telefono', sexo='$sexo', fechaNacimiento='$fechaNacimiento', password='$password' WHERE id='$id' ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        //Se agrega expediente de empleado en evaluaciones ya actualizado
        $consultaEvaluaciones = "INSERT INTO evaluaciones (id_user) VALUES('$dui') ";
        $resultadoEvaluaciones = $conexion->prepare($consultaEvaluaciones);
        $resultadoEvaluaciones->execute();

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
