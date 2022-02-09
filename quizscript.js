var startButtonEl= document.getElementById("start-button");
var questionContainerEl= document.getElementById("question-container");
var questionEl= document.getElementById("question-text");
var answersEl= document.getElementById("answers");
var aEl= document.getElementById("answer-1");
var bEl= document.getElementById("answer-2");
var cEl= document.getElementById("answer-3");
var dEl= document.getElementById("answer-4");
var timerEl= document.getElementById("timer");
var gameOverEl= document.getElementById("end");
var highScoreEl= document.getElementById("high-score")
var result=[""];
var currentQuestion=0;

var quiz=[{
    question:"What is JavaScript?",
    a:"layout of web page",
    b:"adds style to web page",
    c:"adds interactivity to a web page",
    d:"none of the above",
    correct:"c",
},
{   question:"What is NOT a variable type?",
    a:"Numbers",
    b:"String",
    c:"Boolean",
    d:"if...else",
    correct:"d",
},
{
    question:"How do we link a JavaScript page to an html",
    a:"style.css",
    b:"script.js",
    c:"reset.css",
    d:"bootstrap",
    correct:"b",
},
{
    question:"Where is the correct place to insert the script.js?",
    a:"head",
    b:"header",
    c:"section",
    d:"body",
    correct:"d",
},
{
    question:"What is the correctly written IF statement?",
    a:"if i==5 then",
    b:"if i=5 then",
    c:"if (i==5) then",
    d:"if i=5",
    correct:"c",
}]

var timeLeft=10

// start button starts timer and quiz
function startGame(){
    questionContainerEl.classList.remove("hide")
    answersEl.style.display="block"
    startButtonEl.classList.add("hide")
    clock()
    populateQuestion()
}

// questions
    // populate question
    function populateQuestion(){
        let quizData=quiz[currentQuestion];
        questionEl.innerText= quizData.question;
        // console.log(quiz)
        aEl.innerText= quizData.a;
        bEl.innerText= quizData.b;
        cEl.innerText= quizData.c;
        dEl.innerText= quizData.d;
        for (let currentQuestion=0; currentQuestion<=quiz.length; currentQuestion++){
            currentQuestion++;
           }
    }
    // next question
    // function nextQuestion(){
    // for (let currentQuestion=0; currentQuestion<=quiz.length; currentQuestion++){
    //  currentQuestion++;
    // }
    // }

    function checkAnswer(answer){

    }
    // right answer
    // wrong answer

// timer
function clock(){
    interval = setInterval(function () {
         timerEl.textContent = timeLeft
        if (timeLeft > 1){
            timeLeft--;
        } else {
             timeLeft == 0;
            // answerWrong();
        }
    }, 1000)
}

    // decrease when answer is wrong
    // timer runs out game over

// game over when questions are done, time ran out
function gameEnd (){

}
// highscore
function scoreBoard(){

}
    // store in local storage
    // show at end-initials

startButtonEl.addEventListener("click", startGame)
aEl.addEventListener("click",nextQuestion)
bEl.addEventListener("click",nextQuestion)
cEl.addEventListener("click",nextQuestion)
dEl.addEventListener("click",nextQuestion)