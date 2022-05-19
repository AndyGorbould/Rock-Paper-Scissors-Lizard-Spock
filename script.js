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

// Score init
let playerScore = 0;
let opponentScore = 0;
let roundNumber = 1;


// PLAY button - funcs to run:
document.getElementById("play").onclick = function () {
    opponentChoiceRandomizer()
};

// Opponent choice randomizer
function opponentChoiceRandomizer() {
    let opponentChoice = rpsls[Math.floor(Math.random() * rpsls.length)];
    // log choice for testing
    console.log(opponentChoice);
};


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
    roundLose()
};


// GAME DECIDER
if (playerChoice == opponentChoice) {
    roundTie();
} else if (playerChoice = "Rock" && opponentChoice == "Scissors" || opponentChoice == "Lizard") {
    roundWin;
} else if (playerChoice = "Paper" && opponentChoice == "Rock" || opponentChoice == "Spock") {
    roundWin;
} else if (playerChoice = "Scissors" && opponentChoice == "Paper" || opponentChoice == "Lizard") {
    roundWin;
} else if (playerChoice = "Lizard" && opponentChoice == "Paper" || opponentChoice == "Spock") {
    roundWin;
} else if (playerChoice = "Spock" && opponentChoice == "Scissors" || opponentChoice == "Rock") {
    roundWin;
} else {
    roundLose();
}