<?php
session_start();
include_once '../bd/conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();
//Argumentos de las cansultas a capturar usando JSON y AJAX
$r1 = (isset($_POST['r1'])) ? $_POST['r1'] : '';
$r2 = (isset($_POST['r2'])) ? $_POST['r2'] : '';
$r3 = (isset($_POST['r3'])) ? $_POST['r3'] : '';
$r4 = (isset($_POST['r4'])) ? $_POST['r4'] : '';
$r5 = (isset($_POST['r5'])) ? $_POST['r5'] : '';
$r6 = (isset($_POST['r6'])) ? $_POST['r6'] : '';
$r7 = (isset($_POST['r7'])) ? $_POST['r7'] : '';
$r8 = (isset($_POST['r8'])) ? $_POST['r8'] : '';

$correo = $_SESSION["s_usu"];

$diagnotico1 = '';
$diagnotico2 = '';
$diagnotico3 = '';
$diagnotico4 = '';
$diagnotico5 = '';
$diagnotico6 = '';
$diagnotico7 = '';
$diagnotico8 = '';

if($r1 == "AZUL"){
    $diagnotico1 = "Deseo de armodia";
}elseif($r1 == "ROJO"){
    $diagnotico1 = "Deseo de actividad";
}elseif($r1 == "VERDE"){
    $diagnotico1 = "Deseo de autoafirmacion";
}elseif($r1 == "AMARILLO"){
    $diagnotico1 = "Optimismo";
}elseif($r1 == "NEGRO"){
    $diagnotico1 = "Deseo de agresividad y enfrentamiento";
}elseif($r1 == "VIOLETA"){
    $diagnotico1 = "Vanidad";
}elseif($r1 == "MARRON"){
    $diagnotico1 = "Deseo de satisfaccio de necesidades corporales";
}elseif($r1 == "GRIS"){
    $diagnotico1 = "Deseo de Neutralidad";
}

if($r2 == "AZUL"){
    $diagnotico2 = "Deseo de armodia";
}elseif($r2 == "ROJO"){
    $diagnotico2 = "Deseo de actividad";
}elseif($r2 == "VERDE"){
    $diagnotico2 = "Deseo de autoafirmacion";
}elseif($r2 == "AMARILLO"){
    $diagnotico2 = "Optimismo";
}elseif($r2 == "NEGRO"){
    $diagnotico2 = "Deseo de agresividad y enfrentamiento";
}elseif($r2 == "VIOLETA"){
    $diagnotico2 = "Vanidad";
}elseif($r2 == "MARRON"){
    $diagnotico2 = "Deseo de satisfaccio de necesidades corporales";
}elseif($r2 == "GRIS"){
    $diagnotico2 = "Deseo de Neutralidad";
}

if($r3 == "AZUL"){
    $diagnotico3 = "Armonia alcanzada";
}elseif($r3 == "ROJO"){
    $diagnotico3 = "Actividad efectivad";
}elseif($r3 == "VERDE"){
    $diagnotico3 = "Autoafirmacion lograda";
}elseif($r3 == "AMARILLO"){
    $diagnotico3 = "";
}elseif($r3 == "NEGRO"){
    $diagnotico3 = "Agresividad ejercida";
}elseif($r3 == "VIOLETA"){
    $diagnotico3 = "Sensibilidad";
}elseif($r3 == "MARRON"){
    $diagnotico3 = "Necesidades corporales satisfechas";
}elseif($r3 == "GRIS"){
    $diagnotico3 = "Neutralidad alcanzada";
}

if($r5 == "AZUL"){
    $diagnotico5 = "Imposibilidad de alcanzar la armonia en el momento actual";
}elseif($r5 == "ROJO"){
    $diagnotico5 = "Actividad frenada";
}elseif($r5 == "VERDE"){
    $diagnotico5 = "Necesidad de adaptarse";
}elseif($r5 == "AMARILLO"){
    $diagnotico5 = "";
}elseif($r5 == "NEGRO"){
    $diagnotico5 = "Agresion reprimida";
}elseif($r5 == "VIOLETA"){
    $diagnotico5 = "Capacidad empatica";
}elseif($r5 == "MARRON"){
    $diagnotico5 = "Necesidades corporales reprimidas";
}elseif($r5 == "GRIS"){
    $diagnotico5 = "Deseo de neutralidad reprimida";
}

if($r6 == "AZUL"){
    $diagnotico6 = "Imposibilidad de alcanzar la armonia en el momento actual";
}elseif($r6 == "ROJO"){
    $diagnotico6 = "Actividad frenada";
}elseif($r6 == "VERDE"){
    $diagnotico6 = "Necesidad de adaptarse";
}elseif($r6 == "AMARILLO"){
    $diagnotico6 = "";
}elseif($r6 == "NEGRO"){
    $diagnotico6 = "Agresion reprimida";
}elseif($r6 == "VIOLETA"){
    $diagnotico6 = "Capacidad empatica";
}elseif($r6 == "MARRON"){
    $diagnotico6 = "Necesidades corporales reprimidas";
}elseif($r6 == "GRIS"){
    $diagnotico6 = "Deseo de neutralidad reprimida";
}

if($r7 == "AZUL"){
    $diagnotico7 = "Deseo de armonia reprimido";
}elseif($r7 == "ROJO"){
    $diagnotico7 = "Rechazo de la actividad";
}elseif($r7 == "VERDE"){
    $diagnotico7 = "Dependencia";
}elseif($r7 == "AMARILLO"){
    $diagnotico7 = "Miedo a las decepciones";
}elseif($r7 == "NEGRO"){
    $diagnotico7 = "Rechazo de la agresion";
}elseif($r7 == "VIOLETA"){
    $diagnotico7 = "Escasa capacidad empatica";
}elseif($r7 == "MARRON"){
    $diagnotico7 = "Rechazo de las Necesidades corporales";
}elseif($r7 == "GRIS"){
    $diagnotico7 = "Rechazo a la neutralidad";
}

$data = $diagnotico1.", ".$diagnotico2.", ".$diagnotico3.", ".$diagnotico4.", ".$diagnotico5.", ".$diagnotico6.", ".$diagnotico7.", ".$diagnotico8.".";

        //$password = hash('ripemd160', $password); // Incriptación de la contraseña
        //$consulta = "INSERT INTO resultados_proyectiva (resultado ) VALUES('$resultadoFinal') ";
        //$resultado = $conexion->prepare($consulta);
        //$resultado->execute();

        //$consulta = "SELECT * FROM users WHERE id_rol='$id_rol' ORDER BY id DESC LIMIT 1";
        //$resultado = $conexion->prepare($consulta);
        //$resultado->execute();
        //$data = $resultado->fetchAll(PDO::FETCH_ASSOC);


print json_encode($data);
$conexion = null;
