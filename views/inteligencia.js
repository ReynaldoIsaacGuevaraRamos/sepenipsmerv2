$(document).ready(function () {
    
    /*---------------------------------------------------------*/
    /*variables globales*/
    /*---------------------------------------------------------*/
    //Guarda las respuestas de la evaluacion
    var respuestas = new Array(48);
    //Nos indica en que pregunta nos encontramos
    var indice=0;
    //Si retrocedemos esta variable nos indicara hasta donde contestamos
    var respuestaAlcanzada=0;
    //Respuesta del usuario
    var respuestaSuperior, respuestaInferior;
    //Variable que contendrá el numero de respuestas correctas
    var respuestasCorrectas=0;

    /*---------------------------------------------------------*/
    /*acciones iniciales*/
    /*---------------------------------------------------------*/
    //Deshabilitamos boton de siguiente y anterior
    $("#btnSiguiente").attr('disabled', true);
    $(".btnAnterior").attr('disabled', true);
    //Ocultamos boton submit Terminar
    $('#btnTerminar').hide();

    /*---------------------------------------------------------*/
    /*  Cambia cara del dado superior segun boton seleccionado */
    /*---------------------------------------------------------*/
    $('#dadoSuperior button').on('click', function()
    {
        
        //boton seleccionado
        var thisBtn = $(this);
        //Se muestra el boton como activo
        thisBtn.addClass('active').siblings().removeClass('active');
        //Se guarda el valor del boton seleccionado
        var btnValue = thisBtn.val();

        //Se muestra al usuario la cara superior del dado seleccionado
        if(btnValue==2 || btnValue==3)
        {
            $("#caraSuperiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-'+btnValue+'.svg" width="35" height="35" style="transform:rotate(90deg);"/>');
            respuestaSuperior=btnValue;
        }else
        {
            $("#caraSuperiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-'+btnValue+'.svg" width="35" height="35"/>');
            respuestaSuperior=btnValue;
        }

        //Verificamos si ya selecciono ambas caras del dado
        if(respuestaInferior!=null && respuestaSuperior!=null){
            $("#btnSiguiente").attr('disabled', false); //Habilitamos el boton siguiente

            //Se guarda la respuesta
            respuestas[indice]= respuestaSuperior+respuestaInferior;

            //Si es la pregunta 48 habilitamos el boton 'terminar'
            if(indice==47){
                $("#btnTerminar").attr('disabled', false);
                //Por motivos de visualizacion de respuestas, tambien aumentamos respuestaAlcanzada
                respuestaAlcanzada=47;
            }
        }

    });

    /*---------------------------------------------------------*/
    /*  Cambia cara del dado inferior segun boton seleccionado */
    /*---------------------------------------------------------*/
      $('#dadoInferior button').on('click', function() 
      {
         //boton seleccionado
         var thisBtn = $(this);
         //Se muestra el boton como activo
         thisBtn.addClass('active').siblings().removeClass('active');
         //Se guarda el valor del boton seleccionado
         var btnValue = thisBtn.val();
 
         //Se muestra al usuario el boton seleccionado por medio del div carasuperiorDado
         if(btnValue==2 || btnValue==3)
         {
             $("#caraInferiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-'+btnValue+'.svg" width="35" height="35" style="transform:rotate(90deg);"/>');
             respuestaInferior=btnValue;
         }else
         {
             $("#caraInferiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-'+btnValue+'.svg" width="35" height="35"/>');
             respuestaInferior=btnValue;
         }

        //Verificamos si ya selecciono ambas caras del dado
        if(respuestaInferior!=null && respuestaSuperior!=null){

            $("#btnSiguiente").attr('disabled', false); //Habilitamos el boton siguiente

            //Se guarda la respuesta
            respuestas[indice]= respuestaSuperior+respuestaInferior;

            //Si ha seleccionado ambas caras del dado y es la pregunta 48 habilitamos el boton 'terminar'
            if(indice==47){
                $("#btnTerminar").attr('disabled', false);
                //Por motivos de visualizacion de respuestas, tambien aumentamos respuestaAlcanzada
                respuestaAlcanzada=47;
            }
        }

      });

    /*---------------------------------------------------------*/
    /*Aciiones al hacer clic en el Boton siguiente*/
    /*---------------------------------------------------------*/
    $('#btnSiguiente').click(function ()
    {
        //Activamos el boton anterior
        $(".btnAnterior").attr('disabled', false);

        //Se ponen en null las respuestas nuevamente
        respuestaSuperior=null;
        respuestaInferior= null;

        //Verificamos que no nos sobrepasemos de la pregunta 48
        if(indice<47)
        {   
            //Si el indice es igual a respuesta alcanzada, este aumenta su valor
            if(indice==respuestaAlcanzada)
            {
                ++respuestaAlcanzada;
            }
            //Se aumenta indice
            indice++;
            //Se modifica la leyenda y la imagen de la evaluacion
            $("#leyendaIndice").html('Pregunta '+(indice+1)+' de 48');
            $("#imagenPregunta").html('<img src="../../img/evaluacionInteligencia/'+(indice+1)+'.gif" width="225" height="225" />');

            //Se deshabilita de nuevo el boton siguiente
            $("#btnSiguiente").attr('disabled', true);

            //Tambien se deshabilitan los botones de respuestas
            $('#dadoSuperior button').siblings().removeClass('active');
            $("#caraSuperiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/question-square.svg" width="35" height="35"/>');
            $('#dadoInferior button').siblings().removeClass('active');
            $("#caraInferiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/question-square.svg" width="35" height="35"/>');

            //Si se esta en la pregunta 48, se oculta el boton siguiente y se muestra el boton terminar
            if(indice==47){
                $('#btnTerminar').show();
                $("#btnTerminar").attr('disabled', true); //Deshabilitamos el boton siguiente
                $('#btnSiguiente').hide();
            }

            //verificamos si ya se respondio la pregunta a mostrar
            if(indice<=respuestaAlcanzada && respuestas[indice]!=null)
            {
                //Si ya la habia contestado, se muestra la respuestas respectiva
                respuestaSuperior=respuestas[indice].charAt(0); //Obtenemos respuestas dado superior
                respuestaInferior=respuestas[indice].charAt(1); //Obtenemos respuestas dado inferior
                $('#'+respuestaSuperior+'s').click();
                $('#'+respuestaInferior+'i').click();
            }
        }
    });

    /*---------------------------------------------------------*/
    /*Acciones al hacer clic en el Boton anterior*/
    /*---------------------------------------------------------*/
    $(document).on("click", ".btnAnterior", function () {

        //disminuimos indice
        indice--;

        //Si se retrocede de la pregunta 48, se oculta el boton terminar y se muestra el boton siguiente
        if(indice==46){
            $('#btnSiguiente').show();
            $("#btnSiguiente").attr('disabled', true); //Deshabilitamos el boton siguiente
            $('#btnTerminar').hide();
        }
        //Se ponen en null las respuestas nuevamente
        respuestaSuperior=null;
        respuestaInferior= null;
        
        //Si nos encontramos en la pregunta 1 deshabilitamos el boton
        if(indice==0)
        {
            $(".btnAnterior").attr('disabled', true);
        }

        //Se modifica la leyenda y la imagen de la evaluacion
        $("#leyendaIndice").html('Pregunta '+(indice+1)+' de 48');
        $("#imagenPregunta").html('<img src="../../img/evaluacionInteligencia/'+(indice+1)+'.gif" width="225" height="225" />');
        //Se muestra las respuestas que el usuario habia seleccionado
        respuestaSuperior=respuestas[indice].charAt(0); //Obtenemos respuestas dado superior
        respuestaInferior=respuestas[indice].charAt(1); //Obtenemos respuestas dado inferior
        $('#'+respuestaSuperior+'s').click();
        $('#'+respuestaInferior+'i').click();
        
    });

    /*---------------------------------------------------------*/
    /*Al hacer clic en el boton terminar*/
    /*---------------------------------------------------------*/
    $('#formularioEvaluacionInteligencia').submit(function (e) {

        e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página
        window.onbeforeunload = null; //Desactiva el alert de prevencion al querer cerrar ventana

        //Calificamos la prueba realizada por el usuario
        var i=0;//indice para recorrer respuestas
        //Comparamos respuestas correctas almacenados en archivo json con las que seleccionó el usuario
        $.getJSON( "../respuestasCuestionarios/inteligencia.json", function( data ) {
            $.each( data, function( key, val ) {

                //Recorremos y comparamos cada respuesta
                while(i<48){

                    //Si la respuesta es correcta se aumenta la variable respuestasCorrectas
                    if(val[i].respuesta.toString() == respuestas[i]){
                        ++respuestasCorrectas;
                    }
                    ++i;
                }
                 //Guardamos las respuesta correctas en localStorage
                localStorage.setItem('respuestasCorrectas', respuestasCorrectas);
            });
        });

        //Se muestra ventana con las respuestas correctas, la puntuacion (percentiles) y el resultado de la evaluacion
        window.open("puntuacionInteligencia.php", "_self"); 
    });


});

