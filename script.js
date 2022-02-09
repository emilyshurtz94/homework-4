// var startButton = document.getElementById("start-button");
// var questionContainer = document.getElementById("question-container");
// var questionEl = document.getElementById("question");
// var answersEl=document.querySelector("answers")
// var aEl = document.getElementById("answer-1");
// var bEl = document.getElementById("answer-2");
// var cEl = document.getElementById("answer-3");
// var dEl = document.getElementById("answer-4");
// var clockEl = document.getElementById("timer");
// var scoreEl = document.getElementById("high-score");
// var endEl= document.getElementById("end");
// var currentQuestion=0
// var timeLeft = 30;
// var result=[""];
// var score=0;


// var quiz= [{
//     question: "What is Javascript?",
//     a:"layout of web page",
//     b:"adds style to website",
//     c:"add interactivity to a website",
//     d:"none of the above",
//     correct: "c",
// },
// {
//     question: "What is NOT a variable type?",
//     a:"Numbers",
//     b: "String", 
//     c:"Boolean", 
//     d:"if...else",
//     correct: "d",
// },
// {
//     question:"How do we link a JavaScript page to an html?",
//     a:"style.css",
//     b: "script.js",
//     c:"reset.css", 
//     d:"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css",
//     correct: "b",
// },
// {
//     question:"Where is the correct place to insert the script.js?",
//     a:"head",
//     b:"header",
//     c:"section",
//     d:"body",
//     correct: "d",
// },
// {
//     question:"What is the correctly written IF statement?",
//     a:"if i==5 then",
//     b:"if i=5 then",
//     c:"if(i==5)",
//     d:"if i=5",
//     correct: "c",
// },]
// var currentQuestionData = quiz[currentQuestion]

// function startGame() {
//     questionContainer.classList.remove("hide")
//     answersEl.style.display="block"
//     startButton.classList.add("hide")
//     populateQuiz()
//     timer()
//     nextQuestion()
// }
// function populateQuiz() {
//     questionEl.innerText = currentQuestionData.question;
//     aEl.innerText = currentQuestionData.a;
//     bEl.innerText = currentQuestionData.b;
//     cEl.innerText = currentQuestionData.c;
//     dEl.innerText = currentQuestionData.d;
// }

// function nextQuestion() {
//     for (currentQuestionData=0; currentQuestionData<=quiz.length; currentQuestionData++);
//     currentQuestionData++;
// }

// function timer() {
//     interval = setInterval(function () {
//         clockEl.textContent = timeLeft
//         if (timeLeft > 1) {
//             timeLeft--;
//         } else {
//             timeLeft == 0;
//             // answerWrong();
//         }
//     }, 1000)
// }

// function timerDecrease() {
//     if (count <= timeLeft) {
//         counter.textContent = count;
//         clockEl = count * gauge + "px";
//         count++
//     } else {
//         (nextQuestions < lastQuestion);
//         nextQuestions++;
//         nextQuestion();
//     }if (timeLeft == 0);
//             clearInterval(timeLeft);
//     scoreEl()
// }

// function checkAnswer(answers){
//     if (answers=quiz[currentQuestion].correct){
//         score++;
//         answerCorrect()
//     }else{
//         answerWrong();
//     }
//     if(currentQuestion< quiz.length){
//         currentQuestion++;
//         nextQuestion()
//     }else{clearInterval(timeLeft);
//         gameOver();
// }}

// function answerCorrect(){
//     score++;
//     timeLeft++;
//     nextQuestion()
// }

// function answerWrong(){
//     timeLeft--;
//     nextQuestion()
    
// }
 
// function gameOver() {    
// endEl.classList.remove("display:none")
// scoreEl.style.add('display:center')
// if(i>currentQuestion){
//     alert("Game Over");
// }else{
//     timeLeft==0;
//     alert("Game Over")
// }}

// var highScores = {
//    student: student.value,
//   grade: grade.value,
//  };
// localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
// renderMessage();

//  function renderMessage() {}

// startButton.addEventListener("click", startGame);
