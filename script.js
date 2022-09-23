console.log()

var startBtn = document.getElementById("start-quiz");
const quizTimer = document.getElementById("timer");
const quizBox = document.querySelector("quiz-box");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");

const questionEl = document.createElement("question-text").textContent;


const Questions = [
    {
        question: 'The condition in an if/else statement is enclosed within: ',
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        correct: "curly brackets"
      }, {
        question: 'Arrays in JavaScript can be used to store: ', 
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correct: "all of the above"
      }, {
        question: 'String values must be closed within this when being assigned to variables: ', 
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        correct: "quotes"
      }];

let lastQuestionIndex = Questions.length;
let currentQuestionIndex = 0;


function renderQuestion(){
    let pQuestion = Questions[currentQuestionIndex];
    Questions[currentQuestionIndex].innerHTML = "<h2>" + pQuestion.question + "</h2>";
    choiceA.innerhtml = pQuestion.choices[0];
    choiceB.innerhtml = pQuestion.choices[1];
    choiceC.innerhtml = pQuestion.choices[2];
    choiceD.innerhtml = pQuestion.choices[3];
    console.log(pQuestion.question);
    questionEl.textContent = pQuestion.question
}






// Use a for loop regarding currentQuestionIndex so it counts up.
// Loop through and display all options in one button div. Create element of button for all for loops
// create div and appendChild for each to make it so that JavaScript creates the button

// HTML = things I need to hide/ hiding elements



//high scores are local storage

//button 



let secondsLeft = 75;
let count = 0;

function setTime() {
  let timerInterval = setInterval(function() {
    if (secondsLeft <= 75) {
      quizTimer.textContent = "Time: " + secondsLeft;
      secondsLeft--;
    if(secondsLeft <= 0)
      clearInterval(timerInterval);
      return
    }
  }, 1000);
}

// function to end the game at '0'
  

startBtn.addEventListener('click', function() {
  document.getElementById("start-quiz").innerhtml
  quizTimer.textContent = secondsLeft;
  renderQuestion();
  return setTime();
});

function checkAnswer(index) {
  console.log(index);
  if (Questions[currentQuestionIndex].choices[index] === Questions[currentQuestionIndex].correct) {
    currentQuestionIndex++
    renderQuestion();
  } else {
    return
  }
}