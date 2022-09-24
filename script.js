console.log()

let questionEl = document.getElementById("question-text");
let choiceA = document.getElementById("A");
let choiceB = document.getElementById("B");
let choiceC = document.getElementById("C");
let choiceD = document.getElementById("D");
let confirmAnswer = document.getElementById("confirm");
let btnClass = document.querySelector("choice");
let scoreKeeper = document.getElementById("score-keeper");

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
let startBtn = document.getElementById("start-quiz");
const quizTimer = document.getElementById("timer");
const quizBox = document.querySelector("quiz-box");
let score = 0;
let maxScore = score[Questions.length]



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



// HTML = things I need to hide/ hiding elements



//high scores are local storage

// localStorage.setItem("score", "0")

// JSON.stringify()
// JSON.parse()

//make a div that is hidden that appears when it is over.

let secondsLeft = 20;

function setTime() {
  let timerInterval = setInterval(function() {
    if (secondsLeft <=0) { 
      clearInterval(timerInterval)
      localStorage.setItem("Final Score", score);
      location.assign("./index2.html")
    } else if (secondsLeft <= 20) {
      quizTimer.textContent = "Time: " + secondsLeft;
      secondsLeft--;
    }
  }, 1000);
}



startBtn.addEventListener('click', function() {
  document.getElementById("start-quiz").replaceWith("");
  quizTimer.textContent = secondsLeft;
  renderQuestion();
  return setTime();
});

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
    secondsLeft -= 5
    return
  }

}

function calcScore() {
  score += 3
    scoreKeeper.textContent = "Your score is: " + score;
  }

// High Score:

// DOM Manipulation with Local Storage


// write Score to local Storage
// call local St