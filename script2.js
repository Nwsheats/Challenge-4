// defining variables, I used some jQuery here

let score = localStorage.getItem("Final Score");
let scoreCounter = document.getElementById("score-counter");
let scoreBtn = document.getElementById("score-btn");
let clearScore = document.getElementById("clear-score");
let input = document.getElementById("input-field");
let scoreList = $('#score-field');

// these empty arrays were an attempt at something more difficult that I couldn't figure out
// but they exist to have values pushed to them so that they can be sent to Local Storage and back using JSON stringify and parsify.

let tempPName = [];
let tempFScore = [];

// this is load Event Listener designed to grab the score from Local Storage. If the score is null, it does not populate a value.
// if the score is not null, it shows the number.
// the number is pushed to the tempFScore array above.

addEventListener('load', (event) => {
    if (score == null) {
        scoreCounter.textContent = "Your final score is: ";
    } else {
        scoreCounter.textContent = "Your final score is: " + score;
        tempFScore.push(score);
    }});

// another load Event Listener designed to JSON parse the values that are put into local storage via an array below.
// if tempPName and tempFScore are not null, the ScoreList section shows the stored information as a way of saved data.
// The entire reason why I went through a stringify and parse process for these values was because I believed that I could
// make several names and scores appear automatically as long as they were in Local Storage. I couldn't figure it out and could only get the last one to show.


addEventListener('load', (event) => {
    let tempPName = JSON.parse(localStorage.getItem("Stored-Name"));
    let tempFScore = JSON.parse(localStorage.getItem("Stored-Final-Score"));
    if (tempPName && tempFScore != null) {
        scoreList.append('<li>' + tempPName + ": " + tempFScore + '</li>');
    } else {
        return
}});

//jQuery to declare the score-form and clear-score element ids from HTML

let scoreFormEl = $('#score-form');
let clearFormEl = $('#clear-score');

//The function that takes the name entered in the input field, sends an alert if the Enter button is pushed without anything,
// disables the Enter button after it is pushed, so multiple inputs cannot be made, appends the data together into an unordered list,
// pushes the playerName to the tempPName array, then takes the info in both tempPName and tempFScore and stringifies it.
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
  tempPName.push(playerName)
  localStorage.setItem("Stored-Name", JSON.stringify(tempPName));
  localStorage.setItem("Stored-Final-Score", JSON.stringify(tempFScore))
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

