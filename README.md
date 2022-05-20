# Rock-Paper-Scissors-Lizard-Spock

### Learning objectives
- Generate random outcomes
- If statements
- Coming up with a basic algorithm from scratch


_________________________
### How can I make this?
- [X] Use this MD to plan the game from the start!
- [] Select RPSLS from a row of appropriate images
- [] Using if/else arguments for the winner?
- [] An element for displaying player/opponent scores after each round
- [] Button to play next round after results
    this must be disabled until a round is complete
- [] See if this could be made into an app using Framework7 or alternative (final goal)
- [X] Win func adds playerScore++, Lose opponentScore++, tie no change
- [] Replace RPSLS with Street Fighter II characters (use an API???) - display win/lose images based on character
_________________________
### Steps taken:
- [X] Using & modifying MD all the way through the project to keep general oversight
- [X] Making all elements, IDs, classes clear & readable
- [X] Button to randomize the "opponent" choice
- [X] Using an array for the RPSLS
- [X] Functions roundWin roundLose roundTie
- [X] Buttons for each player choice
- [X] New Game button - refreshes page to clear current scores
- [X] Buttons work
- [X] Test GAME DECIDER if/else statement - needs debugging
- [X] Display Player & Opponent Score
- [X] Display Round Number
- [X] Removed unneccessary parts (opponentChoiceDisp, reset & next round buttons)
_________________________
### List of elements JS:
- rpsls (array of the choices)
- resetSelection (button)
- nextRound (button)
- playerScore (display)
- opponentScore (display)
- roundNumber (display)
- 
- opponentChoice
- playerChoice
- playerSelector
- playerSelectorLoad
- 
- 
_________________________
### List of HTML IDs:
- testButton
- playerSelector (all choices available)
- play (enabled after playSelector)
- resetSelection
- nextRound
- opponentChoice (random choice displayed after "play" has been made)
- playerChoice (the selected choice displayed)
_________________________
_________________________

### How to play?

- Rock: Scissors & Lizard
- Paper: Rock & Spock
- Scissors: Paper & Lizard
- Lizard: Paper & Spock
- Spock: Scissors & Rock