const choiceBtns = document.querySelectorAll("button");

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

const getHumanChoice = (id) => {
  console.log(id);

  let humanChoice = "";

  switch (id) {
    case "rock":
      humanChoice = "Rock";
      break;
    case "paper":
      humanChoice = "Paper";
      break;
    case "scissors":
      humanChoice = "Scissors";
      break;
    default:
      break;
  }

  return humanChoice;
};

const playGame = () => {
  let computerScore = 0;
  let humanScore = 0;

  const playRound = (humanChoice, computerChoice) => {
    const scoreMessage = `You: ${humanScore}. Computer: ${computerScore}`;

    let winMessage = "";
    const humanWinMessage = `You Won! ${humanChoice} beats ${computerChoice} Score: ${scoreMessage}`;
    const computerWinMessage = `You lost! ${computerChoice} beats ${humanChoice} Score: ${scoreMessage}`;

    switch (humanChoice) {
      case "Rock":
        if (computerChoice === "Paper") {
          computerScore++;
          winMessage = computerWinMessage;
        } else if (computerChoice === "Scissors") {
          humanScore++;
          winMessage = humanWinMessage;
        } else {
          winMessage = `Draw! ${computerChoice} and ${humanChoice}`;
        }
        break;
      case "Paper":
        if (computerChoice === "Scissors") {
          computerScore++;
          winMessage = computerWinMessage;
        } else if (computerChoice === "Rock") {
          humanScore++;
          winMessage = humanWinMessage;
        } else {
          winMessage = `Draw! ${computerChoice} and ${humanChoice}`;
        }

        break;
      case "Scissors":
        if (computerChoice === "Rock") {
          computerScore++;
          winMessage = computerWinMessage;
        } else if (computerChoice === "Paper") {
          humanScore++;
          winMessage = humanWinMessage;
        } else {
          winMessage = `Draw! ${computerChoice} and ${humanChoice}`;
        }
        break;

      default:
        break;
    }

    return winMessage;
  };

  // Add an eventlistener to all choiceBtns
  // Create const humanSelection,
  // it should call getHumanChoice and send event.target
  // Create const computorSelection = getComputorChoice
  // log playRound(humanSelection, computorSelection)

  choiceBtns.forEach((btn) =>
    btn.addEventListener("click", function (e) {
      const humanSelection = getHumanChoice(e.target.id);

      const computorSelection = getComputerChoice();
      console.log(humanSelection, computorSelection);
      console.log(playRound(humanSelection, computorSelection));
    })
  );

  const winnerIsComp = `Game Over. Computer won ${computerScore} to ${humanScore}`;
  const winnerIsHuman = `Game Over. You won ${humanScore} to ${computerScore}`;

  console.log(humanScore > computerScore ? winnerIsHuman : winnerIsComp);
};

playGame();
