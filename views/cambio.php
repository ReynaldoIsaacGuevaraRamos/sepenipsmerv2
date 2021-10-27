<?php require_once "vistas/parte_superior.php"?>

<!--INICIO del cont principal-->
<div class="container">
            <div class="col-6 text-justify d-flex justify-content-center">
						<form method="POST" class="col-12" action="change.php">
									<label>Contraseña Anterior</label><br>
								<div>
									<input type="password" name="contraA" required>
								</div><br>
									<label>Contraseña nueva</label><br>

								<div>
									<input type="password" name="contraB" required>
								</div><br>
									<label>Repetir Contraseña</label><br>
								<div>
									<input type="password" name="contraC" required>
								</div><br>
								<button type="submit"  class="btn btn-primary">Guardar</button>
						</form>
					</div>
</div>
<!--FIN del cont principal-->


<?php require_once "vistas/parte_inferior.php"?>