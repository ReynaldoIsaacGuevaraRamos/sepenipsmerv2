<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link href="../../css/mainEval.css" rel="stylesheet" type="text/css" />
    <title>Personalidad</title>
</head>

<body>
    <header class="site-header">
        <nav class="navbar navbar-expand-md navbar-dark bg-steel fixed-top">
            <div class="container">
                <a class="navbar-brand mr-4" href="/">Personalidad</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarToggle">
                    <div class="navbar-nav mr-auto">
                    </div>
                    <!-- Navbar Right Side -->
                    <div class="navbar-nav">
                        <a class="nav-item nav-link" href="#" onclick="window.close();">Salir</a>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    <div class="container mt-5 col-lg-5">
        <div class="card">
            <div class="card-body text-center">
                <form id="formularioEvaluacionInteligencia">
                    <div class="form-group">
                        <div class="quiz">

                            <div class="quiz-user">
                                <legend id="leyendaIndice" class="border-bottom bm-4">Pregunta 1 de 185</legend>
                            </div>
                            <div id="quiz-timer" class="quiz-timer">
                                <div class="alert alert-success m-0 p-1">
                                    Tiempo
                                    <strong id="testclock">45:00</strong>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="form-group text-left" id="questions">

                    </div>
                    <div class="form-group">
                        <input type="button" onclick="next()" value="Siguiente" class="btn btn-primary" id="btnSiguiente">
                        <input id="btnTerminar" class="btn btn-danger" type="submit" value="Terminar">
                        <a href="index.jsp">return </a>
                    </div>
                </form>
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <script type="text/javascript" src="../personalidad.js"></script>
        <!--Importar JS que controlara el cronometro de la evaluacion-->
        <script type="text/javascript" src="../cronometroTestPersonalidad.js"></script>
        <!--Dará una alerta si el usuario desea cerrar la ventana-->
        <script language="JavaScript" type="text/javascript">
            window.onbeforeunload = preguntarAntesDeSalir;

            function preguntarAntesDeSalir() {
                if (true)
                    return "¿Seguro que quieres salir?";
            }
        </script>


</body>

</html>