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
                            <legend class="border-bottom bm-4">Indicaciones:</legend>
                            <label class="form-label">Lea detenidamente cada enunciado, no hay respuestas correctas o incorrectas, marque la respuesta que más se aproxime a sus preferencias:</label>

                        <!-- TIME -->
                        <div id="quiz-timer" class="quiz-timer">
                            <div class="alert alert-success m-0 p-1">
                                Tiempo 
                                <strong id="testclock">36:00</strong>
                            </div>
                        </div>
                        </div>
                        <div class="mb-1">
                            <legend id="leyendaIndice1" class="border-bottom bm-4">Pregunta 1 de 24</legend>
                            <label id="pregunta1" class="form-label">Presta mucha atención a los sentimientos.</label>

                        </div>
                        <div class="mb-3">
                            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check" name="btnradio1" id="btn1radio1" autocomplete="off">
                                <label class="btn btn-outline-primary" for="btn1radio1">Nada de acuerdo</label>

                                <input type="radio" class="btn-check" name="btnradio1" id="btn1radio2" autocomplete="off">
                                <label class="btn btn-outline-primary" for="btn1radio2">Algo de acuerdo</label>

                                <input type="radio" class="btn-check" name="btnradio1" id="btn1radio3" autocomplete="off">
                                <label class="btn btn-outline-primary" for="btn1radio3">Bastante de acuerdo</label>

                                <input type="radio" class="btn-check" name="btnradio1" id="btn1radio4" autocomplete="off">
                                <label class="btn btn-outline-primary" for="btn1radio4">Muy de acuerdo</label>

                                <input type="radio" class="btn-check" name="btnradio1" id="btn1radio5" autocomplete="off">
                                <label class="btn btn-outline-primary" for="btn1radio5">Totalmente de acuerdo</label>
                            </div>
                        </div>
                        
                        <div class="mb-1">
                            <legend id="leyendaIndice2" class="border-bottom bm-4">Pregunta 2 de 24</legend>
                            <label id="pregunta2" class="form-label">Normalmente me preocupo por lo que siento:</label>

                        </div>
                        <div class="mb-3">
                            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check" name="btnradio2" id="btn2radio1" autocomplete="off">
                                <label class="btn btn-outline-primary" for="btn2radio1">Nada de acuerdo</label>

                                <input type="radio" class="btn-check" name="btnradio2" id="btn2radio2" autocomplete="off">
                                <label class="btn btn-outline-primary" for="btn2radio2">Algo de acuerdo</label>

                                <input type="radio" class="btn-check" name="btnradio2" id="btn2radio3" autocomplete="off">
                                <label class="btn btn-outline-primary" for="btn2radio3">Bastante de acuerdo</label>

                                <input type="radio" class="btn-check" name="btnradio2" id="btn2radio4" autocomplete="off">
                                <label class="btn btn-outline-primary" for="btn2radio4">Muy de acuerdo</label>

                                <input type="radio" class="btn-check" name="btnradio2" id="btn2radio5" autocomplete="off">
                                <label class="btn btn-outline-primary" for="btn2radio5">Totalmente de acuerdo</label>
                            </div>
                        </div>
                        <div class="mb-1">
                            <legend id="leyendaIndice3" class="border-bottom bm-4">Pregunta 3 de 24</legend>
                            <label id="pregunta3" class="form-label">Normalmente dedico tiempo a pensar en mis emociones:</label>

                        </div>
                        <div class="mb-3">
                            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check" name="btnradio3" id="btn3radio1" autocomplete="off">
                                <label class="btn btn-outline-primary" for="btn3radio1">Nada de acuerdo</label>

                                <input type="radio" class="btn-check" name="btnradio3" id="btn3radio2" autocomplete="off">
                                <label class="btn btn-outline-primary" for="btn3radio2">Algo de acuerdo</label>

                                <input type="radio" class="btn-check" name="btnradio3" id="btn3radio3" autocomplete="off">
                                <label class="btn btn-outline-primary" for="btn3radio3">Bastante de acuerdo</label>

                                <input type="radio" class="btn-check" name="btnradio3" id="btn3radio4" autocomplete="off">
                                <label class="btn btn-outline-primary" for="btn3radio4">Muy de acuerdo</label>

                                <input type="radio" class="btn-check" name="btnradio3" id="btn3radio5" autocomplete="off">
                                <label class="btn btn-outline-primary" for="btn3radio5">Totalmente de acuerdo</label>
                            </div>
                        </div>
                        <div class="mb-1">
                            <legend id="leyendaIndice4" class="border-bottom bm-4">Pregunta 4 de 24</legend>
                            <label id="pregunta4" class="form-label">Pienso que merece la pena prestar atención a mis emociones:</label>

                        </div>
                        <div class="mb-3">
                            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check" name="btnradio4" id="btn4radio1" autocomplete="off">
                                <label class="btn btn-outline-primary" for="btn4radio1">Nada de acuerdo</label>

                                <input type="radio" class="btn-check" name="btnradio4" id="btn4radio2" autocomplete="off">
                                <label class="btn btn-outline-primary" for="btn4radio2">Algo de acuerdo</label>

                                <input type="radio" class="btn-check" name="btnradio4" id="btn4radio3" autocomplete="off">
                                <label class="btn btn-outline-primary" for="btn4radio3">Bastante de acuerdo</label>

                                <input type="radio" class="btn-check" name="btnradio4" id="btn4radio4" autocomplete="off">
                                <label class="btn btn-outline-primary" for="btn4radio4">Muy de acuerdo</label>

                                <input type="radio" class="btn-check" name="btnradio4" id="btn4radio5" autocomplete="off">
                                <label class="btn btn-outline-primary" for="btn4radio5">Totalmente de acuerdo</label>
                            </div>
                        </div>
                        
                        <!-- <div class="mb-3">
                            <input  type="submit" name="action" value="Siguiente" class="btn btn-outline-info">
                            <a href="index.jsp">return </a>
                        </div> -->
                        <!--input id="btnTerminar" class="btn btn-primary" type="submit" value="Siguiente" onClick="submitRadioButton()"-->
                        <button id='btnSiguiente' type="button" class="btn btn-primary">Siguiente</button>
                        <input id="btnTerminar" class="btn btn-primary" type="submit" value="Terminar">

                    </form>    

                </div>
            </div>
        </div>


        <!-- jQuery, Popper.js, Bootstrap JS -->
        <script src="../../assets/jquery/jquery-3.3.1.min.js"></script>
        <!--Importar JS del examen de prueba proyectiva-->
        <script type="text/javascript" src="../emocional.js"></script>
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

