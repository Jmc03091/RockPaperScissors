const buttons = document.querySelectorAll('button');
let display = document.querySelector('#display');
let playerScoreText = document.querySelector('p1');
let computerScoreText = document.querySelector('p2');

let playerScore = 0;
let computerScore = 0;

function clickButton(){
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      let playerChoice = this.value;
      let computerChoice = getComputerChoice();
      let result = playRound(playerChoice, computerChoice);
      
      if(result === 1){
	playerScore++;
      }
      else if(result === -1){
	computerScore++;
      }
      playerScoreText.textContent = "Your score: " + playerScore;
      computerScoreText.textContent = "Computer score: " + computerScore;
      winner(playerScore, computerScore);
    });
  });
}

clickButton();

function getComputerChoice(){
  let arr = ["Rock", "Paper" , "Scissors"];
  let newArray = arr[Math.floor(Math.random() * arr.length)];
  return newArray;
}

function playRound(playerSelection, computerSelection){
  if(playerSelection === "Rock" && computerSelection === "Scissors"){
        display.textContent = "You won! Rock beats scissors!";
        return 1;
    }
    else if(playerSelection === "Paper" && computerSelection === "Rock"){
        display.textContent = "You won! Paper beats rock!";
        return 1;
    }
    else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        display.textContent = "You won! Scissors beats paper!";
        return 1;
    }
    else if(playerSelection === "Rock" && computerSelection === "Rock"){
        display.textContent = "Draw! Rock on rock";
        return 0;
    }
    else if(playerSelection === "Paper" && computerSelection === "Paper"){
        display.textContent = "Draw! Paper on paper!";
        return 0;
    }
    else if(playerSelection === "Scissors" && computerSelection === "Scissors"){
        display.textContent = "Draw! Scissors on scissors";
        return 0;
    }
    else if(playerSelection === "Rock" && computerSelection === "Paper"){
        display.textContent = "You lose! Paper beats rock";
        return -1;
    }
    else if(playerSelection === "Paper" && computerSelection === "Scissors"){
        display.textContent = "You lose! Scissors beats paper";
        return -1;
    }
    else if(playerSelection === "Scissors" && computerSelection === "Rock"){
        display.textContent = "You lose! Rock beats scissors!";
        return -1;
    }
}

function winner(playerScore, computerScore){
  if(playerScore > computerScore && playerScore === 5){
    display.textContent = "You won the game!";
    resetScore();
  }
  else if(computerScore > playerScore && computerScore === 5){
    display.textContent = "You lost the game!";
    resetScore();
  }
}

function resetScore() {
  playerScore = 0;
  computerScore = 0;
}


      
