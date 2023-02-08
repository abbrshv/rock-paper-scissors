//ROCK PAPER SCISSORS
const choices = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
  let playerSelection = prompt("Make your selection.").toUpperCase();

  while (!choices.includes(playerSelection)) {
    playerSelection = prompt("Please select correct value.").toUpperCase();
  }

  return playerSelection;
}

function playRound(playerSelection, computerSelection) {
  let result =
    choices.indexOf(playerSelection) - choices.indexOf(computerSelection);

  switch (result) {
    case 0:
      console.log("Tie!");
      return playRound(getPlayerChoice(), getComputerChoice());
    case -1:
    case 2:
      console.log(
        `You lose! ${
          computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
        } beats ${playerSelection}.`
      );
      return false;
    default:
      console.log(
        `You win! ${
          playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
        } beats ${computerSelection}.`
      );
      return true;
  }
}
