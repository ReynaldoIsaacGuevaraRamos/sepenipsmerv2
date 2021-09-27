$(document).ready(function () {
    var id, opcion;
    $('#datepicker').datepicker();

    opcion = 4;
    tablaAdministradores = $('#tablaAdministradores').DataTable({

        "ajax": {
            "url": "../bd/crudAdministradores.php",
            "method": 'POST', //usamos el metodo POST
            "data": { opcion: opcion }, //enviamos opcion 4 para que haga un SELECT
            "dataSrc": ""
        },
        "columns": [
            { "data": "id" },
            { "data": "dui" },
            { "data": "nombre" },
            { "data": "apellido" },
            { "data": "correo" },
            { "data": "cargo" },
            { "data": "telefono" },
            { "data": "sexo" },
            { "data": "fechaNacimiento" },
            { "defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btn-sm btnEditar'><i class='material-icons'>edit</i></button><button class='btn btn-danger btn-sm btnBorrar'><i class='material-icons'>delete</i></button></div></div>" }
        ],
        "language": {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontraron resultados",
            "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sSearch": "Buscar:",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "sProcessing": "Procesando...",
        }
    });




    var fila; //captura la fila, para editar o eliminar
    //submit para el Alta y Actualización
    $('#formAdministradores').submit(function (e) {
        e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página

        dui = $.trim($('#dui').val());
        nombre = $.trim($('#nombre').val());
        apellido = $.trim($('#apellido').val());
        correo = $.trim($('#correo').val());
        cargo = $.trim($('#cargo').val());
        telefono = $.trim($('#telefono').val());
        sexo = $.trim($('#sexo').val());
        fechaNacimiento = $.trim($('#fechaNacimiento').val());
        $.ajax({
            url: "../bd/crudAdministradores.php",
            type: "POST",
            datatype: "json",
            data: { id: id, dui: dui, nombre: nombre, apellido: apellido, correo: correo, cargo: cargo, telefono: telefono, sexo: sexo, fechaNacimiento: fechaNacimiento, opcion: opcion },
            success: function (data) {
                tablaAdministradores.ajax.reload(null, false);
            }
        });
        $('#modalCRUDAdmin').modal('hide');
    });



    //para limpiar los campos antes de agregar un administrador
    $("#btnNuevo").click(function () {
        opcion = 1; //AGREGAR
        id = null;
        $("#formAdministradores").trigger("reset");
        $(".modal-header").css("background-color", "#17a2b8");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Agregar Administrador");
        $('#modalCRUDAdmin').modal('show');
    });
    //Validar que el dui posea el numero de digitos maximos (9)
    $('#dui').keypress(function (event) {
        if (event.which < 48 || event.which > 57 || this.value.length === 9) {
            return false;
        }

    });



    //Editar        
    $(document).on("click", ".btnEditar", function () {
        opcion = 2;//editar
        fila = $(this).closest("tr");
        id = parseInt(fila.find('td:eq(0)').text()); //capturo el ID		            
        dui = fila.find('td:eq(1)').text();
        nombre = fila.find('td:eq(2)').text();
        apellido = fila.find('td:eq(3)').text();
        correo = fila.find('td:eq(4)').text();
        cargo = fila.find('td:eq(5)').text();
        telefono = fila.find('td:eq(6)').text();
        sexo = fila.find('td:eq(7)').text();
        fechaNacimiento = fila.find('td:eq(8)').text();
        $("#dui").val(dui);
        $("#nombre").val(nombre);
        $("#apellido").val(apellido);
        $("#correo").val(correo);
        $("#cargo").val(cargo);
        $("#telefono").val(telefono);
        $("#sexo").val(sexo);
        $("#fechaNacimiento").val(fechaNacimiento);
        $(".modal-header").css("background-color", "#007bff");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Editar Administrador");
        $('#modalCRUDAdmin').modal('show');
    });

    //Borrar
    $(document).on("click", ".btnBorrar", function () {

        fila = $(this);
        id = parseInt($(this).closest('tr').find('td:eq(0)').text());
        opcion = 3; //eliminar
        Swal.fire({
                      //Mensaje para confirmar la acción 
            title: "¿Está seguro de borrar el Administrador con id: " + id + "?",
            text: "No puede revertir esta acción",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#5cb85c',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar'
        }).then((result) => {
            if (result.value) {
                //Mensaje que se ha realizado el borrado
                Swal.fire(
                    'Borrado!',
                    'El Administrador ha sido eliminado.',
                    'success'
                )
                //Metodo para borrar con AJAX
                if (result.value) {
                    $.ajax({
                        url: "../bd/crudAdministradores.php",
                        type: "POST",
                        datatype: "json",
                        data: { opcion: opcion, id: id },
                        success: function () {
                            tablaAdministradores.row(fila.parents('tr')).remove().draw();
                        }
                    });
                }
            }
        })
    });


});

