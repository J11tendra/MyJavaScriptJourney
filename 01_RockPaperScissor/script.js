const computerDisplay = document.querySelector("#computer-choice");
const userDisplay = document.querySelector("#user-choice");
const resultDisplay = document.querySelector("#results");

const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userDisplay.innerHTML = userChoice;

    generateComputerChoice();
    getResults();
}))


function generateComputerChoice() {

    const randomNumber = Math.floor(Math.random()*possibleChoices.length);

    if (randomNumber === 0) {
        computerChoice = "rock";
    }
    else if (randomNumber === 1) {
        computerChoice = "paper";
    }
     else if (randomNumber === 2) {
        computerChoice = "scissors";
    }

    computerDisplay.innerHTML = computerChoice;
}


function getResults() {

    if (computerChoice === userChoice) {
        result = "it's a draw";
    }
    else if (computerChoice === "rock" && userChoice === "paper") {
        result = "You won!!";
    }
    else if (computerChoice === "rock" && userChoice === "scissors") {
        result = "You lost!1";
    }
    else if (computerChoice === "paper" && userChoice === "rock") {
        result = "You lose!!, try again";
    }
    else if (computerChoice === "paper" && userChoice === "scissors") {
        result = "You won!!!";
    }
    else if (computerChoice === "scissors" && userChoice === "rock") {
        result = "Yay, You won!!";
    }
    else if (computerChoice === "scissors" && userChoice === "paper") {
        result = "Ops!! You lose";
    }

    resultDisplay.innerHTML = result;
}