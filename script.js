// Game Choices array
const rpsls = [
    "Rock",
    "Paper",
    "Scissors",
    "Lizard",
    "Spock"
];

// initialize buttons
const resetSelection = document.getElementById("resetSelection");
const nextRound = document.getElementById("nextRound");
const playerSelector = document.getElementById("playerSelector");

// Score init
let playerScore = 0;
let opponentScore = 0;
let roundNumber = 1;

// New Game (refresh)
document.getElementById("newGame").onclick = function newGame() {
    window.location.reload();
};

// load buttons
document.onload = playerSelectorLoad();

// Player choices (run on load & on next round)
function playerSelectorLoad() {
    for (var i = 0; i < rpsls.length; i++) {
        console.log(rpsls[i]);
        playerSelector.innerHTML += `<button id="${rpsls[i]}" value="${rpsls[i]}">${rpsls[i]}</button>`;
    }
};

// Player Choice from buttons
let playerChoice;

document.getElementById("Rock").addEventListener("click", function () {
    playerChoice = this.value;
    opponentChoiceRandomizer();
})
document.getElementById("Paper").addEventListener("click", function () {
    playerChoice = this.value;
})
document.getElementById("Scissors").addEventListener("click", function () {
    playerChoice = this.value;
    opponentChoiceRandomizer();
})
document.getElementById("Lizard").addEventListener("click", function () {
    playerChoice = this.value;
    opponentChoiceRandomizer();
})
document.getElementById("Spock").addEventListener("click", function () {
    playerChoice = this.value;
    opponentChoiceRandomizer();
});

// PLAY button - funcs to run:
document.getElementById("play").onclick = function () {
    opponentChoiceRandomizer();
    gameDecider();
};

// Opponent choice randomizer
let opponentChoice;

function opponentChoiceRandomizer() {
    let opponentChoice = rpsls[Math.floor(Math.random() * rpsls.length)];
    // log choice for testing
    // console.log(opponentChoice);
};

// GAME DECIDER
function gameDecider() {
    if (playerChoice == opponentChoice) {
        roundTie();
    } else if (playerChoice = "Rock" && opponentChoice == "Scissors" || opponentChoice == "Lizard") {
        roundWin();
    } else if (playerChoice = "Paper" && opponentChoice == "Rock" || opponentChoice == "Spock") {
        roundWin();
    } else if (playerChoice = "Scissors" && opponentChoice == "Paper" || opponentChoice == "Lizard") {
        roundWin();
    } else if (playerChoice = "Lizard" && opponentChoice == "Paper" || opponentChoice == "Spock") {
        roundWin();
    } else if (playerChoice = "Spock" && opponentChoice == "Scissors" || opponentChoice == "Rock") {
        roundWin();
    } else {
        roundLose();
    }
}

// Round score handler
function roundWin() {
    playerScore = playerScore + 1;
    alert("You Win!")
    roundNumber = roundNumber + 1;
    console.log(`Round ${roundNumber - 1} Player Score: ${playerScore} - Opponent Score: ${opponentScore}`);

}
function roundLose() {
    opponentScore = opponentScore + 1;
    alert("You Lose :(")
    roundNumber = roundNumber + 1;
    console.log(`Round ${roundNumber - 1} Player Score: ${playerScore} - Opponent Score: ${opponentScore}`);

}
function roundTie() {
    alert("YOU BOTH LOSE!")
    roundNumber = roundNumber + 1;
    console.log(`Round ${roundNumber - 1} Player Score: ${playerScore} - Opponent Score: ${opponentScore}`);
}

// TEST button - funcs to run:
document.getElementById("testButton").onclick = function () {
    // roundLose()
};
