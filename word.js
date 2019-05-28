var Letter = require("./letter.js");
var Word = function (curWordArr) {
  this.curWordArr = curWordArr;
  this.buildWord = function() {
   
    for (let j = 0; j < this.curWordArr.length; j++) {
      let letter = new Letter(curWordArr.charAt(j));

    };
  }
  this.displayWord = function() {
    var displayWord = ''
    for (let k = 0; k < this.curWordArr.length; k++) {
      let thisLetter = this.curWordArr.charAt(k));
      console.log(thisLetter);


      displayWord = displayWord + letter.showVal(thisLetter);
    }
    console.log(displayWord); 
  };
  this.checkLetter = function (userGuess) {
    letter.getGuessed(userGuess);
  };
};

module.exports = Word;