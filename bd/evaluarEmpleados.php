<?php
include_once '../bd/conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();
//Argumentos de las cansultas a capturar usando JSON y AJAX
$dui = (isset($_POST['dui'])) ? $_POST['dui'] : '';
$valorEvaluacion = (isset($_POST['valorEvaluacion'])) ? $_POST['valorEvaluacion'] : '';
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';

$id_rol = 4; //Este sera el id_rol que identificara al rol de Empleado
switch ($opcion) {
    case 1:  //INSERTAR - INSERT
        $password = hash('ripemd160', $telefono); // Incriptación de la contraseña
        $consulta = "INSERT INTO users (dui, nombre, apellido, correo, cargo, telefono, sexo, fechaNacimiento, password, id_rol) VALUES('$dui', '$nombre', '$apellido', '$correo', '$cargo', '$telefono', '$sexo', '$fechaNacimiento', '$password',  '$id_rol') ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();

        $consulta = "SELECT * FROM users WHERE id_rol='$id_rol' ORDER BY id DESC LIMIT 1";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data = $resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 2://HABILITAR - DESHABILITAR PRUEBA DE INTELIGENCIA
        $consulta = "UPDATE evaluaciones SET state_inteligencia='$valorEvaluacion' WHERE id_user='$dui' ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        break;
    case 3://HABILITAR - DESHABILITAR PRUEBA DE PERSONALIDAD
        $consulta = "UPDATE evaluaciones SET state_personalidad='$valorEvaluacion' WHERE id_user='$dui' ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        break;
    case 4://HABILITAR - DESHABILITAR PRUEBA PROYECTIVA
        $consulta = "UPDATE evaluaciones SET state_proyectiva='$valorEvaluacion' WHERE id_user='$dui' ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        break;
    case 5://HABILITAR - DESHABILITAR PRUEBA EMOCIONAL
        $consulta = "UPDATE evaluaciones SET state_emocional='$valorEvaluacion' WHERE id_user='$dui' ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        break;
    case 6:// BORRAR - DELETE
        $consulta = "DELETE FROM users WHERE id='$id' ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        break;
    case 7://LEER - CONSULTAR - READ
        $consulta = "SELECT * FROM evaluaciones WHERE id_rol='$id_rol' ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data = $resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
}


print json_encode($data, JSON_UNESCAPED_UNICODE);
$conexion = null;
