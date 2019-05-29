var Letter = require("./letter.js");
var Word = function (curWordArr) {
  this.curWordArr = curWordArr;
  this.buildWord = function() {
    letterObj= [];
    // builtWord= [];
    for (let j = 0; j < this.curWordArr.length; j++) {
      let letter = new Letter(curWordArr.charAt(j));
      letterObj.push(letter);
      // builtWord.push(curWordArr.charAt(j));

    };
  }
  this.displayWord = function() {
    var displayWord = ''
    for (let k = 0; k < letterObj.length; k++) {
      var thisChar = letterObj[k];
      var sayIt = thisChar.showVal();
      //!ReferenceError: letter is not defined
      displayWord = displayWord + sayIt;
    }
    console.log("\u001b[1;34m "+displayWord); 
  
  };
  this.checkLetter = function (userGuess) {
    letter.getGuessed(userGuess);
  };
  this.hasAllLetters = function() {
    for (let m = 0; m < letterObj.length; m++) {
      var thisChar = letterObj[m];
      if (!thisChar.isGuessed) {
        return false;
      }
    }
    return true;
  };
};

module.exports = Word;