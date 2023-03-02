const roundMessage = document.querySelector(".round-text");
const playerScoreDisplay = document.querySelector(".score-player-num");
const computerScoreDisplay = document.querySelector(".score-computer-num");
const choiceButtons = document.querySelectorAll(".btn-choice");
const endgameModal = document.querySelector(".endgame-modal");
const endgameText = document.querySelector(".endgame-text");
const restartButton = document.querySelector(".btn-restart");

const choices = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;
let message;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function updateScoreDisplay() {
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  roundMessage.textContent = message;
}

function restartGame() {
  endgameModal.style.display = "none";
  playerScore = 0;
  computerScore = 0;
  message = '';
  updateScoreDisplay();
}

function playRound(playerSelection, computerSelection) {
  let result =
    choices.indexOf(playerSelection) - choices.indexOf(computerSelection);

  switch (result) {
    case 0:
      message = "Tie!";
      updateScoreDisplay();
      return;
    case -1:
    case 2:
      message = `You lose! ${
        playerSelection.charAt(0) + playerSelection.slice(1).toLowerCase()
      } is beaten by ${computerSelection.toLowerCase()}.`;
      computerScore++;
      break;
    default:
      message = `You win! ${
        playerSelection.charAt(0) + playerSelection.slice(1).toLowerCase()
      } beats ${computerSelection.toLowerCase()}.`;
      playerScore++;
      break;
  }

  updateScoreDisplay();

  if (playerScore === 5 || computerScore === 5) {
    endgameModal.style.display = "block";
    endgameText.textContent = `You ${playerScore === 5 ? "Win" : "Lose"}!`;
    restartButton.addEventListener("click", restartGame);
  }
}

function playGame() {
  restartGame();

  choiceButtons.forEach((btn) =>
    btn.addEventListener("click", () =>
      playRound(btn.id.toUpperCase(), getComputerChoice())
    )
  );
}

playGame();
