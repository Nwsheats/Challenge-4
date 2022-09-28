// defining variables, I used some jQuery here

let score = localStorage.getItem("Final Score");
let scoreCounter = document.getElementById("score-counter");
let scoreBtn = document.getElementById("score-btn");
let clearScore = document.getElementById("clear-score");
let input = document.getElementById("input-field");
let scoreList = $('#score-field');

let scoreArray = []


// this is load Event Listener designed to grab the score from Local Storage. If the score is null, it does not populate a value.
// if the score is not null, it shows the number.
// the number is pushed to the tempFScore array above.

addEventListener('load', (event) => {
    if (score == null) {
        scoreCounter.textContent = "Your final score is: ";
    } else {
        scoreCounter.textContent = "Your final score is: " + score;
    }});

// another load Event Listener designed to JSON parse the values that are put into local storage via an array below.
// if the scoreArray name and ScoreArray score are not null, the ScoreList section shows the stored information as a way of saved data.
// The entire reason why I went through a stringify and parse process for these values was because I believed that I could
// make several names and scores appear automatically as long as they were in Local Storage. I couldn't figure it out and could only get the last one to show.


addEventListener('load', (event) => {
    if (localStorage.getItem("highScores")) {
    scoreArray = JSON.parse(localStorage.getItem("highScores"));
    } else {
        scoreArray = []
    }
    console.log(scoreArray);
    for (let i = 0; i < scoreArray.length; i++) {
    if (scoreArray[i].name != null && scoreArray[i].score != null) {
        scoreList.append('<li>' + scoreArray[i].name + ": " + scoreArray[i].score + '</li>');
}}});

//jQuery to declare the score-form and clear-score element ids from HTML

let scoreFormEl = $('#score-form');
let clearFormEl = $('#clear-score');

//The function that takes the name entered in the input field, sends an alert if the Enter button is pushed without anything,
// disables the Enter button after it is pushed, so multiple inputs cannot be made, appends the data together into an unordered list,
// pushes the playerName and Score to the varScore object and stringifies it.
// Lastly, the scoreCounter is meant to not show a score after it has been input and enter is clicked.


function handleLogScore(event) {
  event.preventDefault();
  let playerName = $('input[name="input-field"]').val();
  if (!playerName) {
    alert('No name entered!');
    return;
  }
  scoreBtn.disabled = true
  scoreList.append('<li>' + playerName + ": " + score + '</li>');
  $('input[name="input-field"]').val('');
  let varScore = {
    name: playerName, score: score
  }
  scoreArray.push(varScore);
  localStorage.setItem("highScores", JSON.stringify(scoreArray));
  scoreCounter.textContent = "";
}

// a function to clear localStorage

function clearHighScore() {
    localStorage.clear();
}

// a jQuery on event to run handleLogScore when information is submitted 
// via the Score Form.

scoreFormEl.on('submit', handleLogScore) 

// a jQuery on event to run clearHighScore when the button is pushed.
// the HTML for this button links back to the same page, so after the localStorage is cleared, the page basically refreshes and is empty.

clearFormEl.on('click', clearHighScore)

