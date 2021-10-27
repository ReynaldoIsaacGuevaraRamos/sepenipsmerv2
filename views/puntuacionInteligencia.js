$(document).ready(function () {

    //Recuperamos los valores de los resultados obtenidos por el empleado
    var respuestasCorrectas = localStorage.getItem('respuestasCorrectas');
    percentiles=localStorage.getItem('percentiles');
    rango=localStorage.getItem('rango');

    
    //Se muestran las respuestas
    $('#respuestasCorrectas').html('Respuestas correctas: '+respuestasCorrectas);    
    $('#rango').html('Rango: '+ rango);
    $('#percentiles').html('El '+percentiles+'% de los evaluados obtiene puntuaciones por debajo de '+respuestasCorrectas);

    //Se borra el localstorage
    localStorage.removeItem('respuestasCorrectas');
    localStorage.removeItem('percentiles');
    localStorage.removeItem('rango');

});

