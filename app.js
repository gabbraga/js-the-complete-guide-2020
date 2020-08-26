const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors'
let gameIsRunning = false;


const getPlayerChoice = function() {
    const userChoice = prompt(`${ROCK}, ${PAPER}, or ${SCISSORS}?`, '').toLowerCase();
    //if the user doesnt choose rock, paper, or scissor, return rock by default
    if (userChoice !== ROCK && userChoice !== PAPER && userChoice !== SCISSORS) {
        alert(`Invalid option. You have been given ${ROCK} instead!`);
        return ROCK;
    }
    return userChoice;
}

const getComputerChoice = function() {
    const randomValue = Math.random();
    if(randomValue < 0.34) {
        return ROCK;
    }else if (randomValue < 0.67) {
        return PAPER;
    }else {
        return SCISSORS;
    }
}

const getWinner = function(comp, player) {
    console.log(`You: ${player} Comp: ${comp}\n`);
    if(comp === player) {
        console.log(`It's a tie!`);
    } else if (
        comp === ROCK && player === PAPER ||
        comp === PAPER && player === SCISSORS ||
        comp == SCISSORS && player === ROCK
    ) {
        console.log('You win! Blastastic!');
    } else {
        console.log('You lose! Womp womp wommmpp...');
    }
    gameIsRunning = false;
}

startGameBtn.addEventListener('click', function() {
    if(gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    getWinner(computerSelection, playerSelection);
});
