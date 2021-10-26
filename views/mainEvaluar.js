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
            { "data": "state_inteligencia" },
            { "defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btn-sm btnEvaluarPersonalidad'><i class='fas fa-fw fa-play'></i></button><button class='btn btn-danger btn-sm btnCanEvalPersonalidad'><i class='fas fa-fw fa-times'></i></button></div></div>" },
            { "data": "state_personalidad" },
            { "defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btn-sm btnEvaluarProyectiva'><i class='fas fa-fw fa-play'></i></button><button class='btn btn-danger btn-sm btnCanEvalProyectiva'><i class='fas fa-fw fa-times'></i></button></div></div>" },
            { "data": "state_proyectiva" },
            { "defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btn-sm btnEvaluarEmocional'><i class='fas fa-fw fa-play'></i></button><button class='btn btn-danger btn-sm btnCanEvalEmocional'><i class='fas fa-fw fa-times'></i></button></div></div>" },
            { "data": "state_emocional" }
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
                tablaEvaluar.ajax.reload(null, false);
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
                nombre = fila.find('td:eq(2)').text();
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
                        tablaEvaluar.ajax.reload(null, false);
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
                tablaEvaluar.ajax.reload(null, false);
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
                nombre = fila.find('td:eq(2)').text();
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
                        tablaEvaluar.ajax.reload(null, false);
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
                tablaEvaluar.ajax.reload(null, false);
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
                nombre = fila.find('td:eq(2)').text();
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
                        tablaEvaluar.ajax.reload(null, false);
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
                tablaEvaluar.ajax.reload(null, false);
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
                nombre = fila.find('td:eq(2)').text();
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
                        tablaEvaluar.ajax.reload(null, false);
                    }
                });
            }
        })
        
    });


});

