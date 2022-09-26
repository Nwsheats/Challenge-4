console.log()

// These are my initial variables to grab the ElementsById from the HTML fields.

let questionEl = document.getElementById("question-text");
let choiceA = document.getElementById("A");
let choiceB = document.getElementById("B");
let choiceC = document.getElementById("C");
let choiceD = document.getElementById("D");
let confirmAnswer = document.getElementById("confirm");
let btnClass = document.querySelector("choice");
let scoreKeeper = document.getElementById("score-keeper");

// This is my array of objects that hold the questions, the choices, and the correct answer for each of the 6 questions.

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
    }, {
      question: 'Inside which HTML element do we put the JavaScript?', 
      choices: ["<script>", "<JavaScript>", "<scripting>", "<js>"],
      correct: "<script>"
    }, {
      question: 'Which of the following is NOT an example of a statement', 
      choices: ["for", "to", "while", "break"],
      correct: "to"
    }, {
      question: 'What is the correct way to use camel case when declaring variables?', 
      choices: ["CamelCase", "camelcase", "camelCase", "all of the above"],
      correct: "camelCase"
    },
    ];


// currentQuestionIndex determines which question the user is on.
// startBtn is for the button to start the quiz.
// quizTimer is for the timer.
// score is set to 0.

let currentQuestionIndex = 0;
let startBtn = document.getElementById("start-quiz");
const quizTimer = document.getElementById("timer");
let score = 0;

// renderQuestion is my function designed to show the questions. The currentQuestionIndex is applied to Questions and assigned the variable pQuestion.
// QuestionText is the current index question and that replaces the "question-text" section of the HTML.
// CurrentChoice A-D do the same thing with the available choices, making them appear on the page.

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
}

// The buttons are hidden. This function changes the display to flex instead of none and makes them visible.

function showButtons() {
  document.getElementById("choices").style.display = "flex";
}

// secondsLeft is defined as 45 here.

let secondsLeft = 45;

// setTime is a function designed to tick down the clock. If secondsLeft is 0 or below, the score is logged in local storage,
// and the page navigates to index2.html
// Otherwise, it ticks down from 45 seconds, while the quizTimer shows Time: secondsLeft.
// secondsLeft will continue to deprecate at the rate of 1 second.

function setTime() {
  let timerInterval = setInterval(function() {
    if (secondsLeft <=0) { 
      clearInterval(timerInterval)
      localStorage.setItem("Final Score", score);
      location.assign("./index2.html")
    } else if (secondsLeft <= 45) {
      quizTimer.textContent = "Time: " + secondsLeft;
      secondsLeft--;
    }
  }, 1000);
}

// This is the Event Listener for the Start Quiz button, to make the button disappear after it is pressed
// The showButtons function above is run.
// The quizTimer.textContent section is repeated because it was originally disappearing when the button was pressed.
// renderQuestion function is run, so that the quiz can start and the first question can appear.
// setTime function is returned to start the clock.

startBtn.addEventListener('click', function() {
  document.getElementById("start-quiz").replaceWith("");
  showButtons();
  quizTimer.textContent = "Time: " + secondsLeft;
  renderQuestion();
  return setTime();
});

// checkAnswer is a function that checks the choice made by the user against the correct answer. If it is wrong, the text "wrong!" flashes
// and 10 seconds are removed from the timer.

// If it is correct, the text "Correct!" shows, the CalcScore function is run to display an accurate score, the CurrentQuestionIndex increases by 1, allowing for the next question
// and the renderQuestion function is run, as long as the currentQuestionIndex is less than the total number of questions.
// When the currentQuestionIndex reaches the total number of questions, the final score is set in Local Storage and the location is changed to .index2.html

function checkAnswer(index) {
  if (Questions[currentQuestionIndex].choices[index] === Questions[currentQuestionIndex].correct) {
      confirmAnswer.textContent = "Correct!"
      calcScore()
      currentQuestionIndex++
      if (currentQuestionIndex < Questions.length) {
      renderQuestion();
      } else {
        localStorage.setItem("Final Score", score);
        location.assign("./index2.html")
      }
  } else {
    confirmAnswer.textContent = "Wrong!"
    secondsLeft -= 10
    return
  }
}

// calcScore adds 5000 points per correct question and manages the score keeper that shows the current score.

function calcScore() {
  score += 5000
    scoreKeeper.textContent = "Your score is: " + score;
  }