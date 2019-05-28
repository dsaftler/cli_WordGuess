var inquirer = require("inquirer");
var Word = require("./word.js");
var curWordArr, builtWord, arrGuessed
var userGuess,  curWord
var guessesLeft = 9;
var cntWins = 0;
var cntLosses = 0;
var curWordLen = 0

playGame();

// read in a random word
// initialize display
// display a dummy array of the same length __ __ __ __ __
function playGame() {
  initGame();
  currWordArr.displayWord();
  while (builtWord!==curWordArr AND guessLeft>0){
    inquirer.prompt([
      {name: "letter",
      message: "Type a letter" }])
    .then(function(data){
      var userGuess = new Letter(data.letter);
      curWordArr.checkLetter(userGuess);
      //userGuess.getGuessed();
      // Already Guessed?
      // this sets builtWord and curCntGuess

      currWordArr.displayWord();
    })
  } //.. end while
  if (builtWord ==== curWordArr) {
      // increment cntWins
    cntWins++;
    console.log("\u001b[1;32m CORRECT: The word is "+curWord);
    
  }else {
    //  increment cntLosses
    cntLosses++;
    console.log("\u001b[1;31m SORRY: The word was " + curWord);
  }
  showPlayData() 
}

function initGame() {
  if (wordArr.length > 0) {
    curPtr = getRandomPtr(wordArr.length);
    curWord = wordArr[curPtr].word;
    curWordLen = curWord.length;
    curWordArr = new Word(curWordArr)
    guessesLeft = 9;
    wasGuessed=[];
    myWord=[];
  // read in a random word
  // initialize display
  // display a dummy array of the same length __ __ __ __ __
  // remove that word from wordArr
  } else {
  //END OF GAME
    console.log("\u001b[1;34m GAME OVER!");
    console.log("\u001b[1;34m WON:  " + cntWins);
    console.log("\u001b[1;34m LOST: " + cntLosses);
    process.exit;
  }
}

function getRandomPtr(max) {
  return Math.floor(Math.random() * Math.floor(max));
  // this will return 0 through max-1
}



var wordArr = [
  {
    word: "unicorn",
    image: "assets/images/unicorn.jpg",
    imgAlt: "Unicorn"
  },
  {
    word: "griffin",
    image: "assets/images/griffin.jpg",
    imgAlt: "Griffin"
  },
  {
    word: "mermaid",
    image: "assets/images/mermaid.jpg",
    imgAlt: "Mermaid"
  },
  {
    word: "centaur",
    image: "assets/images/centaur.jpg",
    imgAlt: "Centaur"
  },
  {
    word: "pegasus",
    image: "assets/images/pegasus.jpg",
    imgAlt: "Pegasus"
  },
  {
    word: "minotaur",
    image: "assets/images/minotaur.jpg",
    imgAlt: "minotaur"
  },
  {
    word: "dragon",
    image: "assets/images/dragon.jpg",
    imgAlt: "Dragon"
  },
  {
    word: "phoenix",
    image: "assets/images/phoenix.jpg",
    imgAlt: "phoenix"
  },
  {
    word: "cerberus",
    image: "assets/images/cerberus.jpg",
    imgAlt: "cerberus"
  },
  {
    word: "hippogryph",
    image: "assets/images/hippogryph.jpg",
    imgAlt: "hippogryph"
  }
];