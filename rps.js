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
