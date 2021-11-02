$(document).ready(function () {

    //Recuperamos valor de respuestas correctas
    //var respuestasCorrectas = localStorage.getItem('respuestasCorrectas');
    var respuestasCorrectas = 5;
    //Obtenemos los valores de los percentiles y el rango por medio de los metodos correspondientes
    percentiles=calcularPercentiles(respuestasCorrectas);
    rango=calcularRango(percentiles);

    
    //Se muestran las respuestas correctas obtnidas por el usuario
    $('#respuestasCorrectas').html('Respuestas correctas: '+respuestasCorrectas);  
    //Se muestra el rango en el que el empleado ha sido catalogado  
    $('#rango').html('Rango: '+ rango);
    //Se muestra un interpretacion de los percentiles
    $('#percentiles').html('El '+percentiles+'% de los evaluados obtiene puntuaciones por debajo de '+respuestasCorrectas);
    //Guardamos datos en BD
    try{
        guardarDatos(rango, percentiles);
    }catch (error) {
        console.error(error);
      }
    //Se borra el localstorage
    //localStorage.removeItem('respuestasCorrectas');

    //Funcion que calcula los percentiles. Recibe como parametro las respuestas correctas del empleado
    function calcularPercentiles(respuestasCorrectas)
    {
        var percentiles=0;
        //Se calculan los percentiles
        if(respuestasCorrectas<16){
            percentiles=1;
        }
        else if(respuestasCorrectas<20){
            percentiles=5;
        }
        else if(respuestasCorrectas<24){
            percentiles=10;
        }
        else if(respuestasCorrectas==24){
            percentiles=20;
        }
        else if(respuestasCorrectas==25){
            percentiles=25;
        }
        else if(respuestasCorrectas<29){
            percentiles=30;
        }
        else if(respuestasCorrectas<31){
            percentiles=40;
        }
        else if(respuestasCorrectas<33){
            percentiles=50;
        }
        else if(respuestasCorrectas<35){
            percentiles=60;
        }
        else if(respuestasCorrectas==35){
            percentiles=70;
        }
        else if(respuestasCorrectas==36){
            percentiles=75;
        }
        else if(respuestasCorrectas<40){
            percentiles=80;
        }
        else if(respuestasCorrectas<45){
            percentiles=95;
        }
        else{
            percentiles=99;
        }

        return percentiles;
    }

    //Funcion que calcula el rango del empleado segun su percentil
 function calcularRango(percentiles)
 {
     //Se calcula el rango
    var rango="";
    if(percentiles<10){
        rango="Deficiente";
    }
    else if(percentiles<50){
        rango="Inferior al termino medio";
    }
    else if(percentiles<75){
        rango="Termino medio";
    }
    else if(percentiles<95){
        rango="Superior al termino medio";
    }
    else{
        rango="Superior";
    }

    return rango;
}

//Funcion que guarda la informacion en la BD
function guardarDatos(rango, percentiles){

    var opcion=1;
    //Obtenemos fecha formateada
    var date = new Date();
    const formatDate = (current_datetime)=>{
    let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();
    return formatted_date;
    }
    fechaEvaluacion=formatDate(date);

    //Enviamos datos a BD
    $.ajax({
        url: "../../bd/guardarResultadoInteligencia.php",
        type: "POST",
        datatype: "json",
        data: { rango: rango, percentiles: percentiles, fechaEvaluacion: fechaEvaluacion, opcion: opcion},
        success: function (data) {
            console.log("Datos guardados en BD: Percentiles= "+percentiles+', rango= '+rango+', fecha= '+fechaEvaluacion);
        }
    });
}

});

