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
        <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
              integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
              <link href="../../css/mainEval.css" rel="stylesheet" type="text/css"/>
        <title>Inteligencia</title>
    </head>
    <body>
        <header class="site-header">
            <nav class="navbar navbar-expand-md navbar-dark bg-steel fixed-top">
                <div class="container">
                    <a class="navbar-brand mr-4" href="/">Prueba de Inteligencia</a>
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
                                    <legend id="leyendaIndice" class="border-bottom bm-4">Evaluación finalizada</legend>
                                </div>
                            </div>
                        </div>
                        <div id="imagenPregunta" class="form-group" style="margin-bottom: 0px;">
                            <img src="../../img/grafico-circular.png" width="300" height="300" />
                        </div>
                        <div class="form-group">
                            <p id="respuestasCorrectas" class="text-center"></p>
                            <p id="rango" class="text-center"></p>
                            <p id="percentiles" class="text-center"></p>
                            <p id="percentiles" class="mb-0"></p>
                        </div>
                        <input id="btnAceptar" onclick="window.close();" class="btn btn-primary btn-lg" type="submit" value="Aceptar">
                    </form>    
                </div>
            </div>

        </div>

         
        <!--Importar JS del examen de inteligencia-->
        <script type="text/javascript" src="../puntuacionInteligencia.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
                integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
                integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
    </body>
</html>
