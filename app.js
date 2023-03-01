const rockButton = document.querySelector('.rock');
//console.log(rockButton);
const paperButton = document.querySelector('.paper');
//console.log(paperButton);
const scissorsButton = document.querySelector('.scissors');
//console.log(scissorsButton);
const playerScore = document.querySelector('.playerScore');
//console.log(playerScore);
const cpuScore = document.querySelector('.cpuScore');
//console.log(cpuScore);
const clearButton = document.querySelector('.clear');
// console.log(clearButton);

const choices = ["rock", "paper", "scissors"];
let playerSelections = []
let cpuWins = 0
let playerWins = 0

function pickRock() {
    let playerSelection = "rock"
    let cpuSelection = choices[Math.floor(Math.random() * choices.length)];
    console.log(`computer chose ${cpuSelection}`);

    if (cpuSelection === "rock") {
        console.log('tie')
    } else if (cpuSelection === "paper") {
        console.log("cpu wins")
        cpuWins = cpuWins + 1
    } else if (cpuSelection === "scissors") {
        console.log("player wins")
        playerWins = playerWins + 1
    }
    playerSelections.push("rock")
    console.log(`player has chosen ${playerSelections}`)
    console.log(`player has won ${playerWins} times`)
    console.log(`cpu has won ${cpuWins} times`)
}

function pickPaper() {
    let playerSelection = "paper"
    let cpuSelection = choices[Math.floor(Math.random() * choices.length)];
    console.log(`computer chose ${cpuSelection}`);

    if (cpuSelection === "rock") {
        console.log('player wins')
        playerWins = playerWins + 1
    } else if (cpuSelection === "paper") {
        console.log("tie")
    } else if (cpuSelection === "scissors") {
        console.log("cpu wins")
        cpuWins = cpuWins + 1
    }
    playerSelections.push("paper")
    console.log(`player has chosen ${playerSelections}`)
    console.log(`player has won ${playerWins} times`)
    console.log(`cpu has won ${cpuWins} times`)
}

function pickScissors() {
    let playerSelection = "scissors"
    let cpuSelection = choices[Math.floor(Math.random() * choices.length)];
    console.log(`computer chose ${cpuSelection}`);

    if (cpuSelection === "rock") {
        console.log('cpu wins')
        cpuWins = cpuWins + 1
    } else if (cpuSelection === "paper") {
        console.log("player wins")
        playerWins = playerWins + 1
    } else if (cpuSelection === "scissors") {
        console.log("tie")
    }
    playerSelections.push("scissors")
    console.log(`player has chosen ${playerSelections}`)
    console.log(`player has won ${playerWins} times`)
    console.log(`cpu has won ${cpuWins} times`)
}

function clear() {
    playerSelections = []
    playerWins = 0
    cpuWins = 0
    console.log(playerSelections)
    console.log(playerWins)
    console.log(cpuWins)
}


rockButton.addEventListener('click', pickRock);
paperButton.addEventListener('click', pickPaper);
scissorsButton.addEventListener('click', pickScissors);
clearButton.addEventListener('click', clear);