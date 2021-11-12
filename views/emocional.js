
var currentQuestion = 0;
var score = 0;
var toQuestions = questions.length;

var container = document.getElementById('quizContainer');
var pre = document.getElementById('pre');
var questionEl = document.getElementById('question');
var op1 = document.getElementById('pregA');
var op2 = document.getElementById('pregB');
var op3 = document.getElementById('pregC');
var op4 = document.getElementById('pregD');
var op5 = document.getElementById('pregE');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex){
    var q = questions[questionIndex];
    questionEl.textContent = q.question;
    pre.textContent = q.pre + (questionIndex + 1) + ' de 24';
    op1.textContent = q.option1;
    op2.textContent = q.option2;
    op3.textContent = q.option3;
    op4.textContent = q.option4;
    op5.textContent = q.option5;
};

function loadNextQuestion () {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    //$('#nextButton').attr("disabled", true);
    if(!selectedOption){
        alert('Por favor selecciona una respuesta');
        return;
    }

    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer){
        score += 10;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == toQuestions -1){
        nextButton.textContent = 'Finalizar prueba';
    }
    if(currentQuestion == toQuestions){
        container.style.display = 'none';
        document.getElementById('result').style.display = 'block';
        //resultCont.style.display = 'block';
        //resultCont.textContent = 'Tus respuestas: ' + score;
        return;
    }
    loadQuestion(currentQuestion);


    //GUARDAR SELECCION DEL USUARIO
    if(op1 = document.querySelector('input[type=radio]:checked')){
        op1.value(1)
    } else if(op2 = document.querySelector('input[type=radio]:checked')){
        op2.value(2)
    } else if(op3 = document.querySelector('input[type=radio]:checked')){
        op3.value(3)
    } else if(op4 = document.querySelector('input[type=radio]:checked')){
        op4.value(4)
    } else if(op5 = document.querySelector('input[type=radio]:checked')){
        op5.value(5)
    }

}
loadQuestion(currentQuestion);


