var letters = ['a', 'b', 'c'];
//letters gots to be strings /\ /\  Also, I'm not having a problem with linking the game.js file. Sorry :(
//You defined 'wins' as a variable twice, once as a number and once as a DOM element (lines 4 & 8) - 
//It really doesn't know which one to pick. Try changing the other variables as well; make unique variables the counters AND the elements. 
var numWins = 0;
var losses = 0;
var numberGuesses = 9;

var wins = document.getElementById("wins");
var wins = document.getElementById('wins');
var losses = document.getElementById("losses");
var numberGuesses = document.getElementById("numberGuesses");
var userGuesses = document.getElementById("userGuesses");

//You were calling "onekeyup" rather than "onkeyup", so it wasn't working. Watch out for spelling!
document.onkeyup = function (event) {
    var userGuess = event.key;
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];

    if (userGuess === computerGuess) {
        numWins++
    }
    else if (userGuess === 0) {
        losses++;
    }

    wins.textContent = "Wins " + numWins;
    losses.textContent = "Losses " + losses;
    numberGuesses.textContent = "Number of guesses left " + numberGuesses;
    userGuesses.textContent = "You guessed " + userGuess;

};git r