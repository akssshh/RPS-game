
function getComputerChoice() {
  const num = Math.floor(Math.random() * 3);
  if (num == 0) {
    return "rock";
  } else if (num == 1) {
    return "paper";
  } else num == 2;
  return "scissor";
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function playRound() {
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "Tie") {
    return "It's a tie";
  } else if (result == "Player") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function getPlayerChoice() {
  let validatedInput = false;
  while (validatedInput == false) {
    const choice = prompt("Rock Paper Scissor");
    if (choice == null) {
      continue;
    }
    const choiceLower = choice.toLocaleLowerCase;
    if (options.includes(choiceLower)) {
      validatedInput = true;
      return choiceLower;
    }
  }
}

function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

    if (checkWinner(playerSelection, computerSelection) == "Player") {
      scorePlayer++;
    } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
      scoreComputer++;
    }
  }
  console.log("Game Over");
  if (scorePlayer > scoreComputer) {
    console.log("Player was the winner");
  } else if (scorePlayer < scoreComputer) {
    console.log("Computer was the winner");
  } else {
    console.log("We have a tie");
  }
}
game();