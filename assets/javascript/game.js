var letters = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];

var wins = 0;
var losses = 0;
var numberGuesses = 9;

var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var numberGuesses = document.getElementById("numberGuesses");
var userGuesses = document.getElementById("userGuesses");

document.onekeyup = function(event) {
    var userGuess = event.key 
    var computerGuess = letters [Math.floor(Math.random() * letters.length)];

    if (userGuess === computerGuess) {
        wins++;
    else if (userGuess === 0) {
        losses++;
    }

    wins.textContent = "Wins " + wins;
    losses.textContent = "Losses " + losses;
    numberGuesses.textContent = "Number of guesses left " + numberGuesses;
    userGuesses.textContent = "You guessed " + userGuess;       

    };
};




