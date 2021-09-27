<!doctype html>
<html>

<head>
    <link rel="shortcut icon" href="#" />
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>SEPENIPSMER</title>

    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/login.css">
    <link rel="stylesheet" href="assets/sweetalert2/sweetalert2.min.css">

    <link rel="stylesheet" type="text/css" href="assets/fuentes/iconic/css/material-design-iconic-font.min.css">

</head>

<body>

    <div class="container-login">
        <div class="wrap-login">
            <form class="login-form validate-form" id="formLogin" action="" method="post">

                <span class="login-form-title">INICIAR SESIÓN</span>
                <div class="container-login-form-btn">
                    <img src="img/logoSys.png" class="imageLogin" />
                </div>
                <div class="container-login-form-btn">
                <div class="wrap-input100" data-validate="Usuario incorrecto">
                    <input class="input100" type="text" id="usuario" name="usuario" placeholder="Correo">
                    <span class="focus-efecto"></span>
                </div>

                <div class="wrap-input100" data-validate="Password incorrecto">
                    <input class="input100" type="password" id="password" name="password" placeholder="Contraseña">
                    <span class="focus-efecto"></span>
                </div>
                </div>
                <div class="container-login-form-btn">
                    <div class="wrap-login-form-btn">
                        <div class="login-form-bgbtn"></div>
                        <button type="submit" name="submit" class="login-form-btn">CONECTAR</button>
                    </div>
                </div>
            </form>
        </div>
    </div>


    <script src="assets/jquery/jquery-3.3.1.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/popper/popper.min.js"></script>
    <script src="assets/sweetalert2/sweetalert2.all.min.js"></script>
    <script src="mainIndex.js"></script>
</body>

</html>