var startButtonEl = document.getElementById("start-button");
var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question-text");
var answersEl = document.getElementById("answers");
var aEl = document.getElementById("answer-1");
var bEl = document.getElementById("answer-2");
var cEl = document.getElementById("answer-3");
var dEl = document.getElementById("answer-4");
var timerEl = document.getElementById("timer");
var gameOverEl = document.getElementById("end");
var highScoreEl = document.getElementById("high-score")
var submitEl = document.getElementById('submit');
var playAgainEl = document.getElementById('play-again');
var highScoreStorage = JSON.parse(localStorage.getItem("high-score")) || [];

var result = [""];
var currentQuestion = 0;
var endGameFlag = false;

var quiz = [{
    question: "What is JavaScript?",
    a: "layout of web page",
    b: "adds style to web page",
    c: "adds interactivity to a web page",
    d: "none of the above",
    correct: "adds interactivity to a web page",
},
{
    question: "What is NOT a variable type?",
    a: "Numbers",
    b: "String",
    c: "Boolean",
    d: "if...else",
    correct: "if...else",
},
{
    question: "How do we link a JavaScript page to an html",
    a: "style.css",
    b: "script.js",
    c: "reset.css",
    d: "bootstrap",
    correct: "script.js",
},
{
    question: "Where is the correct place to insert the script.js?",
    a: "head",
    b: "header",
    c: "section",
    d: "body",
    correct: "body",
},
{
    question: "What is the correctly written IF statement?",
    a: "if i==5 then",
    b: "if i=5 then",
    c: "if (i==5) then",
    d: "if i=5",
    correct: "if (i==5) then",
}]

var timeLeft = 10

// start button starts timer and quiz
function startGame() {
    questionContainerEl.classList.remove("hide")
    answersEl.style.display = "block"
    startButtonEl.classList.add("hide")
    clock()
    populateQuestion()
}

// questions
// populate question
function populateQuestion() {
    let quizData = quiz[currentQuestion];
    questionEl.innerText = quizData.question;
    console.log(quiz)
    aEl.innerText = quizData.a;
    bEl.innerText = quizData.b;
    cEl.innerText = quizData.c;
    dEl.innerText = quizData.d;

}
// next question
function nextQuestion(event) {
    checkAnswer(event.target.textContent);
    currentQuestion++;
    gameEnd();
    if (!endGameFlag) {
        populateQuestion()
    }

}

function checkAnswer(answer) {

    if (answer === quiz[currentQuestion].correct) {
        timeLeft = timeLeft + 300;
    } else {
        timeLeft--;
    }
}
// right answer
// wrong answer

// timer
function clock() {
    interval = setInterval(function () {
        timerEl.textContent = timeLeft
        if (timeLeft > 1) {
            timeLeft--;
        } else {
            timeLeft = 0;
            timerEl.textContent = ""
            endGameFlag = true;
            clearInterval(interval);
            gameOverEl.style.display = "block";
            questionContainerEl.classList.add("hide");
            answersEl.style.display = "none";
            highScoreEl.style.display = "block"
        }
    }, 1000)
}

// decrease when answer is wrong
// timer runs out game over

// game over when questions are done, time ran out
function gameEnd() {
    if (currentQuestion === quiz.length) {
        endGameFlag = true;
        clearInterval(interval);
        gameOverEl.style.display = "block";
        questionContainerEl.classList.add("hide");
        answersEl.style.display = "none";
        highScoreEl.style.display = "block"

    }
}
// highscore
function scoreBoard() {
    var initialsEl =document.getElementById("initials");
    if(highScoreStorage){
        highScoreStorage.forEach(function (singleScore){
            var liEl = document.createElement('li');
            liEl.textContent= singleScore.initials+ " "+ singleScore.score;
            initialsEl.append(liEl)
        })
    }

    let text;
    let initials = prompt("Please enter your initials:");
    var userInfo = {
        initials: initials,
        score: timeLeft
    }
    if (initials == null || initials == "") {
        text = "User cancelled the prompt.";
    } else {
        highScoreStorage.push(userInfo)
        localStorage.setItem("high-score", JSON.stringify(highScoreStorage))
        text = initials+ " "+ timeLeft
        var newUser= document.createElement('li');
        newUser.textContent = text;
        initialsEl.append(newUser)
    }
}


// store in local storage
// show at end-initials

startButtonEl.addEventListener("click", startGame)
aEl.addEventListener("click", nextQuestion)
bEl.addEventListener("click", nextQuestion)
cEl.addEventListener("click", nextQuestion)
dEl.addEventListener("click", nextQuestion)
