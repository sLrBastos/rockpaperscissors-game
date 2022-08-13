const instructionsDisplay = document.createElement('h1')
const userChoiceDisplay = document.createElement('h1')
const computerChoiceDisplay = document.createElement('h1')
const resultDisplay = document.createElement('h1')
const scoreDisplay = document.createElement('h1')
const winnerDisplay = document.createElement('h1')
const gameGrid = document.getElementById('game')
gameGrid.append(instructionsDisplay, userChoiceDisplay, computerChoiceDisplay, resultDisplay, scoreDisplay, winnerDisplay)

const choices = ['rock', 'paper', 'scissors']

let playerSelection
let computerSelection

let humanScore = 0;
let computerScore = 0;
let j=1;


instructionsDisplay.innerHTML = "Press Rock, Paper or Scissors. The first to 5 points wins! Good Luck!"



const handleClick = (e) => {
    instructionsDisplay.innerHTML = "Game " + j
    playerSelection = e.target.id
    userChoiceDisplay.innerHTML = "Player choice: " + playerSelection
    computerPlay()
    Play()
    j++;
    if (computerScore == 5 || humanScore == 5) {
        Winner()
    }
    
}

            


const computerPlay = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerSelection = randomChoice
    computerChoiceDisplay.innerHTML = "Computer choice: " + randomChoice
}


for (let i = 0; i < choices.length; i++) {
    const button = document.createElement('button')
    button.id = choices[i]
    button.innerHTML = choices[i]
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button)
}


const Play = () => {
    switch (playerSelection + computerSelection) {
      case 'scissorspaper':
      case 'rockscissors':
      case 'paperrock':
        resultDisplay.innerHTML = "YOU WIN!"
        humanScore +=1
        scoreDisplay.innerHTML = humanScore + "-" + computerScore
        break
      case 'paperscissors':
      case 'scissorsrock':
      case 'rockpaper':
        resultDisplay.innerHTML = "YOU LOSE!"
        computerScore +=1
        scoreDisplay.innerHTML = humanScore + "-" + computerScore
        break
      case 'paperpaper':
      case 'scissorsscissors':
      case 'rockrock':
      resultDisplay.innerHTML = "ITS A DRAW!"
      scoreDisplay.innerHTML = humanScore + "-" + computerScore
      break
    }
  }



const Winner = () => {
    if (humanScore > computerScore) {
        winnerDisplay.innerHTML = "Player wins! " + humanScore + " - " + computerScore 
    }
    else if (computerScore > humanScore) {
        winnerDisplay.innerHTML = 'Computer wins! ' + humanScore + " - " + computerScore ;
    }
    else {
        winnerDisplay.innerHTML = "Player and Computer ties: " + humanScore + " - " + computerScore;
    }
}




