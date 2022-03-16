const myArray = ["rock", "paper", "scissors"]; 
function computerPlay() {
    
    return myArray[Math.floor(Math.random()*myArray.length)];
}
console.log(computerPlay());