const playerButtons = document.querySelectorAll(".choice-btn");
const resultContainer = document.querySelector(".result");
const humanScoreDiv = document.querySelector(".human-score");
const computerScoreDiv = document.querySelector(".computer-score");
const wonGamesDiv = document.querySelector(".won-games");
const lostGamesDiv = document.querySelector(".lost-games");
const newGameBtn = document.querySelector(".new-game-btn");

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

newGameBtn.disabled = true;

const playGame = () => {
  const initWins = 0;
  const initLosses = 0;
  const initCompScore = 0;
  const initHumanScore = 0;

  humanScoreDiv.innerHTML = initHumanScore;
  computerScoreDiv.innerHTML = initCompScore;
  lostGamesDiv.innerHTML = initWins;
  wonGamesDiv.innerHTML = initLosses;

  let wonGames = 0;
  let lostGames = 0;
  let computerScore = 0;
  let humanScore = 0;

  const playRound = (humanChoice, computerChoice) => {
    // IF computer score or human score is 5 after a round is played
    // the game is over
    // lock all playerButtons buttons
    // Display win message
    //Display won games
    // Update wonGames varibel
    // When reset button is clicked reset both human and computer score

    let roundWinMessage = "";
    let gameWinMessage = "";
    const humanRoundWinMessage = `You Won! ${humanChoice} beats ${computerChoice}`;
    const computerRoundWinMessage = `You lost! ${computerChoice} beats ${humanChoice}`;

    switch (humanChoice) {
      case "Rock":
        if (computerChoice === "Paper") {
          computerScore++;
          roundWinMessage = computerRoundWinMessage;
        } else if (computerChoice === "Scissors") {
          humanScore++;
          roundWinMessage = humanRoundWinMessage;
        } else {
          roundWinMessage = `Draw! ${computerChoice} and ${humanChoice}`;
        }
        break;
      case "Paper":
        if (computerChoice === "Scissors") {
          computerScore++;
          roundWinMessage = computerRoundWinMessage;
        } else if (computerChoice === "Rock") {
          humanScore++;
          roundWinMessage = humanRoundWinMessage;
        } else {
          roundWinMessage = `Draw! ${computerChoice} and ${humanChoice}`;
        }

        break;
      case "Scissors":
        if (computerChoice === "Rock") {
          computerScore++;
          roundWinMessage = computerRoundWinMessage;
        } else if (computerChoice === "Paper") {
          humanScore++;
          roundWinMessage = humanRoundWinMessage;
        } else {
          roundWinMessage = `Draw! ${computerChoice} and ${humanChoice}`;
        }
        break;

      default:
        break;
    }

    const humanGameWinMessage = `You Won! ${humanScore} to ${computerScore}`;
    const computerGameWinMessage = `You lost! ${computerScore} to ${humanScore}`;

    humanScoreDiv.innerHTML = humanScore;
    computerScoreDiv.innerHTML = computerScore;

    if (humanScore === 5 || computerScore === 5) {
      if (humanScore === 5) {
        wonGames++;
        wonGamesDiv.innerHTML = wonGames;
        gameWinMessage = humanGameWinMessage;
      } else {
        lostGames++;
        lostGamesDiv.innerHTML = lostGames;
        gameWinMessage = computerGameWinMessage;
      }
      playerButtons.forEach((button) => (button.disabled = true));
      newGameBtn.disabled = false;

      return gameWinMessage;
    }

    return roundWinMessage;
  };

  newGameBtn.addEventListener("click", () => {
    humanScoreDiv.innerHTML = initHumanScore;
    computerScoreDiv.innerHTML = initCompScore;
    resultContainer.innerHTML = "";
    playerButtons.forEach((button) => (button.disabled = false));
    newGameBtn.disabled = true;
  });

  playerButtons.forEach((btn) =>
    btn.addEventListener("click", function (e) {
      const humanSelection = getHumanChoice(e.target.id);

      const computorSelection = getComputerChoice();

      resultContainer.innerHTML = playRound(humanSelection, computorSelection);
    })
  );

  // console.log(humanScore > computerScore ? winnerIsHuman : winnerIsComp);
};

playGame();
