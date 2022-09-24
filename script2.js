let score = localStorage.getItem("Final Score");
let scoreCounter = document.getElementById("score-counter");
let scoreBtn = document.getElementById("score-btn");
let startOver = document.getElementById("start-over-btn");
let input = document.getElementById("input-field");
let scoreList = $('#score-field');

scoreCounter.textContent = "Your final score is: " + score;


var scoreFormEl = $('#score-form');

// create function to handle form submission
function handleLogScore(event) {
  event.preventDefault();
  let playerName = $('input[name="input-field"]').val();
  if (!playerName) {
    alert('No name entered!');
    return;
  }
  scoreList.append('<li>' + playerName + ": " + score + '</li>');
  $('input[name="input-field"]').val('');
}

scoreFormEl.on('submit', handleLogScore)


