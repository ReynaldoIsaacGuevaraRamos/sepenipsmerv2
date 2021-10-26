<!DOCTYPE html>
<html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link href="../../css/mainEval.css" rel="stylesheet" type="text/css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.1.1.min.js">
        <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
              <link href="../../css/mainEval.css" rel="stylesheet" type="text/css"/>
        <title>Proyectiva</title>
    </head>
    <body>
         <header class="site-header">
            <nav class="navbar navbar-expand-md navbar-dark bg-steel fixed-top">
                <div class="container">
                    <a class="navbar-brand mr-4" href="/">Proyectiva</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle"
                            aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarToggle">
                        <div class="navbar-nav mr-auto">

                        </div>
                        <!-- Navbar Right Side -->
                        <div class="navbar-nav">
                        <a class="nav-item nav-link" href="index.jsp">Salir</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <div  class="container mt-5 col-lg-5">
            <div class="card">
                <div class="card-body text-center">
                    <form id="PruevaProyectiva">
                      <div class="form-group">
                          <div class="quiz">
                              <div id="quiz-timer" class="quiz-timer">
                                  <div class="alert alert-success m-0 p-1">
                                      Tiempo
                                      <strong id="testclock">30:00</strong>
                                  </div>
                              </div>
                          </div>
                      </div>
                        <div class="form-group">
                            <legend class="border-bottom bm-4">Pregunta</legend>
                            <label>¿Ordene los colores segun su criterio?</label>

                        </div>
                        <div class="form-group">
                            <img src="../../img/lusher.jpg" class="img-fluid" alt="Responsive image"/>
                        </div>
                        <div class="form-group">
                            <label>1 - Primer color: </label>
                            <select id="R1"class="form-select form-control-lg mb-2 ct" aria-label=".form-select-lg example">
                                <option value="0">NULL</option>
                                <option value="AZUL">AZUL</option>
                                <option value="VERDE">VERDE</option>
                                <option value="ROJO">ROJO</option>
                                <option value="AMARILLO">AMARILLO</option>
                                <option value="VIOLETA">VIOLETA</option>
                                <option value="MARRON">MARRON</option>
                                <option value="GRIS">GRIS</option>
                                <option value="NEGRO">NEGRO</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>2 - Segundo color:</label>
                            <select id="R2" class="form-select form-control-lg mb-2 ct" aria-label=".form-select-lg example">
                                <option value="0">NULL</option>
                                <option value="AZUL">AZUL</option>
                                <option value="VERDE">VERDE</option>
                                <option value="ROJO">ROJO</option>
                                <option value="AMARILLO">AMARILLO</option>
                                <option value="VIOLETA">VIOLETA</option>
                                <option value="MARRON">MARRON</option>
                                <option value="GRIS">GRIS</option>
                                <option value="NEGRO">NEGRO</option>
                            </select>
                        </div>
                         <div class="form-group">
                            <label>3 - Tercer color:</label>
                            <select id="R3" class="form-select form-control-lg mb-2 ct" aria-label=".form-select-lg example">
                                <option value="0">NULL</option>
                                <option value="AZUL">AZUL</option>
                                <option value="VERDE">VERDE</option>
                                <option value="ROJO">ROJO</option>
                                <option value="AMARILLO">AMARILLO</option>
                                <option value="VIOLETA">VIOLETA</option>
                                <option value="MARRON">MARRON</option>
                                <option value="GRIS">GRIS</option>
                                <option value="NEGRO">NEGRO</option>
                            </select>
                        </div>
                         <div class="form-group">
                            <label>4 - Cuarto color:</label>
                            <select id="R4" class="form-select form-control-lg mb-2 ct" aria-label=".form-select-lg example">
                                <option value="0">NULL</option>
                                <option value="AZUL">AZUL</option>
                                <option value="VERDE">VERDE</option>
                                <option value="ROJO">ROJO</option>
                                <option value="AMARILLO">AMARILLO</option>
                                <option value="VIOLETA">VIOLETA</option>
                                <option value="MARRON">MARRON</option>
                                <option value="GRIS">GRIS</option>
                                <option value="NEGRO">NEGRO</option>
                            </select>
                        </div>
                         <div class="form-group">
                            <label> 5 - Quinto color:</label>
                            <select id="R5" class="form-select form-control-lg mb-2 ct" aria-label=".form-select-lg example">
                                <option value="0">NULL</option>
                                <option value="AZUL">AZUL</option>
                                <option value="VERDE">VERDE</option>
                                <option value="ROJO">ROJO</option>
                                <option value="AMARILLO">AMARILLO</option>
                                <option value="VIOLETA">VIOLETA</option>
                                <option value="MARRON">MARRON</option>
                                <option value="GRIS">GRIS</option>
                                <option value="NEGRO">NEGRO</option>
                            </select>
                        </div>
                         <div class="form-group">
                            <label>6 - Sexto color:</label>
                            <select id="R6" class="form-select form-control-lg mb-2 ct" aria-label=".form-select-lg example">
                                <option value="0">NULL</option>
                                <option value="AZUL">AZUL</option>
                                <option value="VERDE">VERDE</option>
                                <option value="ROJO">ROJO</option>
                                <option value="AMARILLO">AMARILLO</option>
                                <option value="VIOLETA">VIOLETA</option>
                                <option value="MARRON">MARRON</option>
                                <option value="GRIS">GRIS</option>
                                <option value="NEGRO">NEGRO</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>7 - Septimo color:</label>
                            <select id="R7" class="form-select form-control-lg mb-2 ct" aria-label=".form-select-lg example">
                                <option value="0">NULL</option>
                                <option value="AZUL">AZUL</option>
                                <option value="VERDE">VERDE</option>
                                <option value="ROJO">ROJO</option>
                                <option value="AMARILLO">AMARILLO</option>
                                <option value="VIOLETA">VIOLETA</option>
                                <option value="MARRON">MARRON</option>
                                <option value="GRIS">GRIS</option>
                                <option value="NEGRO">NEGRO</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>8 - Octavo color:</label>
                            <select id="R8" class="form-select form-control-lg mb-2 ct" aria-label=".form-select-lg example">
                                <option value="0">NULL</option>
                                <option value="AZUL">AZUL</option>
                                <option value="VERDE">VERDE</option>
                                <option value="ROJO">ROJO</option>
                                <option value="AMARILLO">AMARILLO</option>
                                <option value="VIOLETA">VIOLETA</option>
                                <option value="MARRON">MARRON</option>
                                <option value="GRIS">GRIS</option>
                                <option value="NEGRO">NEGRO</option>
                            </select>
                        </div>
                        <input id="btnTerminar" class="btn btn-danger" type="submit" value="Terminar" disabled="true">
                    </form>
                </div>
            </div>
            <script src="../../assets/popper/popper.min.js"></script>
            <script src="../../assets/sweetalert2/sweetalert2.all.min.js"></script>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            <script type="text/javascript" src="../Proyectiva.js"></script>
            <script src="https://code.jquery.com/jquery-3.1.1.min.js">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
                integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
                integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
        <script type="text/javascript" src="../cronometroTestProyectiva.js"></script>
    </body>
</html>
