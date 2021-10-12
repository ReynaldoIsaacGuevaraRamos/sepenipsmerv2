$(document).ready(function () {
    
    //respuestas a guardar
    var respuestas = new Array(48);
    //Nos indica en que pregunta nos encontramos
    var indice=0;
    //Respuesta del usuario
    var respuestaSuperior, respuestaInferior;
    //Deshabilitamos boton de siguiente
    $("#btnSiguiente").attr('disabled', true); //Desabilito el Botton

    //  Cambia cara del dado superior segun boton seleccionado
    $('#dadoSuperior button').on('click', function() {
        var thisBtn = $(this);
        
        thisBtn.addClass('active').siblings().removeClass('active');
        var btnValue = thisBtn.val();
        if(btnValue == "0")
        {
            $("#caraSuperiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-0.svg" width="50" height="50"/>');
            respuestaSuperior=btnValue;
        }
        else if(btnValue == "1")
        {
            $("#caraSuperiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-1.svg" width="50" height="50"/>');
            respuestaSuperior=btnValue;
        }
        else if(btnValue == "2")
        {
            $("#caraSuperiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-2.svg" width="50" height="50"/>');
            respuestaSuperior=btnValue;
        }
        else if(btnValue == "3")
        {
            $("#caraSuperiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-3.svg" width="50" height="50"/>');
            respuestaSuperior=btnValue;
        }
        else if(btnValue == "4")
        {
            $("#caraSuperiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-4.svg" width="50" height="50"/>');
            respuestaSuperior=btnValue;
        }
        else if(btnValue == "5")
        {
            $("#caraSuperiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-5.svg" width="50" height="50"/>');
            respuestaSuperior=btnValue;
        }
        else if(btnValue == "6")
        {
            $("#caraSuperiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-6.svg" width="50" height="50"/>');
            respuestaSuperior=btnValue;
        }
        else{
            $("#caraSuperiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-0.svg" width="50" height="50"/>');
        }

        //Verificamos si ya selecciono ambas caras del dado
        if(respuestaInferior!=null && respuestaSuperior!=null){
            $("#btnSiguiente").attr('disabled', false); //Desabilito el Botton
        }

      });

    //  Cambia cara del dado inferior segun boton seleccionado
      $('#dadoInferior button').on('click', function() {
        var thisBtn = $(this);
        
        thisBtn.addClass('active').siblings().removeClass('active');
        var btnValue = thisBtn.val();
        if(btnValue == "0")
        {
            $("#caraInferiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-0.svg" width="50" height="50"/>');
            respuestaInferior= btnValue;
        }
        else if(btnValue == "1")
        {
            $("#caraInferiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-1.svg" width="50" height="50"/>');
            respuestaInferior= btnValue;
        }
        else if(btnValue == "2")
        {
            $("#caraInferiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-2.svg" width="50" height="50"/>');
            respuestaInferior= btnValue;
        }
        else if(btnValue == "3")
        {
            $("#caraInferiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-3.svg" width="50" height="50"/>');
            respuestaInferior= btnValue;
        }
        else if(btnValue == "4")
        {
            $("#caraInferiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-4.svg" width="50" height="50"/>');
            respuestaInferior= btnValue;
        }
        else if(btnValue == "5")
        {
            $("#caraInferiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-5.svg" width="50" height="50"/>');
            respuestaInferior= btnValue;
        }
        else if(btnValue == "6")
        {
            $("#caraInferiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-6.svg" width="50" height="50"/>');
            respuestaInferior= btnValue;
        }
        else{
            $("#caraInferiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-0.svg" width="50" height="50"/>');
        }

        //Verificamos si ya selecciono ambas caras del dado
        if(respuestaInferior!=null && respuestaSuperior!=null){
            $("#btnSiguiente").attr('disabled', false); //Desabilito el Botton
        }

      });

      
      //submit siguiente pregunta
    $('#formularioEvaluacionInteligencia').submit(function (e) {
        e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página

        //Verificamos que no nos sobrepasemos del numero de preguntas

        if(indice<47)
        {
            //Se guarda la respuesta
            respuestas[indice]= respuestaInferior+respuestaSuperior;
            //Se ponen en null las respuestas nuevamente
            respuestaSuperior=null;
            respuestaInferior= null;

            //Se aumenta indice
            indice++;

            //Se modifica la leyenda y la imagen de la evaluacion
            $("#leyendaIndice").html('Pregunta '+(indice+1)+' de 48');
            $("#imagenPregunta").html('<img src="../../img/evaluacionInteligencia/'+(indice+1)+'.gif" width="300" height="300" />');

            //Se deshabilita de nuevo el boton siguiente
            $("#btnSiguiente").attr('disabled', true);
            //Tambien se deshabilitan los botones de respuestas
            $('#dadoSuperior button').siblings().removeClass('active');
            $("#caraSuperiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-0.svg" width="50" height="50"/>');
            $('#dadoInferior button').siblings().removeClass('active');
            $("#caraInferiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-0.svg" width="50" height="50"/>');

        }

        dui = $.trim($('#dui').val());
        nombre = $.trim($('#nombre').val());
        apellido = $.trim($('#apellido').val());
        correo = $.trim($('#correo').val());
        cargo = $.trim($('#cargo').val());
        telefono = $.trim($('#telefono').val());
        sexo = $.trim($('#sexo').val());
        fechaNacimiento = $.trim($('#fechaNacimiento').val());
        $.ajax({
            url: "../bd/crudEmpleados.php",
            type: "POST",
            datatype: "json",
            data: { id: id, dui: dui, nombre: nombre, apellido: apellido, correo: correo, cargo: cargo, telefono: telefono, sexo: sexo, fechaNacimiento: fechaNacimiento, opcion: opcion },
            success: function (data) {
                tablaEmpleados.ajax.reload(null, false);
            }
        });
        $('#modalCRUDAdmin').modal('hide');
        });



});

