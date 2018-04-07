
var Letter = require("./Letter");

var Word = function (word) {
    this.letters = [];
    this.word = word;
    this.getLetters = function () {
        var display = '';
        for (var i = 0; i < this.word.length; i++) {
            var newLetter = new Letter(this.word.charAt(i));
            newLetter.checkIt();
            display += newLetter.renderIt() + ' ';
            this.letters.push(newLetter);
        }
        return display;
    };

    this.correctGuess = function (ltr) {
        var guessedIt = false;
        for (i = 0; i < this.letters.length; i++) {
            if (this.letters[i].checkIt(ltr.toUpperCase())) {
                guessedIt = true;
            }
        }
        return guessedIt;
    };

    this.renderDisplay = function (guessed, guessesLeft) {
        var display = '';
        var winGame = true;
        for (i = 0; i < this.letters.length; i++) {
            display += this.letters[i].renderIt() + ' ';
            if (this.letters[i].appear === false) {
                winGame = false;
            }
        }
        if (guessed) {
            display += "\n\nCORRECT!!!\n";
        } else {
            display += "\n\nINCORRECT!!!\n\n" + guessesLeft + " guesses remaining!!!\n"
        }
        return [display, winGame];
    };
};

module.exports = Word;
