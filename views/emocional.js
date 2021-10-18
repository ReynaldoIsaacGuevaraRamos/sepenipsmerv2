$(document).ready(function () {
    
    /*---------------------------------------------------------*/
    /*variables globales*/
    /*---------------------------------------------------------*/
    //Guarda las respuestas de la evaluacion
    var respuestas = new Array(24);
    //Nos indica en que pregunta nos encontramos
    var indice=0;
    //Si retrocedemos esta variable nos indicara hasta donde contestamos
    var respuestaAlcanzada=0;
    //Respuesta del usuario
    var respuestaSuperior, respuestaInferior;

    /*---------------------------------------------------------*/
    /*acciones iniciales*/
    /*---------------------------------------------------------*/
    //Deshabilitamos boton de siguiente y anterior
    //$("#btnSiguiente").attr('disabled', true);
    //$(".btnAnterior").attr('disabled', true);
    //Ocultamos boton submit Terminar
    $('#btnTerminar').hide();


    /*---------------------------------------------------------*/
    /*Acciones al hacer clic en el Boton siguiente*/
    /*---------------------------------------------------------*/
    $('#btnSiguiente').click(function ()
    {
        //Activamos el boton anterior
        $(".btnAnterior").attr('disabled', false);

        //Se guarda la respuesta
        respuestas[indice]= respuestaSuperior+respuestaInferior;
        //Se ponen en null las respuestas nuevamente
        respuestaSuperior=null;
        respuestaInferior= null;

        //Verificamos que no nos sobrepasemos de la pregunta 24
        if(indice<24)
        {   
            //Si el indice es igual a respuesta alcanzada, este aumenta su valor
            if(indice==respuestaAlcanzada)
            {
                ++respuestaAlcanzada;
            }
            //Se aumenta indice
            indice += 4;
            //Se modifica la leyenda y la imagen de la evaluacion
            $("#leyendaIndice1").html('Pregunta '+(indice+1)+' de 24');
            $("#leyendaIndice2").html('Pregunta '+(indice+2)+' de 24');
            $("#leyendaIndice3").html('Pregunta '+(indice+3)+' de 24');
            $("#leyendaIndice4").html('Pregunta '+(indice+4)+' de 24');

            var preguntas = ["Dejo que mis sentimientos afecten a mis pensamientos.",
            "Pienso en mi estado de ánimo constantemente.", 
            "A menudo pienso en mis sentimientos.", 
            "Presto mucha atención a cómo me siento.", 
            "Tengo claros mis sentimientos.", 
            "Frecuentemente puedo definir mis sentimientos.",
            "Casi siempre sé cómo me siento.", 
            "Normalmente conozco mis sentimientos sobre las personas.", 
            "A menudo me doy cuenta de mis sentimientos en diferentes situaciones.", 
            "Siempre puedo decir cómo me siento.", 
            "A veces puedo decir cuáles son mis emociones.", 
            "Puedo llegar a comprender mis sentimientos.", 
            "Aunque a veces me siento triste, suelo tener una visión positiva.", 
            "Aunque me sienta mal, procuro pensar en cosas agradables.", 
            "Cuando estoy triste, pienso en todos los placeres de la vida.", 
            "Intento tener pensamientos positivos, aunque me sienta mal.", 
            "Si doy demasiadas vueltas a las cosas, complicándolas, trato de calmarme.", 
            "Me preocupo por tener un buen estado de ánimo.",
            "Tengo mucha energía cuando me siento feliz",
            "Cuando estoy enfadado intento cambiar mi estado de ánimo."];

            // for(var i = 0; i <= preguntas.length; i++){
            //     $("#pregunta1").html(preguntas[i]);
            //     $("#pregunta2").html(preguntas[i]);
            //     $("#pregunta3").html(preguntas[i]);
            //     $("#pregunta4").html(preguntas[i]);
            //     $("#pregunta5").html(preguntas[i]);
            // }
           
            var a6 = "Dejo que mis sentimientos afecten a mis pensamientos.";
            var a7 = "Pienso en mi estado de ánimo constantemente.";
            var a8 = "A menudo pienso en mis sentimientos.";
            var a9 = "Presto mucha atención a cómo me siento.";


            $("#pregunta1").html(a6);
            $("#pregunta2").html(a7);
            $("#pregunta3").html(a8);
            $("#pregunta4").html(a9);

            //Se deshabilita de nuevo el boton siguiente
  //          $("#btnSiguiente").attr('disabled', true);


            //Si se esta en la pregunta 48, se oculta el boton siguiente y se muestra el boton terminar
            if(indice==20){
                $('#btnTerminar').show();
                //$("#btnTerminar").attr('disabled', true); //Deshabilitamos el boton siguiente
                $('#btnSiguiente').hide();
            }

            //verificamos si ya se respondio la pregunta a mostrar
            if(indice<=respuestaAlcanzada)
            {
                //Si ya la habia contestado, se muestra la respuestas respectiva
                respuestaSuperior=respuestas[indice].charAt(0); //Obtenemos respuestas dado superior
                respuestaInferior=respuestas[indice].charAt(1); //Obtenemos respuestas dado inferior

            }
        }
    });

});

