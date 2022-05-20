// Game Choices array
const rpsls = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

// initialize buttons
const resetSelection = document.getElementById("resetSelection");
const nextRound = document.getElementById("nextRound");
const playerSelector = document.getElementById("playerSelector");
const roundDisp = document.getElementById("roundDisp");
const playerScoreDisp = document.getElementById("playerScoreDisp");
const opponentScoreDisp = document.getElementById("opponentScoreDisp");
const playerChoiceDisp = document.getElementById("playerChoiceDisp");
const opponentChoiceDisp = document.getElementById("opponentChoiceDisp");


// Score init
let playerScore = 0;
let opponentScore = 0;
let roundNumber = 1;
let opponentChoice = "";

// New Game (refresh)
document.getElementById("newGame").onclick = function newGame() {
    window.location.reload();
};

// load buttons
document.onload = playerSelectorLoad();


// Player choices (run on load & on next round)
function playerSelectorLoad() {
    for (var i = 0; i < rpsls.length; i++) {
        playerSelector.innerHTML += `<button id="${rpsls[i]}" value="${rpsls[i]}" style="background: lightblue; width: 120px; height: 60px">${rpsls[i]}</button>`;
    }
};

// Player Choice from buttons
document.getElementById("Rock").addEventListener("click", function () {
    playerChoice = this.value;
})
document.getElementById("Paper").addEventListener("click", function () {
    playerChoice = this.value;
})
document.getElementById("Scissors").addEventListener("click", function () {
    playerChoice = this.value;
})
document.getElementById("Lizard").addEventListener("click", function () {
    playerChoice = this.value;
})
document.getElementById("Spock").addEventListener("click", function () {
    playerChoice = this.value;
});

// PLAY button - funcs to run:
document.getElementById("play").onclick = function () {

    // random machine selection
    let opponentChoice = rpsls[Math.floor(Math.random() * rpsls.length)];
    console.log(`Player: ${playerChoice} Machine: ${opponentChoice}`);


    if (playerChoice == opponentChoice) {
        roundTie();
    } else if (playerChoice == "Rock" && opponentChoice == "Scissors") {
        roundWin();
    } else if (playerChoice == "Rock" && opponentChoice == "Lizard") {
        roundWin();
    } else if (playerChoice == "Paper" && opponentChoice == "Rock") {
        roundWin();
    } else if (playerChoice == "Paper" && opponentChoice == "Spock") {
        roundWin();
    } else if (playerChoice == "Scissors" && opponentChoice == "Paper") {
        roundWin();
    } else if (playerChoice == "Scissors" && opponentChoice == "Lizard") {
        roundWin();
    } else if (playerChoice == "Lizard" && opponentChoice == "Paper") {
        roundWin();
    } else if (playerChoice == "Lizard" && opponentChoice == "Spock") {
        roundWin();
    } else if (playerChoice == "Spock" && opponentChoice == "Scissors") {
        roundWin();
    } else if (playerChoice == "Spock" && opponentChoice == "Rock") {
        roundWin();
    } else {
        roundLose();
    }
};

// Round score handler
function roundWin() {
    playerScore = playerScore + 1;
    alert("You Win!")
    roundNumber = roundNumber + 1;
    console.log(`Round ${roundNumber - 1} Player Score: ${playerScore} - Opponent Score: ${opponentScore}`);
};
function roundLose() {
    opponentScore = opponentScore + 1;
    alert("You Lose :(")
    roundNumber = roundNumber + 1;
    console.log(`Round ${roundNumber - 1} Player Score: ${playerScore} - Opponent Score: ${opponentScore}`);
};
function roundTie() {
    alert("YOU BOTH LOSE!")
    roundNumber = roundNumber + 1;
    console.log(`Round ${roundNumber - 1} Player Score: ${playerScore} - Opponent Score: ${opponentScore}`);
};

// display
function displayLoop() {

    setInterval(function () {
        roundDisp.innerHTML = `Round: ${roundNumber}`;
        playerScoreDisp.innerHTML = `Player Score: ${playerScore}`;
        opponentScoreDisp.innerHTML = `Opponent Score: ${opponentScore}`;

        playerChoiceDisp.innerHTML = `Player Choice: ${playerChoice}`;
        opponentChoiceDisp.innerHTML = `Opponent Choice: ${opponentChoice}`;

    }, 500);

}
displayLoop();