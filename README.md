# cli_WordGuess
Well, what can I say:  
Inquirer is an Async program, which means it doesn't wait around 
for an answer if there are other functions waiting to be run.
In this case, it took me 7 or more hours to write and debug the process
without having access to the prompt, because every time I called it, the screen
filled with 'Type a letter: ' until my buffer overflowed.
I even tried 'readline' as a prompt utility, but had the same runaway process.
Even after I knew that the whole program was working correctly, 
I still spent another hour looking at documentation and at other GitHub cli Word Guess repositories, trying to find out how to call Inquirer "as needed".
Turned out I was calling playGame() just outside the '.then(function (data) closing bracket, so it was calling playGame() over and over.
Still learning....
But this is one I now understand pretty well.

Anyway: 
1. This has an array of 10 words from a previous HTML version - minus some pretty nice images.
2. User gets 9 guesses.
3. I lowercase and take only the first character of whatever the user types.
4. User is shown the letters they have typed, either as part of the word or as a "badGuess" string.
5. User is shown when they have already a letter (this does not count as a guess)
6. User is shown the remaining guesses,
7. User is shown "CORRECT" or "SORRY" when they have guessed all the letters or used all their guesses and the score is shown.
8. The array of words is spliced as each is selected randomly, so when the array is empty, the User is shown "GAME OVER"
9. Colors are provided by ANSI escape codes: red for failure, green for success,
blue for game info, orange for repeated letters.