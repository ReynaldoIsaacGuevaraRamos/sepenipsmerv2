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
                    <a class="navbar-brand mr-4" href="/">Inteligencia</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle"
                            aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarToggle">
                        <div class="navbar-nav mr-auto">

                        </div>
                        <!-- Navbar Right Side  -->
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
                    <form>
                        <div class="form-group">
                            <div class="quiz">
                                <div class="quiz-user">
                            <legend class="border-bottom bm-4">Pregunta 1 de 48</legend>
                           </div>
                                   <div class="quiz-timer">
                                       <span class="time"></span>
                                 </div>
                                </div>
                        </div>
                        <div class="form-group">
                            <label>¿Que combinación sigue?</label>
                        </div>
                        <div class="form-group">
                            <img src="../../img/1.PNG" idth="300" height="300" />
                        </div>
                        <div class="form-group">
                            <label>Número superior:</label>
                            <input type="number" name="numeroSupe" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Número inferior:</label>
                            <input type="number" name="numeroInfe" class="form-control">
                        </div>
                        <input  type="submit" name="action" value="Siguiente" class="btn btn-outline-info">
                        <a href="index.jsp">return </a>
                    </form>    
                </div>

            </div>

        </div>



        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
                integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
                integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
                integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
    </body>
</html>
