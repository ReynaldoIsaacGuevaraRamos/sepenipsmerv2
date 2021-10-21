$(document).ready(function () {
    
    //Recuperamos valor de respuestas correctas
    var value = localStorage.getItem('respuestasCorrectas');
    $('#respuestasCorrectas').html('Respuestas correctas: '+value);

});

