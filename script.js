console.log()

var startBtn = document.getElementById("start-quiz");
const quizTimer = document.getElementById("timer");
const quizBox = document.querySelector("quiz-box");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");

const Questions = [
    {
        name: 'The condition in an if/else statement is enclosed within: ', 
        choiceA: "quotes",
        choiceB: "curly brackets",
        choiceC: "parenthesis",
        choiceD: "square brackets",
        correct: "B"
      }, {
        name: 'Arrays in JavaScript can be used to store: ', 
        choiceA: "numbers and strings",
        choiceB: "other arrays",
        choiceC: "booleans",
        choiceD: "all of the above",
        correct: "D"
      }, {
        name: 'String values must be closed within this when being assigned to variables: ', 
        choiceA: "commas",
        choiceB: "curly brackets",
        choiceC: "quotes",
        choiceD: "parenthesis",
        correct: "C"
      }
    ];

let lastQuestionIndex = Questions.length - 1;
let currentQuestionIndex = 0;


function renderQuestion(){
    let pQuestion = Questions[currentQuestionIndex];
    name.innerHTML = "<h2>" + pQuestion.name + "</h2>";
    choiceA.innerhtml = pQuestion.choiceA;
    choiceB.innerhtml = pQuestion.choiceB;
    choiceC.innerhtml = pQuestion.choiceC;
    choiceD.innerhtml = pQuestion.choiceD;
}

// Use a for loop regarding currentQuestionIndex so it counts up.
// Loop through and display all options in one button div. Create element of button for all for loops
// create div and appendChild for each to make it so that JavaScript creates the button

// HTML = things I need to hide/ hiding elements




currentQuestionIndex++
renderQuestion();

let secondsLeft = 75;
let count = 0;

function setTime() {
  let timerInterval = setInterval(function() {
    if (secondsLeft <= 75) {
      secondsLeft--;
      quizTimer.textContent = secondsLeft;
    if(secondsLeft === 0)
      clearInterval(timerInterval);
    }
  }, 1000);
}

// function to end the game at '0'
  

startBtn.addEventListener('click', function() {
  document.getElementById("start-quiz").innerhtml = "Hello World";
  quizTimer.textContent = secondsLeft;
  return setTime();
});