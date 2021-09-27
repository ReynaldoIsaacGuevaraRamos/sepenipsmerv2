$(document).ready(function () {
    var id, opcion;
    $('#datepicker').datepicker();

    opcion = 4;
    tablaEvaluar = $('#tablaEvaluar').DataTable({

        "ajax": {
            "url": "../bd/evaluar.php",
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
            { "defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btn-sm btnEvaluar'><i class='fas fa-fw fa-play'></i></button><button class='btn btn-danger btn-sm btnCancelarEval'><i class='fas fa-fw fa-times'></i></button></div></div>" }
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
            url: "../bd/evaluar.php",
            type: "POST",
            datatype: "json",
            data: { id: id, dui: dui, nombre: nombre, apellido: apellido, correo: correo, cargo: cargo, telefono: telefono, sexo: sexo, fechaNacimiento: fechaNacimiento, opcion: opcion },
            success: function (data) {
                tablaEvaluar.ajax.reload(null, false);
            }
        });
        $('#modalCRUDAdmin').modal('hide');
    });






    //Editar        
    $(document).on("click", ".btnEvaluar", function () {
        Swal.fire(
            'En curso!',
            'El empleado esta en evaluación',
            'success'
        );
    });

    //Borrar
    $(document).on("click", ".btnCancelarEval", function () {

      
        Swal.fire({
                      //Mensaje para confirmar la acción 
            title: "¿Está seguro de que desea cancelar la evaluación?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#5cb85c',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar'
        }).then((result) => {
            if (result.value) {
                //Mensaje que se ha realizado el borrado
                Swal.fire(
                    'Cancelada!',
                    'La evaluaciíón ha sido cancelada.',
                    'success'
                )
            }
        })
    });


});

