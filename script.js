console.log()

const startBtn = document.querySelector("#start_quiz");
const quizTimer = document.querySelector("#timer");
const quizBox = document.querySelector("quiz-box");

const Questions = [
    {
        name: 'The condition in an if/else statement is enclosed within: ', 
        answerA: "quotes",
        answerB: "curly brackets",
        answerC: "parenthesis",
        answerD: "square brackets",
        correct: "B"
      }, {
        name: 'Arrays in JavaScript can be used to store: ', 
        answerA: "numbers and strings",
        answerB: "other arrays",
        answerC: "booleans",
        answerD: "all of the above",
        correct: "D"
      }, {
        name: 'String values must be closed within this when being assigned to variables: ', 
        answerA: "commas",
        answerB: "curly brackets",
        answerC: "quotes",
        answerD: "parenthesis",
        correct: "C"
      }
    ];

let lastQuestionIndex = Questions.length - 1;
let currentQuestionIndex = 0;


function renderQuestion(){
    let pQuestion = Questions[currentQuestionIndex];
    name.innerHTML = "<h2>" + pQuestion.name + "</h2>";
    answerA.innerhtml = pQuestion.answerA;
    answerB.innerhtml = pQuestion.answerB;
    answerC.innerhtml = pQuestion.answerC;
    answerD.innerhtml = pQuestion.answerD;
}

currentQuestionIndex++
renderQuestion();






