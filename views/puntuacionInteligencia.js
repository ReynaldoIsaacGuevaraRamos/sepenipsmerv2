$(document).ready(function () {

    //Recuperamos valor de respuestas correctas
    var respuestasCorrectas = localStorage.getItem('respuestasCorrectas');;
    percentiles=calcularPercentiles(respuestasCorrectas);
    rango=calcularRango(percentiles);

    
    //Se muestran las respuestas
    $('#respuestasCorrectas').html('Respuestas correctas: '+respuestasCorrectas);    
    $('#rango').html('Rango: '+ rango);
    $('#percentiles').html('El '+percentiles+'% de los evaluados obtiene puntuaciones por debajo de '+respuestasCorrectas);

    //Se borra el localstorage
    localStorage.removeItem('respuestasCorrectas');

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

});

