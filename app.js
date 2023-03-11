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

//all 3 button functions are basically the same just slightly tweaked to fit each choice
function pickRock() {
    const lose = new Audio("./boom.mp3")
    const win = new Audio("./win.mp3")
    const tie = new Audio("./tie.mp3")
    let cpuSelection = ""
    roundCount = roundCount + 1

    weightRandom[0].push('wow')
      //^^^^this here is what adds items to the correct array on line 19. each time you pick rock a "wow" gets added to the first nested array, paper adds wow to the second and scissors adds wow to the third. 

    let longestArr = 0
    for (let i = 1; i < weightRandom.length; i++) {
        if (weightRandom[i].length > weightRandom[longestArr].length) {
            longestArr = i
        }
    }
    //^^^^this for loop loops through the weightRandom array on line 19 to check and see which array has the most wows (checking for your most popular choice)

    if (longestArr === 0) {
        cpuSelection = choices[1]
    } else if (longestArr === 1) {
        cpuSelection = choices[2]
    } else if (longestArr === 2) {
        cpuSelection = choices[0]
    }
    //^^^^this is how the computer knows which selection to pick. basically it just notices your most popular selections and makes its choice based on that


    playerSelections.unshift("🪨")
    cpuSelections.unshift(cpuSelection)

    const rock = document.createElement('p')
    rock.innerText = '🪨'
    playerChoice.prepend(rock)

    const cpuRock = document.createElement('p')
    cpuRock.innerText = cpuSelection
    cpuChoice.prepend(cpuRock)
    //^^^these 3 code blocks are what controls the column of past choices at the bottom of the screen and updates the DOM. 

    if (cpuSelection === "🪨") {
        result.innerHTML = "its a tie"
        cpuRock.style.opacity = ".5"
        rock.style.opacity = ".5"
        rock.style.fontSize = "3rem"
        cpuRock.style.fontSize = "3rem"
        tie.play()
    } else if (cpuSelection === "📄") {
        result.innerHTML = "cpu wins"
        cpuWins = cpuWins + 1
        rock.style.opacity = ".5"
        rock.style.fontSize = "3rem"
        lose.play()
    } else if (cpuSelection === "✂️") {
        result.innerHTML = "player wins"
        playerWins = playerWins + 1
        cpuRock.style.opacity = ".5"
        cpuRock.style.fontSize = "3rem"
        win.play()
    }
    //^^^these conditonals are how the computer knows who wins each round. along with making the loser selections less opaque and smaller in the bottom past selections column and keeping track of the total score. 

    playerScore.innerHTML = playerWins
    cpuScore.innerHTML = cpuWins
    roundCounter.innerHTML = roundCount
    turnCount = turnCount + 1
    //^^^all this does is upodate the DOM and keep track of the total rounds.

    if (turnCount === 10) {
        setTimeout(checkWinner, 1500)
        disableButtons()
    }
    //^^^this is what stops the game after 10 rounds have gone by, and calls the checkWinner and disableButtons functions.
}

function pickPaper() {
    const lose = new Audio("./boom.mp3")
    const win = new Audio("./win.mp3")
    const tie = new Audio("./tie.mp3")
    let cpuSelection = ""
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

    playerSelections.unshift("📄")
    cpuSelections.unshift(cpuSelection)

    const paper = document.createElement('p')
    paper.innerText = '📄'
    playerChoice.prepend(paper)

    const cpuPaper = document.createElement('p')
    cpuPaper.innerText = cpuSelection
    cpuChoice.prepend(cpuPaper)

    if (cpuSelection === "🪨") {
        result.innerHTML = "player wins"
        playerWins = playerWins + 1
        cpuPaper.style.opacity = ".5"
        cpuPaper.style.fontSize = "3rem"
        win.play()
    } else if (cpuSelection === "📄") {
        result.innerHTML = "its a tie"
        paper.style.opacity = ".5"
        cpuPaper.style.opacity = ".5"
        paper.style.fontSize = "3rem"
        cpuPaper.style.fontSize = "3rem"
        tie.play()
    } else if (cpuSelection === "✂️") {
        result.innerHTML = "cpu wins"
        cpuWins = cpuWins + 1
        paper.style.opacity = ".5"
        paper.style.fontSize = "3rem"
        lose.play()
    }

    playerScore.innerHTML = playerWins
    cpuScore.innerHTML = cpuWins
    roundCounter.innerHTML = roundCount
    turnCount = turnCount + 1
    if (turnCount === 10) {
        setTimeout(checkWinner, 2000)
        disableButtons()
    }
}

function pickScissors() {
    const lose = new Audio("./boom.mp3")
    const win = new Audio("./win.mp3")
    const tie = new Audio("./tie.mp3")
    let cpuSelection = ""
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

    playerSelections.unshift("✂️")
    cpuSelections.unshift(cpuSelection)

    const scissors = document.createElement('p')
    scissors.innerText = '✂️'
    playerChoice.prepend(scissors)

    const cpuScissors = document.createElement('p')
    cpuScissors.innerText = cpuSelection
    cpuChoice.prepend(cpuScissors)

    if (cpuSelection === "🪨") {
        result.innerHTML = "cpu wins"
        cpuWins = cpuWins + 1
        scissors.style.opacity = ".5"
        scissors.style.fontSize = "3rem"
        lose.play()
    } else if (cpuSelection === "📄") {
        result.innerHTML = "player wins"
        playerWins = playerWins + 1
        cpuScissors.style.opacity = ".5"
        cpuScissors.style.fontSize = "3rem"
        win.play()
    } else if (cpuSelection === "✂️") {
        result.innerHTML = "its a tie"
        cpuScissors.style.opacity = ".5"
        scissors.style.opacity = ".5"
        scissors.style.fontSize = "3rem"
        cpuScissors.style.fontSize = "3rem"
        tie.play()
    }


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
//^^^ this is the clear all button function i made, basically just resets everything without having to reload the page. (also used to reset the game after 10 rounds)

function disableButtons() {
    rockButton.disabled = true
    scissorsButton.disabled = true
    paperButton.disabled = true
}
//^^^bet you cant guesss what this does.

function checkWinner() {
    const lose = new Audio("./boom.mp3")
    if (cpuWins > playerWins) {
        alert('you lost.')
    } else if (playerWins > cpuWins) {
        alert('you win!')
    } else if (cpuWins === playerWins) {
        alert('its a tie')
    }
    clear()
}
//^^^this function runs after 10 rounds have gone by, checking to see who had the most wins and who wins the whole game.


rockButton.addEventListener('click', pickRock);
paperButton.addEventListener('click', pickPaper);
scissorsButton.addEventListener('click', pickScissors);
clearButton.addEventListener('click', clear);