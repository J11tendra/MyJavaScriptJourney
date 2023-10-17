const computerDisplay = document.querySelector("#computer-choice");
const userDisplay = document.querySelector("#user-choice");
const resultDisplay = document.querySelector("#results");

const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userDisplay.innerHTML = userChoice;

    generateComputerChoice();
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
}