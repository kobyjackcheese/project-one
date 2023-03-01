// const rockButton = document.querySelector('.rock');
// //console.log(rockButton);
// const paperButton = document.querySelector('.paper');
// //console.log(paperButton);
// const scissorsButton = document.querySelector('.scissors');
// //console.log(scissorsButton);
// const playerScore = document.querySelector('.playerScore');
// //console.log(playerScore);
// const cpuScore = document.querySelector('.cpuScore');
// //console.log(cpuScore);

let selections = ['rock', 'paper', 'scissors'];

function pickRock() {
console.log('wow rock')
}

function pickPaper() {
    console.log('wow paper')
}

function pickScissors() {
console.log('wow scissors')
}
console.log(selections);
rockButton.addEventListener('click', pickRock);
paperButton.addEventListener('click', pickPaper);
scissorsButton.addEventListener('click', pickScissors);