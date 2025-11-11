// Create function getComputerChoice
// Create variable named computorChoice to store randomized value in
// Create function getRandomNumber that generates and returns a random number
// between 1-3
// IF number is 1 return "Rock"
// ELSE IF number is 2 return "Paper"
// ELSE number is 3 return "Scissors"
// Return randomized value
// Call function and console.log return value to check if it works as expected

// Generates random number between 0-2
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

// Create named getHumanChoice that prompts users for a number between 1-3
// IF null return no choice made
// IF other that 1-3 prompt again asking for valig input
// IF 1 return Rock, if 2 return Paper and if 3 return Scissors
// Create a variable named humanChoice

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

// Create function playRound that takes two arguments, humanChoice and computerChoice
// Define variables humanSelection and computorSelection to equal getHumanChoice and getComputerChoice
// IF statement for gamelogic, Rock beats Scissors, Scissors beats Paper, Paper beats Rock
// Log Result of who wone
// Update humanScore or computerScore

/*Create a new function named playGame.
Move your playRound function and score variables so that they’re declared inside of the new playGame function
Play 5 rounds by calling playRound 5 times.
Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.*/

// Create function named playGame.
// Move playRound function and score variables inside playGame function.
// Create a loop and call playRound 5 times and keep track of score
// Log out the winner based on the highest score

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
