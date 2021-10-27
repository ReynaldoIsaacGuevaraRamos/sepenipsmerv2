<!-- Parte superior de la pagina  de la pagina -->
<?php require_once "vistas/parte_superior.php" ?>


<div class="container mt-20 col-lg-20 cartas">
    <div class="row row-cols-12 row-cols-md-10 g-10">

        <!-- La evaluacion de inteligencia se mostrará al empleado si el psicologo lo ha habilitado-->
        <div class="col">
            <div class="card ">
                <?php
                if (($rol_usuario == 4 && isset($_COOKIE['state_inteligencia'])) || $rol_usuario == 1) { //Si es  empleado o soporte
                ?>
                    <img src="../img/inteligencia.png" class="card-img-top" alt="...">
                    <div class="card-body ">
                        <h5 class="card-title">Inteligencia</h5>
                        <p class="card-text ">Analice detenidamente la imagen de los dominós y selecciona la combinación de 0 al 6, que le parezca correcta en cada pregunta, procure no dejar ninguna sin llenar.</p>
                        <form method="post" target="print_popup"  action="./evaluaciones/inteligencia.php" onsubmit="window.open('about:blank','print_popup','width=1000,height=800');">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="completeInte" checked disabled>
                                <label class="form-check-label" for="completeInte" disabled>
                                    Completado
                                </label>
                            </div>
                            <input type="submit" name="iniciarInte" value="Iniciar" class="btn btn-primary">
                        </form>
                    </div>
                <?php  } ?>
            </div>
        </div>

        <!-- La evaluacion de personalidad se mostrará al empleado si el psicologo lo ha habilitado-->
        <div class="col">
            <div class="card">
                <?php
                if (($rol_usuario == 4 && isset($_COOKIE['state_personalidad'])) || $rol_usuario == 1) { //Si es  empleado o soporte
                ?>
                            <img src="../img/personalidad.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Personalidad</h5>
                                <p class="card-text ">A continuación encontrará una serie de frases que permitirán conocer sus actitudes e intereses. En general, no
                                    existen respuestas correctas o incorrectas, porque las personas tienen distintos intereses y ven las cosas desde
                                    distintos puntos de vista. Conteste con sinceridad; de esta forma se podrá conocer mejor su forma de ser.</p>
                                <form method="post"  target="print_popup"  action="./evaluaciones/personalidad.php" onsubmit="window.open('about:blank','print_popup','width=1000,height=800');">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="completePerso" checked disabled>
                                        <label class="form-check-label" for="completPerso" >
                                            Completado
                                        </label>
                                    </div>
                                    <input type="submit" name="iniciarPers" value="Iniciar" class="btn btn-primary">
                                </form>
                            </div>
                <?php  } ?>
            </div>
        </div>

        <!-- La evaluacion proyectiva se mostrará al empleado si el psicologo lo ha habilitado-->
        <div class="col">
            <div class="card ">
                <?php
                if (($rol_usuario == 4 && isset($_COOKIE['state_proyectiva'])) || $rol_usuario == 1) { //Si es  empleado o soporte
                ?>
                    <img src="../img/proyectiva.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Proyectiva</h5>
                        <p class="card-text ">A continuación se mostrara una imagen con 8 colores, ordenelos de la forma que más le paresca sin repetirlos, seleccionando uno por cada lista de items</p>
                        <form method="post"  target="print_popup"  action="./evaluaciones/proyectiva.php" onsubmit="window.open('about:blank','print_popup','width=1000,height=800');">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="completeProyec" checked disabled>
                                <label class="form-check-label" for="completProyect" disabled>
                                    Completado
                                </label>
                            </div>
                            <input type="submit" name="iniciarProyec" value="Iniciar" class="btn btn-primary">
                        </form>
                    </div>
                <?php  } ?>
            </div>
        </div>

        <!-- La evaluacion emocional se mostrará al empleado si el psicologo lo ha habilitado-->
        <div class="col">
            <div class="card ">
                <?php
                if (($rol_usuario == 4 && isset($_COOKIE['state_emocional'])) || $rol_usuario == 1) { //Si es  empleado o soporte
                ?>
                    <img src="../img/emociones.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Emocional</h5>
                        <p class="card-text "> Lea detenidamente la pregunta, no hay respuestas correctas o incorrectas, marcá la opción que más te paresca y, !no te tomes demasiado tiempo en cada uno de ellas¡.</p>
                        <form action="./evaluaciones/emocional.php">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="completeEmoc" checked disabled>
                                <label class="form-check-label" for="completEmoc" disabled>
                                    Completado
                                </label>
                            </div>
                            <input type="submit" name="iniciarEmoc" value="Iniciar" class="btn btn-primary">
                        </form>
                    </div>
                <?php  } ?>
            </div>
        </div>

    </div>
</div>


<!-- Parte inferior de la pagina  de la pagina -->
<?php require_once "vistas/parte_inferior.php" ?>
