let pscoreCount = 0; //Player Score Count 
let cscoreCount = 0; //Computer Score Count
let roundCount = 0; //Holds count of Round
const bcontainer = document.querySelector('#bcontainer');
const container = document.querySelector('#container');
const content = document.createElement('div');
const scoreContent = document.createElement('div');
const roundContent = document.createElement('div');
const winnerContent = document.createElement('div');
content.classList.add('content')
scoreContent.classList.add('content')
roundContent.classList.add('content')
winnerContent.classList.add('content')

winnerContent.textContent = "Choose rock, paper, or scissors to beat the computer. 5 rounds!"
scoreContent.textContent = "Player Score: " + pscoreCount + ";" + " Computer Score: " + cscoreCount;
roundContent.textContent = "Round: " + roundCount;
bcontainer.appendChild(winnerContent);
bcontainer.appendChild(scoreContent);
bcontainer.appendChild(roundContent); 
content.classList.add('content');
//Add rock button
const rockButton = document.createElement("button");
rockButton.classList.add('rockButton');
rockButton.innerHTML = "Rock!";
rockButton.type = "submit";
rockButton.name = "formBtn";
rockButton.onclick = function () {
    computerInput = computerPlay();
    userInput = "rock";
    whoWon(playRound(userInput, computerInput));
    winnerContent.textContent = playRound(userInput, computerInput);
    scoreContent.textContent = "Player Score: " + pscoreCount + ";" + " Computer Score: " + cscoreCount;
    roundContent.textContent = "Round: " + roundCount;
    if (roundCount>4){
        content.textContent = "";
        endGame();
    }
  };
container.appendChild(rockButton)
//Add paper button; on click, execute computerPlay and playRound using user input. Display results and track score.
const paperButton = document.createElement("button");
paperButton.classList.add('paperButton');
paperButton.innerHTML = "Paper!";
paperButton.type = "submit";
paperButton.name = "formBtn";
paperButton.onclick = function () {
    computerInput = computerPlay();
    userInput = "paper";
    whoWon(playRound(userInput, computerInput));
    winnerContent.textContent = playRound(userInput, computerInput);
    scoreContent.textContent = "Player Score: " + pscoreCount + ";" + " Computer Score: " + cscoreCount;
    roundContent.textContent = "Round: " + roundCount;
    if (roundCount>4){
        content.textContent = "";
        endGame();
    }
  };
container.appendChild(paperButton)
//Add scissors button
const scissorsButton = document.createElement("button");
scissorsButton.classList.add('scissorsButton');
scissorsButton.innerHTML = "Scissors!";
scissorsButton.type = "submit";
scissorsButton.name = "formBtn";
scissorsButton.onclick = function () {
    computerInput = computerPlay();
    userInput = "scissors";
    whoWon(playRound(userInput, computerInput));
    winnerContent.textContent = playRound(userInput, computerInput);
    scoreContent.textContent = "Player Score: " + pscoreCount + ";" + " Computer Score: " + cscoreCount;
    roundContent.textContent = "Round: " + roundCount;
    if (roundCount>4){
        content.textContent = "";
        endGame();
    }
  };
container.appendChild(scissorsButton)

function endGame(){
    if (pscoreCount > cscoreCount){
        winnerContent.textContent = "You won after 5 rounds! Choose rock, paper, or scissors to start a new game."
        pscoreCount = 0;
        cscoreCount = 0;
        roundCount = 0;
    }
    else if (pscoreCount < cscoreCount){
        winnerContent.textContent = "You lost after 5 rounds! Choose rock, paper, or scissors to start a new game."
        pscoreCount = 0;
        cscoreCount = 0;
        roundCount = 0;
    } 
    else if (pscoreCount == cscoreCount){
        winnerContent.textContent = "You drew after 5 rounds! Choose rock, paper, or scissors to start a new game."
        pscoreCount = 0;
        cscoreCount = 0;
        roundCount = 0;     
    }
}

function playRound(playerSelection, computerSelection){
    switch (true) 
    {
        case (playerSelection === "rock" && computerSelection === "paper"):
            return "You lose this round! Paper beats rock.";
        case (playerSelection === "paper" && computerSelection === "rock"):
            return "You win this round! Paper beats rock.";
        case (playerSelection === "rock" && computerSelection === "scissors"):
            return "You win this round! Rock beats scissors.";
        case (playerSelection === "scissors" && computerSelection === "rock"):
            return "You lose this round! Rock beats scissors.";
        case (playerSelection === "scissors" && computerSelection === "paper"):
            return "You win this round! Scissors beats paper.";
        case (playerSelection === "paper" && computerSelection === "scissors"):
            return "You lose this round! Scissors beats paper.";
        case (playerSelection === computerSelection):
            return "Draw this round!";
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
    }
}

function whoWon(input){
    switch (true)
    {
        case (input.substring(0,5)==="You w"):
            pscoreCount++;
            roundCount++;
            return 1;
        case (input.substring(0,5)==="You l"):
            cscoreCount++;
            roundCount++;
            return -1;
        case (input.substring(0,5)==="Draw "):
            roundCount++;
            return 0;    
    }
}