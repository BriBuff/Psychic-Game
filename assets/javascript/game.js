var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numWins = 0;
var numlosses = 0;
var numberGuessesMax = 9;
var arrayguesses = [];

var directions= document.getElementById("directions");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guesses = document.getElementById("numberGuesses");
var userGuesses = document.getElementById("userGuesses");

var computerGuess = letters[Math.floor(Math.random() * letters.length)];

document.onkeyup = function (event) {
    console.log(event.key);
    console.log(computerGuess);
    var letter = event.key;
    
    // A user presses a button 
    // compare event.key to computerGuess
    if (numberGuessesMax == 0) {
        numlosses++;
        reset();
    }
    else if (event.key === computerGuess){
        numWins++;
        reset();
    } else{
        numberGuessesMax--;
        arrayguesses.push(letter);
    }


    directions.textContent = "";
    wins.textContent = "Wins: " + numWins;
    losses.textContent = "Losses: " + numlosses;
    guesses.textContent = "Number of guesses left: " + numberGuessesMax;
    userGuesses.textContent = "You guessed: " + arrayguesses;

    function reset () {
        computerGuess = letters[Math.floor(Math.random() * letters.length)];
        numberGuessesMax = 9;
        arrayguesses = [];
};

};