var startButton = document.querySelector("#start-button");
var questionContainer = document.querySelector("#question-container");
var questionEl = document.querySelector("#question");
var answerOneEl = document.querySelector("#answer-1");
var answerTwoEl = document.querySelector("#answer-2");
var answerThreeEl = document.querySelector("#answer-3");
var answerFourEl = document.querySelector("#answer-4");
var clockEl = document.querySelector("#timer");
var scoreEl = document.querySelector("#highscore");
var endEl= document.querySelector("#end");
var currentQuestion = 0;
var timeLeft = 30;
var result=[""];
var score=0;
var highScoreEl = document.querySelector("#highscore")

var questions = [{
    question: "What is Javascript?",
    answers: ["layout of web page", "adds style to website", "add interactivity to a website", "none of the above"],
    correct: "add interactivity to a website",
},
{
    question: "What is NOT a variable type?",
    answers: ["Numbers", "String", "Boolean", "if...else"],
    correct: "if...else",
},
{
    question:"How do we link a JavaScript page to an html?",
    answers: ["style.css", "script.js", "reset.css", "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"],
    correct: "script.js",
},
{
    question:"Where is the correct place to insert the script.js?",
    answers: ["head", "header", "section", "body"],
    correct: "body",
},
{
    question:"What is the correctly written IF statement?",
    answers: ["if i==5 then", "if i=5 then", "if(i==5)", "if i=5"],
    correct: "if(i==5)",
},]

function startGame() {
    questionContainer.classList.remove("hide")
    startButton.classList.add("hide")
    populateQuestion()
    timer()
    checkAnswer()
}
function populateQuestion() {
    for (var i=0; i<=questions.length; i++){
    result.push(questions[0]+ answerOneEl[0]);
    questionEl.textContent = questions[currentQuestion].question;
    answerOneEl.textContent = questions[currentQuestion].answers[0];
    answerTwoEl.textContent = questions[currentQuestion].answers[1];
    answerThreeEl.textContent = questions[currentQuestion].answers[2];
    answerFourEl.textContent = questions[currentQuestion].answers[3];
    };
    nextQuestion()
}
function nextQuestion() {
    // currentQuestion++;
    for(i=0; i<=questions.length; i++);
    currentQuestion++;
}

function timer() {
    interval = setInterval(function () {
        clockEl.textContent = timeLeft
        if (timeLeft > 1) {
            timeLeft--;
        } else {
            timeLeft == 0;
            // answerWrong();
        }
    }, 1000)
}

function timerDecrease() {
    if (count <= timeLeft) {
        counter.textContent = count;
        clockEl = count * gauge + "px";
        count++
    } else {
        (nextQuestions < lastQuestion);
        nextQuestions++;
        nextQuestion();
    }if (timeLeft == 0);
            clearInterval(timeLeft);
    scoreEl()
}

function checkAnswer(answers){
    if (answers==questions[currentQuestion].correct){
        score++;
        answerCorrect()
    }else{
        answerWrong();
    }
    if(currentQuestion< questions.length){
        currentQuestion++;
        nextQuestion()
    }else{clearInterval(timeLeft);
        gameOver();
}

function answerCorrect(){
    score++;
    nextQuestion()
}

function answerWrong(){
    timeLeft--;
    nextQuestion()
    
}
 
function gameOver() {    
endEl.classList.remove("display:none")
scoreEl.style.add('display:center')
if(i>currentQuestion){
    alert("Game Over");
}else{
    timeLeft==0;
    alert("Game Over")
}


var highScores = {
   student: student.value,
  grade: grade.value,
 };
localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
renderMessage();

 function renderMessage() {




 }
startButton.addEventListener("click", startGame);
answerOneEl.addEventListener("click", populateQuestion);
answerTwoEl.addEventListener("click", populateQuestion);
answerThreeEl.addEventListener("click", nextQuestion);
answerFourEl.addEventListener("click", nextQuestion);
