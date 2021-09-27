<!-- Parte superior de la pagina  de la pagina -->
<?php require_once "vistas/parte_superior.php" ?>

<header>
    <h3 class='text-center'></h3>
</header>

<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <button id="btnNuevoUsu" type="button" class="btn btn-info" data-toggle="modal"><i class="material-icons">library_add</i></button>
        </div>
    </div>
</div>
<br>
<!-- tabla de usuarios -->
<div class="container caja">
    <div class="row">
        <div class="col-lg-12">
            <div class="table-responsive">
                <table id="tablaUsuarios" class="table table-striped table-bordered table-condensed" style="width:100%">
                    <thead class="text-center">
                        <tr>
                            <th>Id</th>
                            <th>Dui</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Correo</th>
                            <th>Cargo</th>
                            <th>Telefono</th>
                            <th>Rol</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
<?php require_once "vistas/modalCRUDUsu.php" ?>

<?php require_once "vistas/parte_inferior.php" ?>