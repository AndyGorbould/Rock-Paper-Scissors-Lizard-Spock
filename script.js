const rpsls = [
    "Rock",
    "Paper",
    "Scissors",
    "Lizard",
    "Spock"
];

// initialize buttons
const play = document.getElementById("play");
const resetSelection = document.getElementById("resetSelection");
const nextRound = document.getElementById("nextRound");





// testing opponent choice randomization
play.addEventListener("click", opponentChoiceRandomizer());



function opponentChoiceRandomizer() {
    opponentChoice = rpsls[Math.floor(Math.random() * rpsls.length)];
    console.log(opponentChoice);
};
