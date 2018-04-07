
var isLetter = require('is-letter');

var Letter = function (letter) {
    this.letter = letter;
    this.appear = false;
    this.checkIt = function (ltr) {
        // if (this.letter.toUpperCase() == ' ') {
            if(!isLetter(this.letter.toUpperCase())){
            this.appear = true;
        } else {
            if (this.letter.toUpperCase() === ltr) {
                this.appear = true;
                return true;
            } else {
                return false;
            }
        }
    };
    this.renderIt = function () {
        if (this.appear === false) {
            return '_';
        } else {
            return this.letter;
        }
    };
};

module.exports = Letter;
