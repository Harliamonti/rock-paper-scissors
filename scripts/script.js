console.log("Hello World!");

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 8);
    
    if (randomNumber >= 7) {
        return "rock";
    }
    else if (randomNumber >= 4) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound (playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock")
    {
        if (computerSelection == "paper") console.log("You lose! Paper beats rock");
        else if(computerSelection == "rock") console.log("Draw!");
        else console.log("You win! Rock beats scissors");
    }

    else if (playerSelection == "paper")
    {
        if (computerSelection == "scissors") console.log("You lose! Scissors beats paper");
        else if(computerSelection == "paper") console.log("Draw!");
        else console.log("You win! Paper beats rock");
    }

    else if (playerSelection == "scissors")
    {
        if (computerSelection == "rock") console.log("You lose! rock beats paper");
        else if(computerSelection == "scissors") console.log("Draw!");
        else console.log("You win! scissors beats paper");
    }


}

playRound("Rock", getComputerChoice());