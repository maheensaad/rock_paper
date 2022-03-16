const myArray = ["rock", "paper", "scissors"]; 
function computerPlay() {
    
    return myArray[Math.floor(Math.random()*myArray.length)];
}

function playRound(playerSelection, computerSelection) 
{
    if(computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
    return "It's a draw";
    } 
    else if(computerSelection.toLowerCase() === "paper") {
    return "You lose";
    }
    else if(computerSelection.toLowerCase() === "scissors") {
    return "You win";
    }
    else{
        return "beats me";
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));