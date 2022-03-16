const myArray = ["rock", "paper", "scissors"]; 
function computerPlay() {
    
    return myArray[Math.floor(Math.random()*myArray.length)];
}

function playRound(playerSelection, computerSelection) 
{
    if(computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
    return "It's a draw";
    } 
    else if(computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock") {
    return "You lose";
    }
    else if(computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "rock") {
    return "You win";
    }
    else if(computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "paper") {
        return "You win";
    }
    else if(computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "paper") {
        return "You lose";
    }
    else if(computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "scissors") {
        return "You lose";
    }
    else if(computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "scissors") {
        return "You win";
    }
    else {
        return "beats me";
    }

}


const computerSelection = computerPlay();


function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Do you choose 'Rock', 'Paper', or 'Scissors'?");
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        
     }
}
console.log(game());
