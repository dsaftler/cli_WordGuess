var inquirer = require("inquirer");
// var readline = require('readline');

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
var Word = require("./word.js");
var curWordArr, allGuesses, displayWord,badGuesses
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
//on (error) throw error;
function playGame() {
  if (nextGame) {
    nextGame = false;
    initGame();
  }
  inquirer.prompt(
    { name: "letter",
      type: "input",
      message: "Type a letter: "
    })
    .then(function (data) {
     userGuess =  data.letter.substring(0,1).toLowerCase();
   //console.log("\u001b[1;34m " + curWordArr.displayWord()); 
    // if (builtWord.toString()!==curWord && guessesLeft>0){
  // rl.question("Type a letter:  ", function (answer) {
  //     var userGuess = answer.toLowerCase();
  //      rl.close();
  // });   
       // var userGuess = 'a';
    alreadyGuessed = allGuesses.indexOf(userGuess) != -1
    if (!alreadyGuessed) {
      curWordArr.setLetterGuessed(userGuess);
      allGuesses = allGuesses + userGuess + ' '
     // now it's been guessed, good or bad
      // var isFound = curWord.indexOf(userGuess) != -1
      // for (let i = 0; i < curWord.length; i++) {
      //   if (curWordArr.charAt(i) === userGuess) {
      //     isFound = true;
      //   };
      // };
      if (curWord.indexOf(userGuess) != -1) {
        console.log("\u001b[1;32m Good Guess !");
      } else {
      // increment curCntGuess
        guessesLeft-- ;
        console.log("\u001b[1;31m Nope...");
        badGuesses = badGuesses + userGuess + ' ';
       }

    } else {
      console.log("\u001b[1;35m You already guessed " + userGuess);
    }
      console.log("\033[0;37m"+curWordArr.displayWord()); 
    if (badGuesses.length>0) {   
      console.log("\u001b[1;34m ...but NOT " + badGuesses+ '  You have '+guessesLeft+ ' guesses left')
    }

    if (curWordArr.hasAllLetters()) {
      cntWins++;
      console.log("\u001b[1;32m CORRECT: The word is " + curWord);
      showPlayData();
      nextGame = true;
    }
    if (guessesLeft === 0) {
      //  increment cntLosses
      cntLosses++;
      console.log("\u001b[1;31m SORRY: The word was " + curWord);
      showPlayData();
      nextGame = true;
    }
      playGame();
       //userGuess.getGuessed();
      // Already Guessed?
      // this sets builtWord and curCntGuess
  });     
 // ;
};

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
    console.log("\u001b[1;34m " + curWordArr.displayWord());
    guessesLeft = 9;
    // wasGuessed = [];
    // gotWord = false;
    allGuesses = ''
    badGuesses = ''
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
  console.log("\u001b[1;34m WON:  " + cntWins + "     LOST: " + cntLosses);
}
playGame();