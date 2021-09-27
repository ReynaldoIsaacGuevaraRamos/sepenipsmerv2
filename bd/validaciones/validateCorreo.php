<?php
include_once '../conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();
//Verificando si existe algun administrador en bd ya con dicha cedula asignada
//Preparamos un arreglo que es el que contendrá toda la información
$id = (isset($_POST['id'])) ? $_POST['id'] : '';
$correo = (isset($_POST['correo'])) ? $_POST['correo'] : '';
$opcionVal = (isset($_POST['opcionVal'])) ? $_POST['opcionVal'] : '';
$jsonData = array();
//Consultando correo
$consulta = "SELECT id, correo FROM users WHERE correo='$correo'";
$resultado = $conexion->prepare($consulta);
$resultado->execute();
$filas = $resultado->rowCount();


        if ($filas <= 0) {
            $jsonData['success'] = 0; //No existe el registro con corrreo
            $jsonData['message'] = '';
        } else {
            $jsonData['success'] = 1; //Si existe el registro con correo
            $jsonData['message'] = '<p id="respuesta" style="color:red;">Ya existe el administrador con correo: <strong>(' . $correo . ')<strong></p> ';
        }

//Mostrando mi respuesta en formato Json
header('Content-type: application/json; charset=utf-8');
echo json_encode($jsonData);
$conexion = null;
