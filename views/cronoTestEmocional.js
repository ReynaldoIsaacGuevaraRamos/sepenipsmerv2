//Tiempo que durara la evaluacion en 'minutos:segundos'
var minutos=20; //36 minuto
var segundos= 00; //0 segundos

function mostrarCronometro()
{

    var divReloj=document.getElementById('quiz-timer');//Elemento que contendra el reloj
    var reloj= document.getElementById("testclock"); //Elemento donde se mostrará el tiempo
    
    --segundos;//Cada segundo, se disminuye un segundo

    //Si el segundo es menor a cero, significa que ya pasó un minuto
    if(segundos==-1){
        segundos=59;//Se empieza nuevamente en el segundo 59
        --minutos;//Se disminuye un minuto
    }

    var horaAMostrar= minutos + ":" +segundos;

    //Si el tiempo es 10:00 se muestra alerta de peligro
    if(horaAMostrar=="10:0"){
        divReloj.innerHTML='<div class="alert alert-danger m-0 p-1">Tiempo <strong id="testclock">10:0</strong></div>';
    }

    reloj.innerHTML=horaAMostrar;//Se muestra el nuevo tiempo
    
    //Si el tiempo es 00:00 este se detiene
    if(horaAMostrar=="0:0"){
        reloj.innerHTML='Se acabó tu tiempo';
        clearInterval(intervalo);
    }
    
}

var intervalo = setInterval(mostrarCronometro,1000);//Se actualizará cada segundo