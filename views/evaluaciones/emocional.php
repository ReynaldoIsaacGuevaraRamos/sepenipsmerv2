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
                        <a class="nav-item nav-link" href="../evaluaciones.php">Salir</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <div  class="container mt-6 col-lg-6">

            <div class="card">
                <div class="card-body text-left">
                    <form name="myForm" method="post">
                        
                        
                        <!-- Question 1 -->
                        <div id="quizContainer" class="container">
                        <form method="POST" id="form">
                            <div class="mb-1">
                                <legend id="pre" class="border-bottom bm-4">Pregunta 1 de 24</legend>
                                <div class="mb-1">
                            <!-- TIME -->
                            <div id="quiz-timer" class="quiz-timer">
                                <div class="alert alert-success m-0 p-1">
                                    Tiempo 
                                    <strong id="testclock">20:00</strong>
                                </div>
                            </div>
                        </div>

                                <label id="question" class="form-label">Presta mucha atención a los sentimientos.</label>
                            </div>
                            <div class="mover">
                                
                            <div class="mb-3">
                                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" value="1" class="btn-check" name="btnradio1" id="pregA" autocomplete="off">
                                <label id="option" class="btn btn-outline-primary" for="pregA">Nada de acuerdo</label>

                                <input type="radio" value="2" class="btn-check" name="btnradio1" id="pregB" autocomplete="off">
                                <label id="option" class="btn btn-outline-primary" for="pregB">Algo de acuerdo</label>

                                <input type="radio" value="3" class="btn-check" name="btnradio1" id="pregC" autocomplete="off">
                                <label id="option" class="btn btn-outline-primary" for="pregC">Bastante de acuerdo</label>

                                <input type="radio" value="4" class="btn-check" name="btnradio1" id="pregD" autocomplete="off">
                                <label id="option" class="btn btn-outline-primary" for="pregD">Muy de acuerdo</label>

                                <input type="radio" value="5" class="btn-check" name="btnradio1" id="pregE" autocomplete="off">
                                <label id="option" class="btn btn-outline-primary" for="pregE">Totalmente de acuerdo</label>
                                </div>
                            </div><br>
                            
                            </div>
                            <button id='nextButton' type="button" class="btn btn-primary" onclick="loadNextQuestion();" style="width:100%; height:50px;">Siguiente</button>
                        </form>
                        </div>

                        <!-- RESULTADO FINAL -->
                        <div id="result" class="container result" style="display: none;" >
                            <legend class="border-bottom bm-4" style="text-align:center;">Prueba finalizada</legend>
                            <label  class="form-label" style="text-align:center; ">Su resultado es: Dominio moderado de sus emociones</label><br><br>
                            <!-- <label  class="form-label" style="text-align:center; ">Su resultado es: <?php echo $resultado?></label><br><br> -->
                            <img src="../../img/emocional-resultado.jpg" class="card-img-top" alt="..." style="width:380px; display: block; margin: auto;"><br>
                            <a class="btn btn-primary" href="../evaluaciones.php"" role="button" style="width:100%; height:40px;">Aceptar</a><br>
                        </div>


                        <!--input id="btnTerminar" class="btn btn-primary" type="submit" value="Siguiente" onClick="submitRadioButton()"-->     
                        <!--input id="btnTerminar" class="btn btn-primary" type="submit" value="Terminar"-->

                    </form>    

                </div>
            </div>
        </div>


        <!-- jQuery, Popper.js, Bootstrap JS -->
        <script src="../../assets/jquery/jquery-3.3.1.min.js"></script>
        <!--Preguntas de la prueba-->
        <script type="text/javascript" src="../questionEmocional.js"></script>
        <!--Importar JS del examen de prueba proyectiva-->
        <script type="text/javascript" src="../emocional.js"></script>
        <!--Importar JS que controlara el cronometro de la evaluacion-->
        <script type="text/javascript" src="../cronoTestEmocional.js"></script>


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

