const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const playerScore = document.querySelector('.playerScore');
const cpuScore = document.querySelector('.cpuScore');
const clearButton = document.querySelector('.clear');
const playerChoice = document.querySelector('.playerChoices');
const cpuChoice = document.querySelector('.cpuChoices');
const result = document.querySelector('.result');


const choices = ["🪨", "📄", "✂️"];
let playerSelections = []
let cpuSelections = []
let cpuWins = 0
let playerWins = 0
let weightRandom = [[], [], []];
let turnCount = 0
//1 is rock, 2 is paper 3 is scissors



function pickRock() {
    let playerSelection = "🪨"
    let cpuSelection = choices[Math.floor(Math.random() * choices.length)];
    weightRandom[0].push('wow')

    let longestArr = 0

    for (let i = 1; i < weightRandom.length; i++) {
        if (weightRandom[i].length > weightRandom[longestArr].length) {
            longestArr = i
        }
    }


    if (longestArr === 0) {
        cpuSelection = choices[1]
    } else if (longestArr === 1) {
        cpuSelection = choices[2]
    } else if (longestArr === 2) {
        cpuSelection = choices[0]
    }

    if (cpuSelection === "🪨") {
        result.innerHTML = "its a tie"
    } else if (cpuSelection === "📄") {
        result.innerHTML = "cpu wins"
        cpuWins = cpuWins + 1
    } else if (cpuSelection === "✂️") {
        result.innerHTML = "player wins"
        playerWins = playerWins + 1
    }
    playerSelections.push("🪨")
    cpuSelections.push(cpuSelection)
    playerChoice.innerHTML = playerSelections
    cpuChoice.innerHTML = cpuSelections
    playerScore.innerHTML = playerWins
    cpuScore.innerHTML = cpuWins
    turnCount = turnCount + 1
    console.log(turnCount)
    if (turnCount === 10) {
        console.log('game over')
        setTimeout(gameOver, 2000)
        disableButtons()
    }
}

function pickPaper() {
    let playerSelection = "paper"
    let cpuSelection = choices[Math.floor(Math.random() * choices.length)];
    weightRandom[1].push('wow')

    let longestArr = 0

    for (let i = 1; i < weightRandom.length; i++) {
        if (weightRandom[i].length > weightRandom[longestArr].length) {
            longestArr = i
        }
    }


    if (longestArr === 0) {
        cpuSelection = choices[1]
    } else if (longestArr === 1) {
        cpuSelection = choices[2]
    } else if (longestArr === 2) {
        cpuSelection = choices[0]
    }

    if (cpuSelection === "🪨") {
        result.innerHTML = "player wins"
        playerWins = playerWins + 1
    } else if (cpuSelection === "📄") {
        result.innerHTML = "its a tie"
    } else if (cpuSelection === "✂️") {
        result.innerHTML = "cpu wins"
        cpuWins = cpuWins + 1
    }
    playerSelections.push("📄")
    cpuSelections.push(cpuSelection)
    playerChoice.innerHTML = playerSelections
    cpuChoice.innerHTML = cpuSelections
    playerScore.innerHTML = playerWins
    cpuScore.innerHTML = cpuWins
    turnCount = turnCount + 1
    console.log(turnCount)
    if (turnCount === 10) {
        console.log('game over')
        setTimeout(gameOver, 2000)
        disableButtons()
    }
}

function pickScissors() {
    let playerSelection = "scissors"
    let cpuSelection = choices[Math.floor(Math.random() * choices.length)];
    weightRandom[2].push('wow')

    let longestArr = 0

    for (let i = 1; i < weightRandom.length; i++) {
        if (weightRandom[i].length > weightRandom[longestArr].length) {
            longestArr = i
        }
    }

    if (longestArr === 0) {
        cpuSelection = choices[1]
    } else if (longestArr === 1) {
        cpuSelection = choices[2]
    } else if (longestArr === 2) {
        cpuSelection = choices[0]
    }

    if (cpuSelection === "🪨") {
        result.innerHTML = "cpu wins"
        cpuWins = cpuWins + 1
    } else if (cpuSelection === "📄") {
        result.innerHTML = "player wins"
        playerWins = playerWins + 1
    } else if (cpuSelection === "✂️") {
        result.innerHTML = "its a tie"
    }

    playerSelections.push("✂️")
    cpuSelections.push(cpuSelection)
    playerChoice.innerHTML = playerSelections
    cpuChoice.innerHTML = cpuSelections
    playerScore.innerHTML = playerWins
    cpuScore.innerHTML = cpuWins
    turnCount = turnCount + 1
    console.log(turnCount)
    if (turnCount === 10) {
        console.log('game over')
        setTimeout(gameOver, 2000)
        disableButtons()
    }
}

function clear() {
    playerSelections = []
    cpuSelections = []
    playerWins = 0
    cpuWins = 0
    weightRandom = [[], [], []]
    turnCount = 0
    playerChoice.innerHTML = playerSelections
    cpuChoice.innerHTML = cpuSelections
    playerScore.innerHTML = playerWins
    cpuScore.innerHTML = cpuWins
    result.innerHTML = ""
    rockButton.disabled = false
    scissorsButton.disabled = false
    paperButton.disabled = false
}

function gameOver() {
    clear()
    alert('you lost.')
}
function disableButtons() {
    rockButton.disabled = true
    scissorsButton.disabled = true
    paperButton.disabled = true
}

rockButton.addEventListener('click', pickRock);
paperButton.addEventListener('click', pickPaper);
scissorsButton.addEventListener('click', pickScissors);
clearButton.addEventListener('click', clear);