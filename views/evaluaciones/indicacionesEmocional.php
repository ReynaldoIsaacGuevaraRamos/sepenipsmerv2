<?php
session_start();

if ($_SESSION["s_usuario"] === null) {
    header("Location: ../../index.php");
}

$rol_usuario = $_SESSION["s_rol"];
echo "<script>console.log( 'Debug Objects: " . $rol_usuario . "' );</script>";
?>
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <link href="../../css/mainEval.css" rel="stylesheet" type="text/css"/>
        <title>Emocional</title>
    </head>
    <body>
        <header class="site-header">
            <nav class="navbar navbar-expand-md navbar-dark bg-steel fixed-top">
                <div class="container">
                    <a class="navbar-brand mr-4" href="/">Emocional</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle"
                            aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarToggle">
                        <div class="navbar-nav mr-auto">

                        </div>
                        <!-- Navbar Right Side -->
                        <div class="navbar-nav" align="right">
                        <a class="nav-item nav-link" href="index.jsp">Salir</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <div  class="container mt-6 col-lg-6">

            <div class="card">
                <div class="card-body text-left">
                    <form name="myForm" method="post">
                        
                        <div class="mb-1">
                            <h2 style="text-align:center;">Bienvenido a la prueba emocional</h2> <br>
                            <img src="../../img/indi_emocional.jpg" class="card-img-top" alt="..." style="width:360px; display: block; margin: auto;" ><br>
                            <legend class="border-bottom bm-4">Indicaciones:</legend>
                            <label class="form-label">1. Lea detenidamente cada enunciado, no hay respuestas correctas o incorrectas, marque la respuesta que más se aproxime a sus preferencias.</label>
                            <label class="form-label">2. No puede retroceder a la pregunta anterior</label><br>
                            <label class="form-label">3. Dispone de 20 minutos para realizar la prueba</label>
                            <br><br>
                            <a class="btn btn-primary" href="../evaluaciones/emocional.php"" role="button" style="width:100%; height:40px;">Iniciar prueba</a>
                            <!-- TIME -->
                            <!-- <div id="quiz-timer" class="quiz-timer">
                                <div class="alert alert-success m-0 p-1">
                                    Tiempo 
                                    <strong id="testclock">36:00</strong>
                                </div>
                            </div> -->
                        </div>

        <!-- jQuery, Popper.js, Bootstrap JS -->
        <script src="../../assets/jquery/jquery-3.3.1.min.js"></script>
        <!--Preguntas de la prueba-->
        <script type="text/javascript" src="../questionEmocional.js"></script>
        <!--Importar JS del examen de prueba proyectiva-->
        <script type="text/javascript" src="../emocional2.js"></script>
        <!--Importar JS que controlara el cronometro de la evaluacion-->
        <script type="text/javascript" src="../cronometroTestInteligencia.js"></script>


        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script></body>

        <script language="JavaScript" type="text/javascript">
            
            window.onbeforeunload = preguntarAntesDeSalir;

            function preguntarAntesDeSalir()
            {
            if (true)
                return "¿Seguro que quieres salir?";
            }

        </script>
</html>

