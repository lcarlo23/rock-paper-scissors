// 1 1 round
    // 1.1 Ask player for input

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

    // 1.2 Make computer choose randomly between Rock Paper Scissors

let computerChoice;

function getComputerChoice() {
        const calc = Math.floor(Math.random() * 3) + 1;
        computerChoice = (calc === 1) ? 'rock' : (calc === 2) ? 'paper' : 'scissors';
        return computerChoice;
}

    // 1.3 Compare player result with computer result
    // 1.4 save round result

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



// 5 rounds game

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


playGame();