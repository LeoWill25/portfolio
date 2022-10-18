const ROCK = "ROCK"
const PAPER = "PAPER"
const SCISSORS = "SCISSORS"

function getRandomPick() {
  let chance = Math.random();

  if (chance > 0.66){
    return ROCK;
  } else if (chance > 0.33){
    return PAPER;
  }else{
    return SCISSORS;
  }
}

function getResultText(comuputerPick, playerPick){
  const TIE = "Its a tie!";
  const WIN = "You Win!";
  const LOSE = "HA! you Lose!";

  if (comuputerPick == playerPick) {
    return TIE;
  }

  if (computerPick == PAPER && playerPick == ROCK){
    return LOSE;
  }else if (comuputerPick == PAPER && playerPick == SCISSORS) {
   return WIN;
  }

  if (computerPick == ROCK && playerPick == SCISSORS){
    return LOSE;
  }else if (comuputerPick == SCISSORS && playerPick == ROCK) {
   return WIN;
  }

  if (computerPick == SCISSORS && playerPick == PAPER){
    return LOSE;
  }else if (comuputerPick == PAPER && playerPick == SCISSORS) {
   return WIN;
 }
}
