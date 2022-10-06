let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById('userScore');
const computerScore_span = document.getElementById('computerScore');
const computerScore_div = document.querySelector('.scoreBoard');
const result_div = document.querySelector('.result p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

/** function to increment score and display message **/

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = userChoice + " beats " + computerChoice + ". You win!"
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = computerChoice + " beats " + userChoice + ". You lost!"
}

function draw(userChoice, computerChoice) {
    result_div.innerHTML = userChoice + " ties with " + computerChoice + ". You tie!"
}

/** win, loose, draw cases **/

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

/** events **/

function main() {
    rock_div.addEventListener('click', function () {
        game("r")
    });
    paper_div.addEventListener('click', function () {
        game('p');
    });
    scissors_div.addEventListener('click', function () {
        game('s');
    })
}

main();