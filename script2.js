let score = localStorage.getItem("Final Score");
let scoreCounter = document.getElementById("score-counter");
let scoreBtn = document.getElementById("score-btn");
let clearScore = document.getElementById("clear-score");
let startOver = document.getElementById("start-over-btn");
let input = document.getElementById("input-field");
let scoreList = $('#score-field');

let tempPName = [];
let tempFScore = [];


addEventListener('load', (event) => {
    if (score == null) {
        scoreCounter.textContent = "Your final score is: ";
    } else {
        scoreCounter.textContent = "Your final score is: " + score;
        tempFScore.push(score);
    }});


addEventListener('load', (event) => {
    let tempPName = JSON.parse(localStorage.getItem("Stored-Name"));
    let tempFScore = JSON.parse(localStorage.getItem("Stored-Final-Score"));
    if (tempPName && tempFScore != null) {
        scoreList.append('<li>' + tempPName + ": " + tempFScore + '</li>');
    } else {
        return
}});

let scoreFormEl = $('#score-form');
let clearFormEl = $('#clear-score');

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

function clearHighScore() {
    localStorage.clear();
}

scoreFormEl.on('submit', handleLogScore) 
clearFormEl.on('click', clearHighScore)

