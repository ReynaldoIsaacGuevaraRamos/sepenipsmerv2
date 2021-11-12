$(document).ready(function () {

    //Recuperamos los valores de los resultados obtenidos por el empleado
    var respuestasCorrectas = localStorage.getItem('respuestasCorrectas');
    percentiles=localStorage.getItem('percentiles');
    rango=localStorage.getItem('rango');

    
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
    localStorage.removeItem('respuestasCorrectas');
    localStorage.removeItem('percentiles');
    localStorage.removeItem('rango');


});

