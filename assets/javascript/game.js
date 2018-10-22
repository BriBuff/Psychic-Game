var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 
var numWins = 0;
var numlosses = 0;
var numberGuessesMax = 9;
var guessLeft, guessLetters

var directions= document.getElementById("directions");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guesses = document.getElementById("numberGuesses");
var userGuesses = document.getElementById("userGuesses");
// userGuesses.innerHTML = guessedLetters.join(",");

document.onkeyup = function (event) {
    var userGuess = event.key;
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];
    guessLeft = numberGuessesMax;

    for (guessLeft = 0; guessLeft < 9; guessLeft++) {
    if (userGuess === computerGuess) {
        numWins++; 
    }

    // guessLeft -=1;

    else if (guessLeft === 0) {
        numlosses++;
    }


    directions.textContent = "";
    wins.textContent = "Wins: " + numWins;
    losses.textContent = "Losses: " + numlosses;
    guesses.textContent = "Number of guesses left: " + guessLeft;
    userGuesses.textContent = "You guessed: " + userGuess;

    // reset (
    //     numWins();
    //     numLosses();
    //     guessLeft();

    // )

    // Psuedocode: Reset needed. The guess counter needs to go down and not be stationary after one guess. 
    // The user guesses need to show a string of letters prior to reset. 
    // Attempts to put any of the above pseudocode made it so that the whole game would freeze.

};

};