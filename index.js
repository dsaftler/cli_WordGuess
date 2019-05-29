var inquirer = require("inquirer");
var Word = require("./word.js");
var curWordArr, arrGuessed, displayWord
var userGuess,  curWord
var wordArr = [
  {word: "unicorn"},{word: "griffin"},{word: "mermaid"},{word: "centaur"},
  {word: "pegasus"},{word: "minotaur"},{word: "dragon"},{word: "phoenix"},
  {word: "cerberus"},{word: "hippogryph"}];
var cntWins = 0;
var guessesLeft = 9;
var cntLosses = 0;
var curWordLen = 0;
var letterObj = [];
var builtWord ='';
var nextGame = true;
var gotWord = false;
// read in a random word
// initialize display
// display a dummy array of the same length __ __ __ __ __
function playGame() {
  if (nextGame) {
    nextGame = false;
    initGame();
  }
  curWordArr.displayWord();
  // if (builtWord.toString()!==curWord && guessesLeft>0){
  inquirer.prompt({
    name: "letter",
    type: "input",
    message: "Type a letter: " 
  })
  .then(function (data) {
    var userGuess = data.letter.toLowerCase();
    curWordArr.checkLetter(userGuess);
    currWordArr.displayWord();
    if (currWordArr.hasAllLetters()) {
      cntWins++;
      console.log("\u001b[1;32m CORRECT: The word is " + curWord);
      nextGame = true;
    }
    if (guessesLeft > 0) {
      //  increment cntLosses
      cntLosses++;
      console.log("\u001b[1;31m SORRY: The word was " + curWord);
      nextGame = true;
    }
   

      //userGuess.getGuessed();
      // Already Guessed?
      // this sets builtWord and curCntGuess
  });     
  showPlayData();
  playGame();
}

function getRandomPtr(max) {
  return Math.floor(Math.random() * Math.floor(max));
  // this will return 0 through max-1
}
function initGame() {
  if (wordArr.length > 0) {
    curPtr = getRandomPtr(wordArr.length);
    curWord = wordArr[curPtr].word;
    wordArr.splice(curPtr, 1);
    //curWordLen = curWord.length;
    curWordArr = new Word(curWord); 
    letterObj=[];
    curWordArr.buildWord();
    guessesLeft = 9;
    wasGuessed = [];
    gotWord = false;
    // myWord = [];
    // read in a random word
    // initialize display
    // display a dummy array of the same length __ __ __ __ __
    // remove that word from wordArr
  } else {
    //END OF GAME
    console.log("\u001b[1;34m GAME OVER!");
    process.exit;
  }
}
function showPlayData() {
  console.log("\u001b[1;34m WON:  " + cntWins);
  console.log("\u001b[1;34m LOST: " + cntLosses);
}
playGame();