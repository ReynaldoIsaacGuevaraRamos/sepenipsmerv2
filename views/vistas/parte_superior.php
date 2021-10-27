<?php
session_start();

if ($_SESSION["s_usuario"] === null) {
    header("Location: ../index.php");
}

$rol_usuario = $_SESSION["s_rol"];
$rol_sexo = $_SESSION["s_sexo"];
echo "<script>console.log( 'rol" . $rol_usuario . "' );</script>";
echo "<script>console.log( 'Sexo: " . $rol_sexo  . "' );</script>";

if($rol_usuario==4){

    //Cada vez que el empleado recargue el sistema de evaluaciones se verificarán los permisos para realizar las pruebas

    //Se borran los cookies ya existentes
    if(isset($_COOKIE['state_inteligencia'])){
        setcookie( 'state_inteligencia', "", time()- 60, "/","", 0);
    }
    if(isset($_COOKIE['state_personalidad'])){
        setcookie( 'state_personalidad', "", time()- 60, "/","", 0);
    }
    if(isset($_COOKIE['state_proyectiva'])){
        setcookie( 'state_proyectiva', "", time()- 60, "/","", 0);
    }
    if(isset($_COOKIE['state_emocional'])){
        setcookie( 'state_emocional', "", time()- 60, "/","", 0);
    }

    //Se obtiene el DUI del empleado
    $DuiUsuarioSession=$_SESSION["s_dui"];

    //Se verifica si el usuario tiene alguna evaluacion habilitada
    include_once '../bd/conexion.php';
    $objeto = new Conexion();
    $conexion = $objeto->Conectar();
    $consultaEvaluaciones = "SELECT state_inteligencia, state_personalidad, state_proyectiva, state_emocional FROM evaluaciones WHERE id_user='$DuiUsuarioSession'";
    $resultadoEvaluaciones = $conexion->prepare($consultaEvaluaciones);
    $resultadoEvaluaciones->execute();
    $state_inteligencia = $resultadoEvaluaciones->fetchColumn(0);
    $resultadoEvaluaciones->execute();
    $state_personalidad=$resultadoEvaluaciones->fetchColumn(1);
    $resultadoEvaluaciones->execute();
    $state_proyectiva=$resultadoEvaluaciones->fetchColumn(2);
    $resultadoEvaluaciones->execute();
    $state_emocional=$resultadoEvaluaciones->fetchColumn(3);

    if($state_inteligencia==1){
        setcookie("state_inteligencia", $state_inteligencia,time()+3600, "/","", 0);
    }
    if($state_personalidad==1){
        setcookie("state_personalidad", $state_personalidad,time()+3600, "/","", 0);
    }
    if($state_proyectiva==1){
        setcookie("state_proyectiva", $state_proyectiva,time()+3600, "/","", 0);
    }
    if($state_emocional==1){
        setcookie("state_emocional", $state_emocional,time()+3600, "/","", 0);
    }
}
?>

<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv=”Content-Type” content=”text/html; charset=iso-8859-2″>
    <link rel="shortcut icon" href="#" />
    <meta name="description" content="">
    <meta name="author" content="">
    <title>SEPENIPSMER</title>
    <link rel="icon" href="../img/logo.ico">
    <!-- Custom fonts for this template-->
    <link href="../assets/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="../css/sb-admin-2.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" type="text/css" href="../assets/bootstrap/css/bootstrap.min.css">
    <!-- CSS personalizado-->
    <link rel="stylesheet" type="text/css" href="../css/main.css">


    <!--datables CSS básico-->
    <link rel="stylesheet" type="text/css" href="../assets/datatables/datatables.min.css" />

    <!--datables estilo bootstrap 4 CSS-->
    <link rel="stylesheet" type="text/css" href="../assets/datatables/DataTables-1.10.18/css/dataTables.bootstrap4.min.css">

</head>

<body id="page-top">
    <div id="wrapper">
        <!-- Sidebar -->
        <ul class="navbar-nav bg-gradient-success sidebar sidebar-dark accordion" id="accordionSidebar">
            <!-- Sidebar - Brand -->
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                <div class="sidebar-brand-icon">
                    <i class="fas fa-fw fa-brain"></i>
                </div>
                <div class="sidebar-brand-text mx-3">SEPENIPSMER </div>
            </a>
            <!-- Divider -->
            <hr class="sidebar-divider my-0">

            <!-- Nav Item - Vista de acceso publico -->
            <li class="nav-item active">
                <a class="nav-link" href="home.php">
                    <i class="fas fa-fw fa-home"></i>
                    <span>Inicio</span></a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="perfil.php">
                    <i class="fas fa-fw fa-address-card"></i>
                    <span>Perfil</span></a>
            </li>
            <!-- Nav Item - Vista del administrador  del sistema o soporte de sistema-->
            <?php
            if ($_SESSION["s_rol"] == 1) { //Si es soporte
            ?>
                <li class="nav-item active">
                    <a class="nav-link" href="usuarios.php">
                        <i class="fas fa-fw fa-users-cog"></i>
                        <span>Usuarios</span></a>
                </li>
            <?php  } ?>
            <!-- Nav Item - Vista del psicolgo -->
            <?php
            if ($rol_usuario == 2 || $rol_usuario == 1) { //Si es  psicologo o soporte
            ?>
                <li class="nav-item active">
                    <a class="nav-link" href="administrador.php">
                        <i class="fas fa-fw fa-user-tie"></i>
                        <span>Administradores</span></a>
                </li>
            <?php  } ?>

            <!-- Nav Item - Vista del administrador de recursos humanos -->
            <?php
            if ($rol_usuario == 3 || $rol_usuario == 1) { //Si es administrdor o soporte
            ?>
                <li class="nav-item active">
                    <a class="nav-link" href="empleados.php">
                        <i class="fas fa-fw fa-users"></i>
                        <span>Empleados</span></a>
                </li>
            <?php  } ?>
            <?php
            if ($rol_usuario == 2 || $rol_usuario == 1) { //Si es psicologo o soporte
            ?>
                <!-- Nav Item - Vista del administrador de recursos humanos -->
                <li class="nav-item active">
                    <a class="nav-link" href="evaluar.php">
                        <i class="fas fa-fw fa-book-reader"></i>
                        <span>Evaluar</span></a>
                </li>
            <?php  } ?>
            <!-- Nav Item - Vista del empleado -->
            <?php
            if ($rol_usuario == 4 || $rol_usuario == 1) { //Si es empleado o soporte
            ?>
                <li class="nav-item active">
                    <a class="nav-link" href="evaluaciones.php">
                        <i class="fas fa-fw fa-book-open"></i>
                        <span>Evaluaciones</span></a>
                </li>
            <?php  } ?>
            <li class="nav-item active">
                    <a class="nav-link" href="Cambio.php">
                        <i class="fas fa-fw fa-cog"></i>
                        <span>Cambiar Contrasena</span></a>
                </li>
            <!-- Divider -->
            <?php
            if ($rol_usuario == 3 || $rol_usuario == 2 || $rol_usuario == 1) { //Si es administrador, psicologo o soporte
            ?>
                <hr class="sidebar-divider">

                <!-- Heading -->
                <div class="sidebar-heading">
                    Ver
                </div>

                <!-- Nav Item - Pages Collapse Menu -->
                <li class="nav-item">
                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        <i class="fas fa-fw fa-poll-h"></i>
                        <span>Mediciones</span>
                    </a>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">RESULTADOS</h6>
                            <a class="collapse-item" href="generales.php">Generales</a>
                            <?php
                            if ($rol_usuario == 2 || $rol_usuario == 1) { //Si es administrador, psicologo o soporte
                            ?>
                                <a class="collapse-item" href="especificos.php">Especificos</a>
                            <?php  } ?>
                        </div>
                    </div>
                </li>




                <!-- Divider -->
                <hr class="sidebar-divider d-none d-md-block">

                <!-- Sidebar Toggler (Sidebar) -->
                <div class="text-center d-none d-md-inline">
                    <button class="rounded-circle border-0" id="sidebarToggle"></button>
                </div>
            <?php  } ?>
        </ul>
        <!-- End of Sidebar -->

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    <!-- Sidebar Toggle (Topbar) -->
                    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                        <i class="fa fa-bars"></i>
                    </button>



                    <!-- Topbar Navbar -->
                    <ul class="navbar-nav ml-auto">

                        <!-- Nav Item - Search Dropdown (Visible Only XS) -->
                        <li class="nav-item dropdown no-arrow d-sm-none">
                            <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-search fa-fw"></i>
                            </a>
                            <!-- Dropdown - Messages -->
                            <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                                <form class="form-inline mr-auto w-100 navbar-search">
                                    <div class="input-group">
                                        <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2">
                                        <div class="input-group-append">
                                            <button class="btn btn-primary" type="button">
                                                <i class="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>

                        <div class="topbar-divider d-none d-sm-block"></div>

                        <!-- Nav Item - User Information -->
                        <li class="nav-item dropdown no-arrow">
                            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="mr-2 d-none d-lg-inline text-gray-600 small"><?php echo $_SESSION["s_usuario"]; ?></span>
                                <!--                <img class="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60">-->
                                <img class="img-profile rounded-circle" src="../img/user.png">
                            </a>
                            <!-- Dropdown - User Information -->
                            <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">

                                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Cerrar Sesión
                                </a>
                            </div>
                        </li>

                    </ul>

                </nav>
                <!-- End of Topbar -->
