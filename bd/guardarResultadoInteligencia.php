<?php
include_once '../bd/conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();
//Argumentos de las cansultas a capturar usando JSON y AJAX
$dui=$_SESSION["s_dui"];
$percentiles = (isset($_POST['percentiles'])) ? $_POST['percentiles'] : '';
$rango = (isset($_POST['rango'])) ? $_POST['rango'] : '';
$fechaEvaluacion = (isset($_POST['fechaEvaluacion'])) ? $_POST['fechaEvaluacion'] : '';

$opcion = 1;

$id_rol = 4; //Este sera el id_rol que identificara al rol de Empleado
switch ($opcion) {
    case 1:  //INSERTAR - INSERT
        $consulta = "INSERT INTO resultados_inteligencia (id_user, percentiles, rango) VALUES ('$dui', '$percentiles', '$rango') ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        //Deshabilitamos tambien la prueba de inteligencia para el empleado
        $deshabilitarPrueba = "UPDATE evaluaciones SET state_inteligencia='0' WHERE id_user='$dui' ";
        $resultadod = $conexion->prepare($deshabilitarPrueba);
        $resultadod->execute();
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
