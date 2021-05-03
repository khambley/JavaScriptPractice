// All code should be written in this file.
let playerOneMoveOneType,
    playerOneMoveTwoType,
    playerOneMoveThreeType,
    playerTwoMoveOneType,
    playerTwoMoveTwoType,
    playerTwoMoveThreeType,
    playerOneMoveOneValue,
    playerOneMoveTwoValue,
    playerOneMoveThreeValue,
    playerTwoMoveOneValue,
    playerTwoMoveTwoValue,
    playerTwoMoveThreeValue;

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue)
{
  // create failfast return if any of the values are missing
  if(!moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue || !moveThreeType || !moveThreeValue){
    return;
  }
  // this is a helper function called that will check if the string provided is 'rock', 'paper' or 'scissors'
  if(!isValidMoveType(moveOneType) || !isValidMoveType(moveTwoType) || !isValidMoveType(moveThreeType)){
    return;
  }

  // this is a helper function called will check that the value provided is between 1 and 99.
  if(!isValidMoveValue(moveOneValue) || !isValidMoveValue(moveTwoValue) || !isValidMoveValue(moveThreeValue)){
    return;
  }

  // this will check that the sum of values provided is over 99.
  if((moveOneValue + moveTwoValue + moveThreeValue) > 99){
    return;
  }
  // set global variables
  console.log(moveOneType);
  console.log(moveOneValue);
  if (player === 'Player One'){
    playerOneMoveOneType = moveOneType;
    playerOneMoveOneValue = moveOneValue;
    playerOneMoveTwoType = moveTwoType;
    playerOneMoveTwoValue = moveTwoValue;
    playerOneMoveThreeType = moveThreeType;
    playerOneMoveThreeValue = moveThreeValue;
  } else if (player === 'Player Two'){
    playerTwoMoveOneType = moveOneType;
    playerTwoMoveOneValue = moveOneValue;
    playerTwoMoveTwoType = moveTwoType;
    playerTwoMoveTwoValue = moveTwoValue;
    playerTwoMoveThreeType = moveThreeType;
    playerTwoMoveThreeValue = moveThreeValue;
  };
}

// create helper function that passes in moveType to validate value of 'rock', 'paper' or scissors
function isValidMoveType(moveType){
  return (moveType === 'rock') || (moveType === 'paper') || (moveType === 'scissors');
}
// create helper function that passes in moveValue to validate value is '>= 1' and '<= 99'
function isValidMoveValue(moveValue){
  return (moveValue >= 1) && (moveValue <= 99);
}

function getRoundWinner(){

}
function getGameWinner(){
  
}

