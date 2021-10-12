$(document).ready(function () {
    
    //  Cambia cara del dado superior segun boton seleccionado
    $('#dadoSuperior button').on('click', function() {
        var thisBtn = $(this);
        
        thisBtn.addClass('active').siblings().removeClass('active');
        var btnValue = thisBtn.val();
        if(btnValue == "0")
        {
            $("#caraSuperiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-0.svg" width="50" height="50"/>');
        }
        else if(btnValue == "1")
        {
            $("#caraSuperiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-1.svg" width="50" height="50"/>');
        }
        else if(btnValue == "2")
        {
            $("#caraSuperiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-2.svg" width="50" height="50"/>');
        }
        else if(btnValue == "3")
        {
            $("#caraSuperiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-3.svg" width="50" height="50"/>');
        }
        else if(btnValue == "4")
        {
            $("#caraSuperiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-4.svg" width="50" height="50"/>');
        }
        else if(btnValue == "5")
        {
            $("#caraSuperiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-5.svg" width="50" height="50"/>');
        }
        else if(btnValue == "6")
        {
            $("#caraSuperiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-6.svg" width="50" height="50"/>');
        }
        else{
            $("#caraSuperiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-0.svg" width="50" height="50"/>');
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
        }
        else if(btnValue == "1")
        {
            $("#caraInferiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-1.svg" width="50" height="50"/>');
        }
        else if(btnValue == "2")
        {
            $("#caraInferiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-2.svg" width="50" height="50"/>');
        }
        else if(btnValue == "3")
        {
            $("#caraInferiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-3.svg" width="50" height="50"/>');
        }
        else if(btnValue == "4")
        {
            $("#caraInferiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-4.svg" width="50" height="50"/>');
        }
        else if(btnValue == "5")
        {
            $("#caraInferiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-5.svg" width="50" height="50"/>');
        }
        else if(btnValue == "6")
        {
            $("#caraInferiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-6.svg" width="50" height="50"/>');
        }
        else{
            $("#caraInferiorDado").html('<img src = "../../img/evaluacionInteligencia/iconos/dice-0.svg" width="50" height="50"/>');
        }
      });



});

