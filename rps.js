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

let computerScore = 0;
let humanScore = 0;

// Create function playRound that takes two arguments, humanChoice and computerChoice
// Define variables humanSelection and computorSelection to equal getHumanChoice and getComputerChoice
// IF statement for gamelogic, Rock beats Scissors, Scissors beats Paper, Paper beats Rock
// Log Result of who wone
// Update humanScore or computerScore

const playRound = (humanChoice, computerChoice) => {
  const humanWinMessage = `You Won! ${humanChoice} beats ${computerChoice}`;
  const computerWinMessage = `You lost! ${computerChoice} beats ${humanChoice}`;

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

const humanSelection = getHumanChoice();
const computorSelection = getComputerChoice();

console.log(playRound(humanSelection, computorSelection));
