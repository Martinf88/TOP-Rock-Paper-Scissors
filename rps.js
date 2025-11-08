// Create function getComputorChoice
// Create variable named computorChoice to store randomized value in
// Create function getRandomNumber that generates and returns a random number
// between 1-3
// IF number is 1 return "Rock"
// ELSE IF number is 2 return "Paper"
// ELSE number is 3 return "Scissors"
// Return randomized value
// Call function and console.log return value to check if it works as expected

const getRandomNumber = () => {
  return Math.floor(Math.random() * 3); //randomize number between 1-3
};

const getComputorChoice = () => {
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

console.log(getComputorChoice());
