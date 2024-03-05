// Player input

let playerChoice;

function getPlayerChoice() {
    const playerPrompt = prompt('Rock, paper or scissors?');
    const playerInput = playerPrompt != null ? playerPrompt.toLowerCase() : null;
    if (playerInput === null) {
        playerChoice = null;
        return playerChoice;
    } else if (playerInput === 'rock' || playerInput === 'paper' || playerInput === 'scissors' ) {
        console.log('You choose ' + playerInput);
        playerChoice = playerInput;
        return playerChoice;
    } else {
        console.log('Your input is invalid');
        getPlayerChoice();
    }
}

// Computer choice

let computerChoice;

function getComputerChoice() {
        const calc = Math.floor(Math.random() * 3) + 1;
        computerChoice = (calc === 1) ? 'rock' : (calc === 2) ? 'paper' : 'scissors';
        return computerChoice;
}

// Round Algorithm
let playerScore = 0;
let computerScore = 0;
let rounds = [];

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            playerScore++;
            rounds.push('Player');
            console.log('You won! ' + playerSelection + ' beats ' + computerSelection);
        } else if (computerSelection === 'paper') {
            computerScore++;
            rounds.push('Computer');
            console.log('You lose! ' + computerSelection + ' beats ' + playerSelection);
        } else {
            console.log('Tie! Both choose ' + playerSelection);
            rounds.push('Tie');
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++;
            rounds.push('Player');
            console.log('You won! ' + playerSelection + ' beats ' + computerSelection);
        } else if (computerSelection === 'scissors') {
            computerScore++;
            rounds.push('Computer');
            console.log('You lose! ' + computerSelection + ' beats ' + playerSelection);
        } else {
            console.log('Tie! Both choose ' + playerSelection);
            rounds.push('Tie');
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            playerScore++;
            rounds.push('Player');
            console.log('You won! ' + playerSelection + ' beats ' + computerSelection);
        } else if (computerSelection === 'rock') {
            computerScore++;
            rounds.push('Computer');
            console.log('You lose! ' + computerSelection + ' beats ' + playerSelection);
        } else {
            console.log('Tie! Both choose ' + playerSelection);
            rounds.push('Tie');
        }
    }
}



// Main function

function playGame() {
    for (i = 0; i < 5; i++) {
        getPlayerChoice();
        if(playerChoice == null) {
            console.log('You quit!');
            return;
        } else {
            getComputerChoice();
            playRound(playerChoice,computerChoice);
            if (playerScore === 3 || computerScore === 3) {
                break;
            }
        }
    }
    if (playerScore > computerScore) {
        console.log('You won! \
            Rounds winner recap: ' + rounds);
    } else if (playerScore < computerScore) {
        console.log('You lose! \
        Rounds winner recap: ' + rounds);
    } else if (playerScore === computerScore) {
        console.log('It\'s a tie! \
        Rounds winner recap: ' + rounds);
    }
}

//Start code

playGame();