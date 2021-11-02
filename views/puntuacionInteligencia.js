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

