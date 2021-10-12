<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
              integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
              <link href="../../css/mainEval.css" rel="stylesheet" type="text/css"/>
        <title>Inteligencia</title>
    </head>
    <body>
        <header class="site-header">
            <nav class="navbar navbar-expand-md navbar-dark bg-steel fixed-top">
                <div class="container">
                    <a class="navbar-brand mr-4" href="/">Pruebad de Inteligencia</a>
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
                                   <div class="quiz-timer">
                                       <span class="time"></span>
                                 </div>
                                </div>
                        </div>
                        <div class="form-group">
                            <label>¿Que combinación sigue?</label>
                        </div>
                        <div id="imagenPregunta" class="form-group">
                            <img src="../../img/evaluacionInteligencia/1.gif" width="300" height="300" />
                        </div>
                        <!-- Dado que mostrara la respuesta elegida  -->
                        <div class="form-group">
                            <div class="row">
                                <div id="caraSuperiorDado" class="col">
                                    <img src = "../../img/evaluacionInteligencia/iconos/dice-0.svg" width="50" height="50"/>
                                </div>
                                <div class="w-100"></div>
                                <div id="caraInferiorDado" class="col">
                                    <img src = "../../img/evaluacionInteligencia/iconos/dice-0.svg"  alt="Cinque Terre" width="50" height="50"/>
                                </div>
                            </div>
                        </div>

                        <!-- Grupo de botones para elegir cara superior de dado  -->
                        <div class="form-group">
                            <div id="dadoSuperior" class="btn-group mb-3">
                                <button value="0" type="button" class="btn btn-outline-secondary">
                                    <img src = "../../img/evaluacionInteligencia/iconos/dice-0.svg" alt="dado cara 0"/>
                                </button>
                                <button value="1" type="button" class="btn btn-outline-secondary">
                                    <img src = "../../img/evaluacionInteligencia/iconos/dice-1.svg" alt="dado cara 1"/>
                                </button>
                                <button value="2" type="button" class="btn btn-outline-secondary">
                                    <img src = "../../img/evaluacionInteligencia/iconos/dice-2.svg" alt="dado cara 2"/>
                                </button>
                                <button value="3" type="button" class="btn btn-outline-secondary">
                                    <img src = "../../img/evaluacionInteligencia/iconos/dice-3.svg" alt="dado cara 3"/>
                                </button>
                                <button value="4" type="button" class="btn btn-outline-secondary">
                                    <img src = "../../img/evaluacionInteligencia/iconos/dice-4.svg" alt="dado cara 4"/>
                                </button>
                                <button value="5" type="button" class="btn btn-outline-secondary">
                                    <img src = "../../img/evaluacionInteligencia/iconos/dice-5.svg" alt="dado cara 5"/>
                                </button>
                                <button value="6" type="button" class="btn btn-outline-secondary">
                                    <img src = "../../img/evaluacionInteligencia/iconos/dice-6.svg" alt="dado cara 6"/>
                                </button>
                            </div>
                        </div>

                        <!-- Grupo de botones para elegir cara inferior de dado  -->
                        <div class="form-group">
                            <div id="dadoInferior" class="btn-group mb-3">
                                <button value="0" type="button" class="btn btn-outline-secondary">
                                    <img src = "../../img/evaluacionInteligencia/iconos/dice-0.svg" alt="dado cara 0"/>
                                </button>
                                <button value="1" type="button" class="btn btn-outline-secondary">
                                    <img src = "../../img/evaluacionInteligencia/iconos/dice-1.svg" alt="dado cara 1"/>
                                </button>
                                <button value="2" type="button" class="btn btn-outline-secondary">
                                    <img src = "../../img/evaluacionInteligencia/iconos/dice-2.svg" alt="dado cara 2"/>
                                </button>
                                <button value="3" type="button" class="btn btn-outline-secondary">
                                    <img src = "../../img/evaluacionInteligencia/iconos/dice-3.svg" alt="dado cara 3"/>
                                </button>
                                <button value="4" type="button" class="btn btn-outline-secondary">
                                    <img src = "../../img/evaluacionInteligencia/iconos/dice-4.svg" alt="dado cara 4"/>
                                </button>
                                <button value="5" type="button" class="btn btn-outline-secondary">
                                    <img src = "../../img/evaluacionInteligencia/iconos/dice-5.svg" alt="dado cara 5"/>
                                </button>
                                <button value="6" type="button" class="btn btn-outline-secondary">
                                    <img src = "../../img/evaluacionInteligencia/iconos/dice-6.svg" alt="dado cara 6"/>
                                </button>
                            </div>
                        </div>

                        <input  type="submit" name="action" id="btnSiguiente" value="Siguiente" class="btn btn-outline-info">
                        <a href="#">Anterior</a> 
                    </form>    
                </div>

            </div>

        </div>

         <!-- jQuery, Popper.js, Bootstrap JS -->
        <script src="../../assets/jquery/jquery-3.3.1.min.js"></script>
        <!--Importar JS del examen de inteligencia-->
        <script type="text/javascript" src="../inteligencia.js"></script>

        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
                integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
                integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
                integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
        <script type="text/javascript">
            window.onbeforeunload = function() {
                return "¿Estas seguro que quieres salir?"
            }
         </script>
    </body>
</html>
