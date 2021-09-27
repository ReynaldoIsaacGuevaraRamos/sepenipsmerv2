   <!--Modal para CRUD-->
   <div class="modal fade" id="modalCRUDUsu" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel"></h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form id="formUsuarios">
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <label for="" class="col-form-label">Dui:</label>
                                                <input type="text" class="form-control" id="dui" required>
                                                <div id="respuestaDui"> </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <label for="" class="col-form-label">Nombre</label>
                                                <input type="text" class="form-control" id="nombre"  required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <label for="" class="col-form-label">Correo</label>
                                                <input type="email" class="form-control" id="correo" placeholder="name@example.com"  required>
                                                <div id="respuestaCorreo"> </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <label for="" class="col-form-label">Apellido</label>
                                                <input type="text" class="form-control" id="apellido"  required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-7">
                                            <div class="form-group">
                                                <label for="" class="col-form-label">Cargo</label>
                                                <input type="text" class="form-control" id="cargo"  required>
                                            </div>
                                        </div>
                                        <div class="col-lg-5">
                                            <div class="form-group">
                                                <label for="" class="col-form-label">Telefono</label>
                                                <input type="number" class="form-control" id="telefono"  required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-7">
                                            <div class="form-group">
                                                <label for="" class="col-form-label">Rol</label>
                                                <select type="text" class="form-control" id="id_rol">
                                                    <option value="1">Soporte</option>
                                                    <option value="2">Psicologo</option>
                                                    <option value="3">Administrador</option>
                                                    <option value="4">Empleado</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-lg-5">
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-light" data-dismiss="modal">Cancelar</button>
                                    <button type="submit" id="btnGuardar" class="btn btn-success">Guardar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>