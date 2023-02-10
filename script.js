const playerScoreDisplay = document.querySelector(".score-player");
const computerScoreDisplay = document.querySelector(".score-computer");
const choiceButtons = document.querySelectorAll(".choice-btn");

const choices = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function updateScoreDisplay() {
  playerScoreDisplay.textContent = `Player: ${playerScore}`;
  computerScoreDisplay.textContent = `Player: ${computerScore}`;
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
    choiceButtons.forEach((btn) => (btn.disabled = true));
  }
}

function playGame() {
  choiceButtons.forEach((btn) =>
    btn.addEventListener("click", () =>
      playRound(btn.id.toUpperCase(), getComputerChoice())
    )
  );
}

playGame();
