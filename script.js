const playerScoreDisplay = document.querySelector(".score-player");
const computerScoreDisplay = document.querySelector(".score-computer");
const choiceButtons = document.querySelectorAll(".btn-choice");
const endgameModal = document.querySelector(".endgame-modal");
const endgameText = document.querySelector(".endgame-text");
const restartButton = document.querySelector(".btn-restart");

const choices = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function updateScoreDisplay() {
  playerScoreDisplay.textContent = `Player: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer: ${computerScore}`;
}

function restartGame() {
  endgameModal.style.display = "none";
  playerScore = 0;
  computerScore = 0;
  updateScoreDisplay();
}

function playRound(playerSelection, computerSelection) {
  let result =
    choices.indexOf(playerSelection) - choices.indexOf(computerSelection);

  switch (result) {
    case 0:
      console.log("Tie!");
      return;
    case -1:
    case 2:
      console.log(
        `You lose! ${
          computerSelection.charAt(0) + computerSelection.slice(1).toLowerCase()
        } beats ${playerSelection}.`
      );
      computerScore++;
      break;
    default:
      console.log(
        `You win! ${
          playerSelection.charAt(0) + playerSelection.slice(1).toLowerCase()
        } beats ${computerSelection}.`
      );
      playerScore++;
      break;
  }

  updateScoreDisplay();

  if (playerScore === 5 || computerScore === 5) {
    endgameModal.style.display = "block";
    endgameText.textContent = `You ${playerScore === 5 ? "Win" : "Lose"}!`
    restartButton.addEventListener('click', restartGame);
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
