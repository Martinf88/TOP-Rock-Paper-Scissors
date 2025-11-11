const getRandomNumber = () => {
  return Math.floor(Math.random() * 3);
};

const getComputerChoice = () => {
  let computorChoice = getRandomNumber();

  if (computorChoice < 0 || computorChoice > 2) {
    return "Incorrect value";
  }

  if (computorChoice === 0) {
    computorChoice = "Rock";
  } else if (computorChoice === 1) {
    computorChoice = "Paper";
  } else {
    computorChoice = "Scissors";
  }

  return computorChoice;
};

const getHumanChoice = () => {
  let humanChoice =
    Number(prompt("Enter 1 for Rock, 2 for Paper or 3 for Scissors")) || null;

  if (humanChoice === null) {
    return "No choice made.";
  } else if (![1, 2, 3].includes(humanChoice)) {
    return prompt("wrong entry, try again.");
  } else if (humanChoice === 1) {
    humanChoice = "Rock";
  } else if (humanChoice === 2) {
    humanChoice = "Paper";
  } else if (humanChoice === 3) {
    humanChoice = "Scissors";
  }

  return humanChoice;
};

const playGame = () => {
  let computerScore = 0;
  let humanScore = 0;

  const playRound = (humanChoice, computerChoice) => {
    const scoreMessage = `You: ${humanScore}. Computer: ${computerScore}`;
    const humanWinMessage = `You Won! ${humanChoice} beats ${computerChoice} Score: ${scoreMessage}`;
    const computerWinMessage = `You lost! ${computerChoice} beats ${humanChoice} Score: ${scoreMessage}`;

    if (humanChoice === "Rock" && computerChoice === "Scissors") {
      humanScore++;

      return humanWinMessage;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
      humanScore++;
      return humanWinMessage;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
      humanScore++;
      return humanWinMessage;
    } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
      computerScore++;
      return computerWinMessage;
    } else if (computerChoice === "Paper" && humanChoice === "Rock") {
      computerScore++;
      return computerWinMessage;
    } else if (computerChoice === "Paper" && humanChoice === "Rock") {
      computerScore++;
      return computerWinMessage;
    } else if (computerChoice === humanChoice) {
      return `Draw! ${computerChoice} and ${humanChoice}`;
    }
  };

  for (i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computorSelection = getComputerChoice();
    console.log(playRound(humanSelection, computorSelection));
  }

  const winnerIsComp = `Game Over. Computer won ${computerScore} to ${humanScore}`;
  const winnerIsHuman = `Game Over. You won ${humanScore} to ${computerScore}`;

  console.log(humanScore > computerScore ? winnerIsHuman : winnerIsComp);
};

playGame();
