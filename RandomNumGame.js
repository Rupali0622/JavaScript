let guessNum = 25;
let userNum = prompt("Enter random number");

while (userNum != guessNum) {
    userNum = prompt("You lose! Guess the num again");
}

console.log("Congratulations!!!");
