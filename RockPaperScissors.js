let rlSync = require('readline-sync');
let name = rlSync.question("What's your name?\n");
console.log(`Hello, ${name}! Shall we play a game? How about a nice game of Rock, Paper, Scissors!`);
let userInput = rlSync.question("Enter your choice, ('rock', 'paper', or 'scissors'): ");

// get user's choice
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb'){
    return userInput;
  } else {
    console.log('Invalid input');
  }
};

// get computer's choice
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

// determine a winner
const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return 'The game was a tie.';
  }
  if(userChoice === 'rock') {
    if(computerChoice === 'paper'){
      return 'Wah-Waahh. Computer wins! You lose.';
    } else {
      return "Rock crushes " + computerChoice + ". You win!!";
    }
  }
  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
        return "Scissors cut paper. Computer wins! You lose.";
    }
    if(computerChoice === 'rock') {
        return "Paper over rock. You win!! Great job!";
    }
  }
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
        return "Rock crushes scissors. Computer wins!!";
    }
    if(computerChoice === 'paper'){
        return "Scissors cut paper. You win!!";
    }
  }
  if(userChoice === 'bomb'){
    return "Game over. You win!! You da bomb!"
  }
}

const playGame = () => {
  let userChoice = getUserChoice(userInput);
  let computerChoice = getComputerChoice();
  console.log("User's choice is " + userChoice);
  console.log("Computer's choice is " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();
let play = rlSync.question("Play Again? (Y or N): ");
play = play.toLowerCase();
if (play === 'y'){
  playGame();
} else {
  console.log("Ok. Bye for now!")
}


