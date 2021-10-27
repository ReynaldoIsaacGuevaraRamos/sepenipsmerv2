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


$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';

$id = (isset($_POST['id'])) ? $_POST['id'] : '';
// Se excluyen los 3 usuarios, ya que solo se someteran a evaluaciones los empleados
$id_rol_soporte = 1;
$id_rol_psicologo = 2;
$id_rol_administrador = 3;
switch ($opcion) {
    case 1: //La opcion 1: Evaluar miembro empleados
        
        break;
    case 2: // Cancelar Evaluación de empleados
   
        break;
    case 3: 
        $consulta = "DELETE FROM users WHERE id='$id' ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        break;
    case 4:
            //Consultar los empleados
        $consulta = "SELECT users.id, users.dui, users.nombre, users.apellido, users.cargo, evaluaciones.state_inteligencia, evaluaciones.state_personalidad, evaluaciones.state_proyectiva, evaluaciones.state_emocional FROM users INNER JOIN evaluaciones ON users.dui = evaluaciones.id_user WHERE users.id_rol!='$id_rol_soporte' AND users.id_rol!='$id_rol_psicologo' AND users.id_rol!='$id_rol_administrador' ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data = $resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
}


print json_encode($data, JSON_UNESCAPED_UNICODE);
$conexion = null;
