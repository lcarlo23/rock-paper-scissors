// Player input

const round = document.querySelector('#round');
const buttons = document.querySelector('#buttons');
const btns = document.querySelectorAll('#buttons button');
const score = document.querySelector('#score');
const result = document.querySelector('#result');
const winner = document.querySelector('#winner');
const restart = document.querySelector('#restart');

let playerChoice;

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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            playerScore++;
            // rounds.push('Player');
            result.textContent ='You won! ' + playerSelection + ' beats ' + computerSelection;
        } else if (computerSelection === 'paper') {
            computerScore++;
            // rounds.push('Computer');
            result.textContent ='You lose! ' + computerSelection + ' beats ' + playerSelection;
        } else {
            result.textContent ='Tie! Both choose ' + playerSelection;
            // rounds.push('Tie');
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++;
            // rounds.push('Player');
            result.textContent ='You won! ' + playerSelection + ' beats ' + computerSelection;
        } else if (computerSelection === 'scissors') {
            computerScore++;
            // rounds.push('Computer');
            result.textContent ='You lose! ' + computerSelection + ' beats ' + playerSelection;
        } else {
            result.textContent ='Tie! Both choose ' + playerSelection;
            // rounds.push('Tie');
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            playerScore++;
            // rounds.push('Player');
            result.textContent ='You won! ' + playerSelection + ' beats ' + computerSelection;
        } else if (computerSelection === 'rock') {
            computerScore++;
            // rounds.push('Computer');
            result.textContent ='You lose! ' + computerSelection + ' beats ' + playerSelection;
        } else {
            result.textContent ='Tie! Both choose ' + playerSelection;
            // rounds.push('Tie');
        }
    }
}

// Trigger Game

buttons.addEventListener('click', play);

let rounds = 1;

function play(e) {
    if (e.target.nodeName === 'BUTTON') {
        playerChoice = e.target.textContent.toLowerCase();
        getComputerChoice();
        playRound(playerChoice, computerChoice);
        score.textContent = playerScore + ' - ' + computerScore;
        if (rounds >= 5) {
            buttons.removeEventListener('click', play);
            if (playerScore === computerScore) {
                winner.textContent = 'GAME OVER: IT\'S A TIE!';
            } else if (playerScore > computerScore) {
                winner.textContent = 'YOU WIN THE GAME!';
            } else {
                winner.textContent = 'THE COMPUTER WIN THE GAME!';
            };
            restart.style.visibility = 'visible';
            for (btn of btns) {
                btn.classList.add('endgame');
            }
            return;
        }
        rounds++;
        round.textContent = 'ROUND #' + rounds;
    }
};

restart.addEventListener('click', restartGame);

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    rounds = 1;
    round.textContent = 'ROUND #' + rounds;
    score.textContent = '0 - 0';
    result.textContent = '';
    winner.textContent = '';
    restart.style.visibility = 'hidden';
    for (btn of btns) {
        btn.removeAttribute('class');
    }
    buttons.addEventListener('click', play);
}