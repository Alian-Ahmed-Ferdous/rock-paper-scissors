const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;
let playerWins = 0;
let computerWins = 0;

choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    result = checkWinner();
    resultText.textContent = result;
    
    if (result === "You Win!") {
        playerWins++;
    } else if (result === "You Lose!") {
        computerWins++;
    }

    updateScoreboard();
}));

function computerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1;
    switch (randNum) {
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}

function checkWinner() {
    if (player == computer) {
        return "Draw!";
    } else if (computer == "ROCK") {
        return (player == "PAPER") ? "You Win!" : "You Lose!";
    } else if (computer == "PAPER") {
        return (player == "SCISSORS") ? "You Win!" : "You Lose!";
    } else if (computer == "SCISSORS") {
        return (player == "ROCK") ? "You Win!" : "You Lose!";
    }
}

function updateScoreboard() {
    document.querySelector("#playerWins").textContent = `Player Wins: ${playerWins}`;
    document.querySelector("#computerWins").textContent = `Computer Wins: ${computerWins}`;

    document.querySelector("#playerProgressBar").value = playerWins;
    document.querySelector("#computerProgressBar").value = computerWins;

    if (playerWins >= 10) {
        alert("Congratulations! You won the best of 10 games!");
        resetGame();
    } else if (computerWins >= 10) {
        alert("Sorry! The computer won the best of 10 games.");
        resetGame();
    }
}

function resetGame() {
    playerWins = computerWins = 0
}