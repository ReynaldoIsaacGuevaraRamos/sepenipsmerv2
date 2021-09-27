<?php require_once "vistas/parte_superior.php" ?>

<!--INICIO del cont principal-->
<div class="container mt-5 col-lg-5">
    <div class="card">
        <div class="card-body text-left">
            <form>
                <legend class="border-bottom bm-4"> Datos personales </legend>
                <div class="form-group">
                    <label class="label">Nombre:</label> <input type="text" enable="False" name="txtNombre" class="form-control form-control-lg">
                </div>
                <div class="form-group">
                    <label class="label">Apellido:</label> <input type="text" name="txtApelli" class="form-control form-control-lg">
                </div>
                <div class="form-group">
                    <label for="" class="col-form-label">Fecha de Nacimiento:</label>
                    <div class="input-group date fj-date" data-provide="datepicker" data-date-format="yyyy-mm-dd">
                        <input id="fechaNacimiento" type="text" class="form-control">
                        <div class="input-group-addon">
                            <i class="fas fa-fw fa-calendar fa-2x"></i>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="" class="col-form-label">Sexo:</label>
                    <select type="text" class="form-control" id="sexo">
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                    </select>
                </div>
                <div class="form-group">

                    <label class="label">Correo:</label> <input type="email" name="txtCorreo" class="form-control form-control-lg">
                </div>
                <div class="form-group">
                    <label class="label">Teléfono:</label> <input type="number" name="txtTelef" class="form-control form-control-lg">
                </div>
                <input type="submit" name="action" value="Guardar" class="btn btn-success">
                <input type="submit" name="action" value="Actualizar" class="btn btn-primary">
            </form>
        </div>
    </div>
</div>
<div class="container mt-5 col-lg-5">
    <div class="card">
        <div class="card-body text-left">
            <form>
                <legend class="border-bottom bm-4"> Establecer contraseña </legend>
                <div class="form-group">
                    <label class="label">Contraseña actual:</label> <input type="password" enable="False" name="txtNombre" class="form-control form-control-lg">
                </div>
                <div class="form-group">
                    <label class="label">Contraseña nueva:</label> <input type="password" name="txtApelli" class="form-control form-control-lg">
                </div>
                <div class="form-group">
                    <label class="label">Confirmar contraseña:</label> <input type="password" name="txtFecha" class="form-control form-control-lg">
                </div>
                <input type="submit" name="action" value="Guardar" class="btn btn-success">
                <input type="submit" name="action" value="Actualizar" class="btn btn-primary">
            </form>
        </div>
    </div>
</div>


<!--FIN del cont principal-->


<?php require_once "vistas/parte_inferior.php" ?>