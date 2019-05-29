var Letter = function(strVal)  {
  this.strVal = strVal;
  this.isGuessed = false;
  this.showVal = function () {
    return this.isGuessed ? this.strVal+' ' : "_ ";
  }
  this.getGuessed = function (userGuess) {
    if (!this.isGuessed) {
      this.isGuessed = true;
      // now it's been guessed, good or bad
      var isFound = false;
      for (let i = 0; i < curWordArr.length; i++) {
        if (curWordArr.charAt(i) === userGuess) {          
          //  builtWord[i] = userGuess;
            isFound = true;
          };
      };
      if (!isFound) {
     // increment curCntGuess
        guessesLeft--;
      }

    } else {
      console.log("\u001b[1;35m You already guessed "+userGuess);
    }
  }
} 
module.exports = Letter;
// the letter is in the word
// locate and display all the indexes that it occurs
// the letter has been is NOT in the word

// var letter = new Letter('A',false);
// console.log(letter.showVal());
// console.log("\u001b[1;32m Green message");
// console.log("\u001b[1;31m Red message");
// console.log("\u001b[1;34m Blue message");
// console.log("\u001b[1;33m Yellow message");
// console.log("\u001b[1;35m Purple message");
// console.log("\u001b[1;36m Cyan message");
