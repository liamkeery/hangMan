// JavaScript Document
(() => {
console.log('hangman script fired!');

// create an array to hold the words to be guessed (MDN - arrays, MDN const)

const words = ["blue", "yellow", "orange", "magenta", "violet"];

// setup a variable stack
let currentWord = null;
wordHint = document.querySelector('.current-word')
guessBox = document.querySelector('#myLetter');
wrongGuesses = 0;
correctGuesses = 0;
resetScreen = document.querySelector('.reset-screen');
resetButton = resetScreen.querySelector('#resetButton');
wrongLetterList = document.querySelector('.wrong-letters');
wrongLetterArray = [];

function showResetScreen(message) {
resetScreen.classList.add('show-piece');
resetScreen.querySelector('h3').textContent = message;
}

function resetGame() {
	let gamePieces = Array.from(document.querySelectorAll('show-piece'));
	game.pieces.forEach(piece => piece.classList.remove('show-piece'));
	wrongGuesses = 0;
	guessBox.value = "";
}

init();

function showResetScreen() {
 console.log('you lose,loser');
 resetScreen.classList.add('show-piece');
 }

function takeGuess() {
	// debugger;
	// MDN -> 'this' keyboard
	console.log(this.value);

	if (this.value == "" || this.value.length < 1 ) {
		return;
	}

	let currentGuess = this.value;


	// set up the win and lose paths (if / else)
if (!currentWord.includes(this.value)) {
	// losing path
	// compare the letter guess to the word to seee if it's in there
	console.log('valid letter');
	// store wrong guesses so we can show them to the user
	wrongLetterArray.push(this.value);
	// add them to the paragraph tag
	wrongLetterList.textContent = wrongLetterArray.join(" ");
	// turn on the hangman piece
	document.querySelector(`.wrong${wrongGuesses}`).classList.add('show-piece');

if (wrongGuesses <=5) {
// imcrement the wrongGuesses variable
showResetScreen();
} else {
	// you lose, reset game
	wrongGuesses++;
}

} else {
	// winning path
	let matchAgainst = currentWord.split("");
  var hintString = wordHint.textContent.split(" ");

	matchAgainst.forEach((letter, index) => {
		if (letter === currentGuess) {
			hintString[index] = currentGuess;
			correctGuesses++;
		}
});

wordHint.textContent = ""; // make the hint o the screen be empty //
wordHint.textContent = hintString.join(" ");

if (correctGuesses === currentWord.length) {
	showResetScreen();
}

}
}

function init() {
	// look at MDN -> th Math object
	currentWord = words[Math.floor(Math.random()*words.length)];

// fill the hint with underscores
	wordHint.textContent = currentWord.split("").map(letter => letter = "__").join("__");
  console.log(`guess this word: ${currentWord}. it's at ${words.indexOf(currentWord)}`);
}

//event handling does at bottom
guessBox.addEventListener('keyup', takeGuess);
resetButton.addEventListener('keyup', resetGame);

init();
})();
