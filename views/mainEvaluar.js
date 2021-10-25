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
            { "data": "cargo" },
            { "defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btn-sm btnEvaluarInteligencia'><i class='fas fa-fw fa-play'></i></button><button class='btn btn-danger btn-sm btnCanEvalInteligencia'><i class='fas fa-fw fa-times'></i></button></div></div>" },
            { "defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btn-sm btnEvaluarPersonalidad'><i class='fas fa-fw fa-play'></i></button><button class='btn btn-danger btn-sm btnCanEvalPersonalidad'><i class='fas fa-fw fa-times'></i></button></div></div>" },
            { "defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btn-sm btnEvaluarProyectiva'><i class='fas fa-fw fa-play'></i></button><button class='btn btn-danger btn-sm btnCanEvalProyetiva'><i class='fas fa-fw fa-times'></i></button></div></div>" },
            { "defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btn-sm btnEvaluarEmocional'><i class='fas fa-fw fa-play'></i></button><button class='btn btn-danger btn-sm btnCanEvalEmocional'><i class='fas fa-fw fa-times'></i></button></div></div>" }
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



    /*---------------------------------------------------------*/
    /*Evaluacion de Inteligencia*/
    /*---------------------------------------------------------*/


    //Habilitar cuestionario de inteligencia        
    $(document).on("click", ".btnEvaluarInteligencia", function () {
        fila = $(this).closest("tr");
        dui = parseInt(fila.find('td:eq(1)').text());
        nombre = fila.find('td:eq(2)').text();
        opcion = 2;
        valorEvaluacion=1;
        $.ajax({
            url: "../bd/evaluarEmpleados.php",
            type: "POST",
            datatype: "json",
            data: { dui: dui, opcion: opcion, valorEvaluacion: valorEvaluacion },
            success: function (data) {
                Swal.fire(
                    'En curso!',
                    nombre+' ya puede realizar la evaluación de inteligencia',
                    'success'
                );
            }
        });
        
    });

    //Deshabilitar cuestionario de inteligencia        
    $(document).on("click", ".btnCanEvalInteligencia", function () 
    {
        
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
                fila = $(this).closest("tr");
                dui = parseInt(fila.find('td:eq(1)').text());
                opcion = 2;
                valorEvaluacion=0;
                $.ajax({
                    url: "../bd/evaluarEmpleados.php",
                    type: "POST",
                    datatype: "json",
                    data: { dui: dui, opcion: opcion, valorEvaluacion: valorEvaluacion },
                    success: function (data) {
                        Swal.fire(
                            'Cancelada!',
                            'La evaluación de inteligencia ha sido deshabilitada para '+nombre,
                            'success'
                        );
                    }
                });
            }
        })
        
    });

    /*---------------------------------------------------------*/
    /*Evaluacion de Personalidad*/
    /*---------------------------------------------------------*/


    //Habilitar cuestionario de personalidad        
    $(document).on("click", ".btnEvaluarPersonalidad", function () {
        fila = $(this).closest("tr");
        dui = parseInt(fila.find('td:eq(1)').text());
        nombre = fila.find('td:eq(2)').text();
        opcion = 3;
        valorEvaluacion=1;
        $.ajax({
            url: "../bd/evaluarEmpleados.php",
            type: "POST",
            datatype: "json",
            data: { dui: dui, opcion: opcion, valorEvaluacion: valorEvaluacion },
            success: function (data) {
                Swal.fire(
                    'En curso!',
                    nombre+' ya puede realizar la evaluación de personalidad',
                    'success'
                );
            }
        });
        
    });

    //Deshabilitar cuestionario de personalidad     
    $(document).on("click", ".btnCanEvalPersonalidad", function () 
    {
        
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
                fila = $(this).closest("tr");
                dui = parseInt(fila.find('td:eq(1)').text());
                opcion = 3;
                valorEvaluacion=0;
                $.ajax({
                    url: "../bd/evaluarEmpleados.php",
                    type: "POST",
                    datatype: "json",
                    data: { dui: dui, opcion: opcion, valorEvaluacion: valorEvaluacion },
                    success: function (data) {
                        Swal.fire(
                            'Cancelada!',
                            'La evaluación de personalidad ha sido deshabilitada para '+nombre,
                            'success'
                        );
                    }
                });
            }
        })
        
    });

    /*---------------------------------------------------------*/
    /*Evaluacion Proyectiva*/
    /*---------------------------------------------------------*/


    //Habilitar cuestionario proyectivo        
    $(document).on("click", ".btnEvaluarProyectiva", function () {
        fila = $(this).closest("tr");
        dui = parseInt(fila.find('td:eq(1)').text());
        nombre = fila.find('td:eq(2)').text();
        opcion = 4;
        valorEvaluacion=1;
        $.ajax({
            url: "../bd/evaluarEmpleados.php",
            type: "POST",
            datatype: "json",
            data: { dui: dui, opcion: opcion, valorEvaluacion: valorEvaluacion },
            success: function (data) {
                Swal.fire(
                    'En curso!',
                    nombre+' ya puede realizar la evaluación proyectiva',
                    'success'
                );
            }
        });
        
    });

    //Deshabilitar cuestionario proyectivo        
    $(document).on("click", ".btnCanEvalProyectiva", function () 
    {
        
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
                fila = $(this).closest("tr");
                dui = parseInt(fila.find('td:eq(1)').text());
                opcion = 4;
                valorEvaluacion=0;
                $.ajax({
                    url: "../bd/evaluarEmpleados.php",
                    type: "POST",
                    datatype: "json",
                    data: { dui: dui, opcion: opcion, valorEvaluacion: valorEvaluacion },
                    success: function (data) {
                        Swal.fire(
                            'Cancelada!',
                            'La evaluación proyectiva ha sido deshabilitada para '+nombre,
                            'success'
                        );
                    }
                });
            }
        })
        
    });

    /*---------------------------------------------------------*/
    /*Evaluacion emocional*/
    /*---------------------------------------------------------*/


    //Habilitar cuestionario emocional       
    $(document).on("click", ".btnEvaluarEmocional", function () {
        fila = $(this).closest("tr");
        dui = parseInt(fila.find('td:eq(1)').text());
        nombre = fila.find('td:eq(2)').text();
        opcion = 5;
        valorEvaluacion=1;
        $.ajax({
            url: "../bd/evaluarEmpleados.php",
            type: "POST",
            datatype: "json",
            data: { dui: dui, opcion: opcion, valorEvaluacion: valorEvaluacion },
            success: function (data) {
                Swal.fire(
                    'En curso!',
                    nombre+' ya puede realizar la evaluación emocional',
                    'success'
                );
            }
        });
        
    });

    //Deshabilitar cuestionario emocional        
    $(document).on("click", ".btnCanEvalEmocional", function () 
    {
        
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
                fila = $(this).closest("tr");
                dui = parseInt(fila.find('td:eq(1)').text());
                opcion = 5;
                valorEvaluacion=0;
                $.ajax({
                    url: "../bd/evaluarEmpleados.php",
                    type: "POST",
                    datatype: "json",
                    data: { dui: dui, opcion: opcion, valorEvaluacion: valorEvaluacion },
                    success: function (data) {
                        Swal.fire(
                            'Cancelada!',
                            'La evaluación emocional ha sido deshabilitada para '+nombre,
                            'success'
                        );
                    }
                });
            }
        })
        
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

