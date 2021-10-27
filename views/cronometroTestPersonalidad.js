//Tiempo que durara la evaluacion en 'minutos:segundos'
var minutos=45; //36 minuto
var segundos=0; //0 segundos

function mostrarCronometro()
{

    var divReloj=document.getElementById('quiz-timer');//Elemento que contendra el reloj
    var reloj= document.getElementById("testclock"); //Elemento donde se mostrará el tiempo
    var formulario= document.getElementById("formularioEvaluacionPersonalidad"); //formulario de la prueba
    
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
    
    //Si el tiempo es 00:00 este se detiene y se termina el cuestionario
    if(horaAMostrar=="0:0"){

        clearInterval(intervalo);//Detenemos e tiempo

        //Se crea y se dispara un evento submit artificialmente
        const form = document.querySelector("#formularioEvaluacionPersonalidad");
        const formTrigger = form.querySelector("button.submit");
        const submitEvent = new SubmitEvent("submit", { submitter: formTrigger });
        form.dispatchEvent(submitEvent);
    }
    
}

var intervalo = setInterval(mostrarCronometro,1000);//Se actualizará cada segundo