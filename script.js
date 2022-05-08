let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Function to generate target number 
function generateTarget () {
    return Math.ceil((Math.random(0) * 9));
}

// Function to decide on winner
function compareGuesses (human, computer, actual) {
    
    /*
        Closest between human and computer guesses wins.
        If a tied difference, human wins.
        Return TRUE for human, FALSE for computer win.
    */

    const humanDiff = Math.abs(actual - human);
    const computerDiff = Math.abs(actual - computer);

    return humanDiff <= computerDiff;
}

// Function to update computer/human winner score
function updateScore (winner) {
    switch (winner) {
        case "human":
            humanScore++;
            return;
        case "computer":
            computerScore++;
            return;
        default:
            console.log("Case error in script.updateScore");
            return;
    }
}

// Increases the current round count by 1
function advanceRound () {
    currentRoundNumber += 1;
    return;
}