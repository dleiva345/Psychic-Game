
// Create array with alpahbete letters 
var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Create variables 
var wins = 0;
var losses = 0;
var guessesLeft = 9;
// guessesSoFar is an array that will hold all the user's guesses in each round
var guessesSoFar = [];
// userGuess is what the user picks by pressing a key
var userGuess = null;
// Set computer to pick a random letter and store it in letterToBeGuessed
var letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);

// Function is run whenever the user presses a key 
document.onkeyup = function(event) {

	// Determine what alphabetic key was pressed 
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	// Make sure that the character user picks is within the alphabet
	if (guessesSoFar.indexOf(userGuess) < 0 && alphabetLetters.indexOf(userGuess) >= 0) {
        guessesSoFar[guessesSoFar.length]=userGuess;
       
		// if it is a new letter then decrease remaining guesses by 1
		guessesLeft--;
	}

	// if letterToBeGuessed is same as userGuess then record it as a win
	if (letterToBeGuessed == userGuess) {
		wins++;
        alert("You guessed it! Are you a Psychic?");
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
	}

	// if guessesLeft gets to 0 then record it as a loss
	if (guessesLeft == 0) {
		losses++;
        //console.log("You lost!");
        alert("Sorry! You are not a psychic");
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
	}

	// Create varaible to hold new HTML that keeps track of the user and computer guesses
	var html = "<p><h1>The Psychic Game</h1></p>" + "<p><h4>Guess what letter I\'m thinking of</h4></p>" + "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + "<p><h4>Your guesses so far: " + guessesSoFar + "</h4></p>";
	// Set the inner HTML contents of #game div to our html string
	document.querySelector("#game").innerHTML = html;

}