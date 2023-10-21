// Mapping of winning key beating losing value
const whatBeatsWhat = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

// Derives computer possible choices from keys array
const computerChoices = Object.keys(whatBeatsWhat);

// at random selects either rock, paper or scissors
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * computerChoices.length);
  return computerChoices[randomNum];
}

//
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It is a tie!";
  }

  // Check if computerSelction in whatBeats what equals to what the
  // player selected, if so player loses
  if (whatBeatsWhat[computerSelection] === playerSelection) {
    return "You lose.";
  } else {
    return "You win!";
  }
}

const NUMROUNDS = 5;

function game() {
  let playerWins = 0;
  let computerWins = 0;

  for (let i = 0; i < NUMROUNDS; i++) {
    const computerSelection = getComputerChoice();
    const playerSelection = getComputerChoice();

    const result = playRound(playerSelection, computerSelection);
    console.log(
      `${result} You chose ${playerSelection} and the computer chose ${computerSelection}. Thanks for playing!`
    );
    if (result == "You win!") {
      playerWins++;
    } else if (result == "You lose.") {
      computerWins++;
    }
    console.log(`Score: You = ${playerWins}. Computer = ${computerWins}`);
  }
}

game();
