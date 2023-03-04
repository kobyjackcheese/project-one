const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const playerScore = document.querySelector('.playerScore');
const cpuScore = document.querySelector('.cpuScore');
const clearButton = document.querySelector('.clear');
const playerChoice = document.querySelector('.playerChoices');
const cpuChoice = document.querySelector('.cpuChoices');
const result = document.querySelector('.result');
const roundCounter = document.querySelector('.roundCount');


const choices = ["🪨", "📄", "✂️"];
let playerSelections = []
let cpuSelections = []
let cpuWins = 0
let playerWins = 0
let weightRandom = [[], [], []];
let turnCount = 0
let roundCount = 0



function pickRock() {
    weightRandom[0].push('wow')
    roundCount = roundCount + 1
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
    roundCounter.innerHTML = roundCount
    turnCount = turnCount + 1
    console.log(turnCount)
    if (turnCount === 10) {
        setTimeout(checkWinner, 2000)
        disableButtons()
    }
}

function pickPaper() {
    weightRandom[1].push('wow')
    roundCount = roundCount + 1
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
    roundCounter.innerHTML = roundCount
    turnCount = turnCount + 1
    console.log(turnCount)
    if (turnCount === 10) {
        setTimeout(checkWinner, 2000)
        disableButtons()
    }
}

function pickScissors() {
    weightRandom[2].push('wow')
    roundCount = roundCount + 1
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
    roundCounter.innerHTML = roundCount
    turnCount = turnCount + 1

    if (turnCount === 10) {
        setTimeout(checkWinner, 2000)
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
    roundCount = 0
    roundCounter.innerHTML = roundCount
    playerChoice.innerHTML = playerSelections
    cpuChoice.innerHTML = cpuSelections
    playerScore.innerHTML = playerWins
    cpuScore.innerHTML = cpuWins
    result.innerHTML = ""
    rockButton.disabled = false
    scissorsButton.disabled = false
    paperButton.disabled = false
}

function disableButtons() {
    rockButton.disabled = true
    scissorsButton.disabled = true
    paperButton.disabled = true
}

function checkWinner () {
  if (cpuWins > playerWins) {
    alert ('you lost.')
  }else if (playerWins > cpuWins) {
    alert ('you win!')
  }
  clear()
}



rockButton.addEventListener('click', pickRock);
paperButton.addEventListener('click', pickPaper);
scissorsButton.addEventListener('click', pickScissors);
clearButton.addEventListener('click', clear);