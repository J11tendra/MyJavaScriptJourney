function getComputerChoice() {

   possibleChoice = ["rock", "paper", "scissor"];
   computerChoice = possibleChoice[Math.floor(Math.random() * possibleChoice.length)];
   
   return computerChoice;
}

function userChoice() {

   userChoice = prompt("Enter Your Response?");

   return userChoice.toLowerCase();
}


function play(computerSelection, userSelection) {

      if (computerSelection === userSelection) {
         console.log(`Computer:- ${computerSelection}`)
         console.log(`You:- ${userSelection}`)
         console.log("Boss, it's a tie")
      }

      else if (computerSelection == "rock" & userSelection == "paper") {
         console.log(`Computer:- ${computerSelection}`)
         console.log(`You:- ${userSelection}`)
         console.log("Yay! your the winner🎉🎈😁😂.")
      }

      else if (computerSelection == "paper" & userSelection == "scissor") {
         console.log(`Computer:- ${computerSelection}`)
         console.log(`You:- ${userSelection}`)
         console.log("Yay! your the winner🎉🎈😁😂.")
      }

      else if (computerSelection == "scissor" & userSelection == "rock") {
         console.log(`Computer:- ${computerSelection}`)
         console.log(`You:- ${userSelection}`)
         console.log("Yay! your the winner🎉🎈😁😂.")
      }

      else if (computerSelection == "paper" & userSelection == "rock") {
         console.log(`Computer:- ${computerSelection}`)
         console.log(`You:- ${userSelection}`)
         console.log("Oops! you fuck lost😒🤦‍♀️🤷‍♀️.")
      }

      else if (computerSelection == "scissor" & userSelection == "paper") {
         console.log(`Computer:- ${computerSelection}`)
         console.log(`You:- ${userSelection}`)
         console.log("Oops! you fuck lost😒🤦‍♀️🤷‍♀️.")
      }
      
      else if (computerSelection == "rock" & userSelection == "scissor") {
         console.log(`Computer:- ${computerSelection}`)
         console.log(`You:- ${userSelection}`)
         console.log("Oops! you fuck lost😒🤦‍♀️🤷‍♀️.")
      }
}

play(getComputerChoice(), userChoice())
