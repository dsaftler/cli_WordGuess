var Letter = require("./letter.js");
var Word = function(curWordArr) {
  this.curWordArr = curWordArr;
  this.buildWord = function() {
   
    for (let j = 0; j < curWordLen; j++) {
      // does the letter exist already?
      var 'letter_'+j = new Letter(j)

    };
  }
  this.displayWord = function() {
    var displayWord = ''
    for (let k = 0; k < curWordLen; k++) {
      displayWord = displayWord + letter.showVal(k);
    }
    console.log(displayWord); 
  };
  this.checkLetter = function (userGuess) {
    letter.getGuessed(userGuess);
  };
};

module.exports = Word;