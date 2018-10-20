var computerChoices = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];

var wins = 0;
var losses = 0;
var numberGuesses = -9;

var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var numberGuesses = document.getElementById("numberGuesses");
var userGuesses = document.getElementById("userGuesses");

document.onekeyup = function(event) {
    var userGuess = event.key
    var userChoices = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]; 
    var computerGuess = computerChoices [Math.floor(Math.random() * computerChoices.length)];
}

wins.textContent = "Wins " + wins;
losses.textContent = "Losses " + losses;
numberGuesses.textContent = "Number of guesses left " + numberGuesses;
userGuesses.textContent = "You guessed " + userGuess;



