var inquirer = require("inquirer");
var isLetter = require('is-letter');
var Word = require("./Word");
var guessesLeft = 10;
var newWord = '';
words = ["Here I am", "Testing", "This is a long, long phrase!"];

letterGuess = function () {
    inquirer
        .prompt([{
            name: "guess",
            message: "Guess a letter: ",
            validate: function (value) {
                if (isLetter(value)) {
                    return true;
                }
                return false;
            }
        }])
        .then(function (answer) {
            var ltr = answer.guess;
            var guessed = newWord.correctGuess(ltr);
            var didIwin = newWord.renderDisplay(guessed, guessesLeft)[1];
            var gameOver = false;

            if (didIwin) {
                console.log(display + "\nYou got it right!!!\n\n");
                gameOver = true;
            }

            if (!guessed) {
                guessesLeft--;
            }

             var display = newWord.renderDisplay(guessed, guessesLeft)[0];

            if (guessesLeft === 0) {
                display = "\n\nYou didn't guess the word.\n\nGame over!!\n\n";
                gameOver = true;
            }

            if (gameOver) {
                console.log(display);
                inquirer
                    .prompt([{
                        type: "confirm",
                        name: "newgame",
                        message: "Play again?: ",
                        default: true
                    }])
                    .then(function (answer) {
                        if (answer.newgame) {
                            gameStart();
                        }
                    });
            } else {
                console.log(display);
                letterGuess();
            }
        });
};

gameStart = function () {
    var randNum = Math.floor(Math.random() * words.length);
    newWord = new Word(words[randNum]);
    var display = newWord.getLetters();
    console.log(display);
    guessesLeft = 10;
    letterGuess();
};

gameStart();
