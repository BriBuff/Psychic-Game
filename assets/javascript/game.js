var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//letters gots to be strings /\ /\  Also, I'm not having a problem with linking the game.js file. Sorry :(
//You defined 'wins' as a variable twice, once as a number and once as a DOM element (lines 4 & 8) - 
//It really doesn't know which one to pick. Try changing the other variables as well; make unique variables the counters AND the elements. 
var numWins = 0;
var numlosses = 0;
var numberGuessesMax = 9;
var guessLeft

var directions= document.getElementById("directions");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guesses = document.getElementById("numberGuesses");
var userGuesses = document.getElementById("userGuesses");

//You were calling "onekeyup" rather than "onkeyup", so it wasn't working. Watch out for spelling!
document.onkeyup = function (event) {
    var userGuess = event.key;
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];
    guessLeft = numberGuessesMax;

    for (i = 0; i < 9; i++) {
    if (userGuess === computerGuess) {
        numWins++;
    }

    else if (userGuess !== computerGuess) {
        guessLeft -= 1;
    }


    if (guessLeft === 0) {
        numlosses++;
    }


    directions.textContent = "";
    wins.textContent = "Wins: " + numWins;
    losses.textContent = "Losses: " + numlosses;
    guesses.textContent = "Number of guesses left: " + guessLeft;
    userGuesses.textContent = "You guessed: " + userGuess;

};

};