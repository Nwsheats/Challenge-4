let score = localStorage.getItem("Final Score");
let scoreCounter = document.getElementById("score-counter");
let scoreBtn = document.getElementById("score-btn");
let clearScore = document.getElementById("clear-score");
let startOver = document.getElementById("start-over-btn");
let input = document.getElementById("input-field");
let scoreList = $('#score-field');

addEventListener('load', (event) => {
    if (score == null) {
        scoreCounter.textContent = "Your final score is: ";
    } else {
        scoreCounter.textContent = "Your final score is: " + score;
    }});


addEventListener('load', (event) => {
    let storedName = localStorage.getItem("Name");
    let storedScore = localStorage.getItem("Final Score");
    scoreList.append('<li>' + storedName + ": " + storedScore + '</li>');
});

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
  localStorage.setItem("Name", playerName)
  localStorage.setItem("Final Score", score)
  scoreCounter.textContent = "";
}


function clearHighScore() {
    localStorage.clear();
}



//make an object for localStorage with playerName and score

scoreFormEl.on('submit', handleLogScore) 
clearFormEl.on('click', clearHighScore)

