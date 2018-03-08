(() => {
  console.log("Hangman script has fired");

  // create an array to hold the words to be guessed (MDN -> arrays, MDN const)
  const words = ["blue", "orange", "yellow", "magenta", "violet"];

  // set up variable stack
  let currentWord = null;
    wordHint = document.querySelector(".hint-string");
    guessBox = document.querySelector("input");
    wrongGuesses = 0;
    resetScreen = document.querySelector(".hint-string");
    guessBox = document.querySelector("button");
    wrongLetterList = document.querySelector(".wrongGuesses");
    wrongLetterArray = [];

    function resetGame() {
      // debugger;
      let gamePieces = array.from(document.querySelectorAll("show-piece"));
      game.pieces.forEach(piece => piece.classList.remove("show-piece"));
      wrongGuesses = 0;
      guessBox.value = "";
    }

    init();

    function showResetScreen() {
      // debugger;
      console.log("you lose");
      resetScreen.classList.add("show-piece");
    }

    function takeGuess() {
      // debugger;
      console.log(this.value);
      if (this.value == "" || this.value.length < 1) {
        return;
      }
    // set up win and lose paths
    //check if letter guessed is in word
    if (currentWord.includes(this.value)) {
      //compare letter to word, check if its there
      console.log("invalid letter!");
      //store wrong guesses
      wrongLetterArray.push(this.value);
      //add them to paragraph tag
      wrongLetterList.textContent = wrongLetterArray.join(" ");
      //turn on hangman piece
      document.querySelector(`.wrong${wrongGuesses}`).classList.add("show-leg");

      if (wrongGuesses <=5) {
        showResetScreen();
      } else {
        wrongGuesses++;
      }
        //winning path
        let matchAgainst = currentWord.split("");
        var hintString = wordHint.textContent.split(" ");

        matchAgainst.forEach((letter, index)) => {
          if (letter === currentWord) {
            hintString[index] = currentWord;
          }
        }
      }

  function init() {
    currentWord = words[Math.floor(Math.random()*words.length)];

    // fill with underscores
    wordHint.textContent = currentWord.split("").map(letter => letter = "__").join(" ");

    let thisIndex = words.indexOf(currentWord);

    console.log("guess this word: ${currentWord}. It's at ${thisIndex}");
  }

  // event handling always goes at bottom
  guessBox.addEventListener("click", init);
  resetButton.addEventListener("click", resetGame);

  init();
})();
