console.log()

let questionEl = document.getElementById("question-text");
let choiceA = document.getElementById("A");
let choiceB = document.getElementById("B");
let choiceC = document.getElementById("C");
let choiceD = document.getElementById("D");

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



let currentQuestionIndex = 0;

var startBtn = document.getElementById("start-quiz");
const quizTimer = document.getElementById("timer");
const quizBox = document.querySelector("quiz-box");



function renderQuestion(){
    const pQuestion = Questions[currentQuestionIndex];
    const QuestionText = pQuestion.question;
    questionEl.textContent = QuestionText;
    const CurrentChoiceA = pQuestion.choices[0];
    const CurrentChoiceB = pQuestion.choices[1];
    const CurrentChoiceC = pQuestion.choices[2];
    const CurrentChoiceD = pQuestion.choices[3];
    choiceA.textContent = CurrentChoiceA;
    choiceB.textContent = CurrentChoiceB;
    choiceC.textContent = CurrentChoiceC;
    choiceD.textContent = CurrentChoiceD;

    console.log(pQuestion.question);
    
}


// Use a for loop regarding currentQuestionIndex so it counts up.
// Loop through and display all options in one button div. Create element of button for all for loops
// create div and appendChild for each to make it so that JavaScript creates the button

// HTML = things I need to hide/ hiding elements



//high scores are local storage

//button 

localStorage.setItem("score", "0")

JSON.stringify()
JSON.parse()

//make a div that is hidden that appears when it is over.

let secondsLeft = 75;
let count = 0;

function setTime() {
  let timerInterval = setInterval(function() {
    if (secondsLeft <= 75) {
      quizTimer.textContent = "Time: " + secondsLeft;
      secondsLeft--;
    if(secondsLeft < 0)
      clearInterval(timerInterval);
      return
    }
  }, 1000);
}

// function to end the game at '0'
  

startBtn.addEventListener('click', function() {
  document.getElementById("start-quiz").replaceWith("");
  quizTimer.textContent = secondsLeft;
  renderQuestion();
  return setTime();
});

function checkAnswer(index) {
  console.log(index);
  if (Questions[currentQuestionIndex].choices[index] === Questions[currentQuestionIndex].correct) {
      currentQuestionIndex++
      if (currentQuestionIndex < Questions.length) {
      renderQuestion();
      } else {
        location.assign("./index2.html")
      }
  } else {
    return
  }

  
}


// High Score:

// DOM Manipulation with Local Storage