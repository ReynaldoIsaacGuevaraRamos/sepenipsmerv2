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
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link href="../../css/mainEval.css" rel="stylesheet" type="text/css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
        <script   src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
        <title>Inteligencia</title>
    </head>
    <body>
        <header class="site-header">
            <nav class="navbar navbar-expand-md navbar-dark bg-steel fixed-top">
                <div class="container">
                    <a class="navbar-brand mr-4" href="/">Prueba de Inteligencia</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle"
                            aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarToggle">
                        <div class="navbar-nav mr-auto">

                        </div>
                        <!-- Navbar Right Side  -->
                        <div class="navbar-nav">
                            <a class="nav-item nav-link" onclick="window.close();" href="#">Salir</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <div  class="container mt-5 col-lg-5">
            <div class="card">
                <div class="card-body text-center">
                    <form id="formularioEvaluacionInteligencia">
                        <div class="form-group">
                            <div class="quiz">
                                <div class="quiz-user">
                                    <legend id="leyendaIndice" class="border-bottom bm-4">Pregunta 1 de 48</legend>
                                </div>
                                <div id="quiz-timer" class="quiz-timer">
                                    <div class="alert alert-success m-0 p-1">
                                        Tiempo 
                                        <strong id="testclock">36:00</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group" style="margin-bottom: 0px;">
                            <label>¿Que combinación sigue?</label>
                        </div>
                        <div id="imagenPregunta" class="form-group" style="margin-bottom: 0px;">
                            <img src="../../img/evaluacionInteligencia/1.gif" width="225" height="225" />
                        </div>
                        <!-- Dado que mostrara la respuesta elegida  -->
                        <div class="form-group">
                            <div class="row">
                                <div id="caraSuperiorDado" class="col">
                                    <img src = "../../img/evaluacionInteligencia/iconos/question-square.svg" width="35" height="35"/>
                                </div>
                                <div class="w-100"></div>
                                <div id="caraInferiorDado" class="col">
                                    <img src = "../../img/evaluacionInteligencia/iconos/question-square.svg"  alt="Cinque Terre" width="35" height="35"/>
                                </div>
                            </div>
                        </div>

                        <!-- Grupo de botones para elegir cara superior de dado  -->
                        <div class="form-group" style="margin-bottom: 0px;">
                            <div id="dadoSuperior" class="btn-group mb-3">
                                <button id='0s' value="0" type="button" class="btn btn-outline-secondary">
                                    <img src = "../../img/evaluacionInteligencia/iconos/dice-0.svg" alt="dado cara 0"/>
                                </button>
                                <button id='1s' value="1" type="button" class="btn btn-outline-secondary">
                                    <img src = "../../img/evaluacionInteligencia/iconos/dice-1.svg" alt="dado cara 1"/>
                                </button>
                                <button id='2s' value="2" type="button" class="btn btn-outline-secondary">
                                    <img src = "../../img/evaluacionInteligencia/iconos/dice-2.svg" alt="dado cara 2" style="transform:rotate(90deg);"/>
                                </button>
                                <button id='3s' value="3" type="button" class="btn btn-outline-secondary">
                                    <img src = "../../img/evaluacionInteligencia/iconos/dice-3.svg" alt="dado cara 3" style="transform:rotate(90deg);"/>
                                </button>
                                <button id='4s' value="4" type="button" class="btn btn-outline-secondary">
                                    <img src = "../../img/evaluacionInteligencia/iconos/dice-4.svg" alt="dado cara 4"/>
                                </button>
                                <button id='5s' value="5" type="button" class="btn btn-outline-secondary">
                                    <img src = "../../img/evaluacionInteligencia/iconos/dice-5.svg" alt="dado cara 5"/>
                                </button>
                                <button id='6s' value="6" type="button" class="btn btn-outline-secondary">
                                    <img src = "../../img/evaluacionInteligencia/iconos/dice-6.svg" alt="dado cara 6"/>
                                </button>
                            </div>
                        </div>

                        <!-- Grupo de botones para elegir cara inferior de dado  -->
                        <div class="form-group" style="margin-bottom: 0px;">
                            <div id="dadoInferior" class="btn-group mb-3">
                                <button id='0i' value="0" type="button" class="btn btn-outline-secondary">
                                    <img src = "../../img/evaluacionInteligencia/iconos/dice-0.svg" alt="dado cara 0"/>
                                </button>
                                <button id='1i' value="1" type="button" class="btn btn-outline-secondary">
                                    <img src = "../../img/evaluacionInteligencia/iconos/dice-1.svg" alt="dado cara 1"/>
                                </button>
                                <button id='2i' value="2" type="button" class="btn btn-outline-secondary">
                                    <img src = "../../img/evaluacionInteligencia/iconos/dice-2.svg" alt="dado cara 2" style="transform:rotate(90deg);"/>
                                </button>
                                <button id='3i' value="3" type="button" class="btn btn-outline-secondary">
                                    <img src = "../../img/evaluacionInteligencia/iconos/dice-3.svg" alt="dado cara 3" style="transform:rotate(90deg);"/>
                                </button>
                                <button id='4i' value="4" type="button" class="btn btn-outline-secondary">
                                    <img src = "../../img/evaluacionInteligencia/iconos/dice-4.svg" alt="dado cara 4"/>
                                </button>
                                <button id='5i' value="5" type="button" class="btn btn-outline-secondary">
                                    <img src = "../../img/evaluacionInteligencia/iconos/dice-5.svg" alt="dado cara 5"/>
                                </button>
                                <button id='6i' value="6" type="button" class="btn btn-outline-secondary">
                                    <img src = "../../img/evaluacionInteligencia/iconos/dice-6.svg" alt="dado cara 6"/>
                                </button>
                            </div>
                        </div>
                        <button type="button" class="btn btn-secondary btnAnterior">Anterior</button>
                        <button id='btnSiguiente' type="button" class="btn btn-primary">Siguiente</button>
                        <input id="btnTerminar" class="btn btn-primary" type="submit" value="Terminar">
                    </form>    
                </div>
            </div>

        </div>

         <!-- jQuery, Popper.js, Bootstrap JS -->
        <script src="../../assets/jquery/jquery-3.3.1.min.js"></script>
        <!--Importar JS del examen de inteligencia-->
        <script type="text/javascript" src="../inteligencia.js"></script>
        <!--Importar JS que controlara el cronometro de la evaluacion-->
        <script type="text/javascript" src="../cronometroTestInteligencia.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
                integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
                integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>

        <!--Dará una alerta si el usuario desea cerrar la ventana-->
        <script language="JavaScript" type="text/javascript">
     
            window.onbeforeunload = preguntarAntesDeSalir;
     
            function preguntarAntesDeSalir()
            {
            if (true)
                return "¿Seguro que quieres salir?";
            }
        </script>

    </body>
</html>
