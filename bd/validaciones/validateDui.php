<?php
include_once '../conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();
//Verificando si existe algun administrador en bd ya con dicha cedula asignada
//Preparamos un arreglo que es el que contendrá toda la información

$id = (isset($_POST['id'])) ? $_POST['id'] : '';
$dui = (isset($_POST['dui'])) ? $_POST['dui'] : '';
$jsonData = array();
//Consultado el dui
$consulta = "SELECT id, dui FROM users WHERE dui='$dui'";
$resultado = $conexion->prepare($consulta);
$resultado->execute();
$filas = $resultado->rowCount();
$duiresult = $resultado->fetchColumn(1);


if ($duiresult != $dui) {
    $jsonData['success'] = 0;
    // $jsonData['message'] = 'No existe Cédula ' .$cedula;
    $jsonData['message'] = '';
    $jsonData['valres'] = '(' . $duiresult . ')';
    $jsonData['val'] = '(' . $dui . ')';
} else {
    if ($filas >= 1) {
        $jsonData['success'] = 1;
        $jsonData['message'] = '<p  id="respuesta" style="color:red;">Ya existe el administrador con dui: <strong>(' . $dui . ')<strong></p> ';
        $jsonData['valres'] = '(' . $duiresult . ')';
        $jsonData['val'] = '(' . $dui . ')';
    } else {
        $jsonData['success'] = 0;
        // $jsonData['message'] = 'No existe Cédula ' .$cedula;
        $jsonData['message'] = '';
        $jsonData['valres'] = '(' . $duiresult . ')';
        $jsonData['val'] = '(' . $dui . ')';
    }
}

//Validamos que la consulta haya retornado información

//Mostrando mi respuesta en formato Json
header('Content-type: application/json; charset=utf-8');
echo json_encode($jsonData);
$conexion = null;
