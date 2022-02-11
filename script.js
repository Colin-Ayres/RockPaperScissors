game();

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let i = 1;
        for (i = 1; i < 6; i++){
            promptText = prompt("Rock, Paper, or Scissors?");
            userInput = promptText.toLowerCase();
            computerInput = computerPlay();
            results = playRound(userInput, computerInput);
            switch (true)
            {
                case (results.substring(0,5)==="You w"):
                    playerScore++;
                    console.log("Computer chooses: " + computerInput + ". You won round " + i + "!");
                    break;
                case (results.substring(0,5)==="You l"):
                    computerScore++;
                    console.log("Computer chooses: " + computerInput + ". You lost round " + i + ".");
                    break;
                case (results.substring(0,5)==="Draw!"):
                    console.log("Computer chooses: " + computerInput + ". You drew on round " + i + ".");
                    break;
                case (results.substring(0,5)==="Inval"):
                    console.log("Invalid input this round, try again.");
                    i--;    
                    break;
            }
        console.log("Player: " + playerScore + "  Computer: " + computerScore)
        }
    switch (i==6)
    {
        case (playerScore > computerScore):
            console.log("You won the game!")
            break;
        case (computerScore > playerScore):
            console.log("You lost the game!")
            break;
        case (computerScore == playerScore):
            console.log("The game was a draw!")
    }
}

function playRound(playerSelection, computerSelection){
    switch (true) 
    {
        case (playerSelection === "rock" && computerSelection === "paper"):
            return "You lose! Paper beats rock.";
        case (playerSelection === "paper" && computerSelection === "rock"):
            return "You win! Paper beats rock.";
        case (playerSelection === "rock" && computerSelection === "scissors"):
            return "You win! Rock beats scissors.";
        case (playerSelection === "scissors" && computerSelection === "rock"):
            return "You lose! Rock beats scissors.";
        case (playerSelection === "scissors" && computerSelection === "paper"):
            return "You win! Scissors beats paper.";
        case (playerSelection === "paper" && computerSelection === "scissors"):
            return "You lose! Scissors beats paper.";
        case (playerSelection === computerSelection):
            return "Draw!";
        case (true):
            return "Invalid input.";
    }
}

function computerPlay(){
    randomSelection = Math.floor(Math.random()*3);
    switch (randomSelection)
    {
        case 0:
            return "paper";
        case 1:
            return "rock";
        case 2:
            return "scissors";
        case (true):
            break;
    }
}