//Variables
	var wins = 0;
	var placeholderArray = []
	var prevPlaceholderArray = [];
	var wordPlaceholder = [];
	var lettersGuessed =[];
	var word = [];
	var wordPlaceholderString = "";
	var userInput= "";
	var correctGuessCount = 0;
	var guessesLeft = 15;

	// Object of 90's Groups Hangman Words. 
	var ninetysGroupsWords = {
		word1: ["T", "U","P","A","C"],
		word2: ["S","N","O","O","P","D","O","G","G"],
		word3: ["C","O","M","M","O","N"], 
		word4: ["A","A","L","I","Y","A","H"],
		word5: ["B","A","C","K","S","T","R","E","E","T","B","O","Y","S"],
		word6: ["N","O","D","O","U","B","T"],
		word7: ["B","I","G","G","I","E"],
	};

//Array of 90s Hangman words created from object.

var wordArray = [ninetysGroupsWords.word1, ninetysGroupsWords.word2, ninetysGroupsWords.word3, ninetysGroupsWords.word4, ninetysGroupsWords.word5, ninetysGroupsWords.word6, ninetysGroupsWords.word7];
function createWord(wordArray){

//Create array from randomly selected word Array
word = wordArray[Math.floor(Math.random()*wordArray.length)];
	console.log(word);

//Create placeholder for word
createWordPlaceholder(word);
return word;
};

//Create placeholder for word
function createWordPlaceholder (word) {
	var wordPlaceholder = [];

//Fill array with underscores. 
for (var i = 0; i < word.length; i++){
	wordPlaceholder.push("_"); 
}

//Convert word placeholder array to string for displaying
wordPlaceholderString = wordPlaceholder.join (" ");

//Display word placeholder
document.getElementById ('word-placeholder').textContent = wordPlaceholderString;
return wordPlaceholder;

};

function trackLetterGuesses(userInput) {

	/*
	*Check if letter already guessed. 
	*Don't track letters more than once. 
	*/
	for (var i=0; i < lettersGuessed.length; i++){
		if(userInput == lettersGuessed[i]){
			return;
		}
	}

//Push letter guessed. 
lettersGuessed.push(userInput);
console.log("lettersGuessed array item:" + lettersGuessed);

//Convert letters guessed array to string for displaying
var lettersGuessedString = lettersGuessed.join (", ");
document.getElementById('letters-guessed').innerHTML = lettersGuessedString;

//Each guess reduces number of guesses left.  
guessesLeft--;

//Display guesses left. 
document.getElementById('guess-count').innerHTML = guessesLeft;
console.log ('Guesses left' + guessesLeft);

//Game restarts when no mre guesses left. 
if(guessesLeft == 0) {
	restartGame();
}
return lettersGuessedString;

};


createWord(wordArray);
//Initialize game on window load.

//Main Process
document.onkeyup = function(event){
	console.log ('This is the Key entered', event.key);
	var keyPress;

if (typeof event != 'undefined') {
	keyPress = event.keyCode;

//Convert user input key to upper case string.
//userInput =String.fromCharCode(keyPress).toUpperCase();
//console.log(userInput + " should match the key entered");

//Track user guesses over time.
trackLetterGuesses(userInput);

//Build hangman word based on new user input.
// buildWord(userInput);
};





//FUNCTIONS
//=============================


//Array created from randomly selected 90s word Array.


//Create placeholder for word 


//Keep track of user guesses. 

};


//Builds hangman word as user guesses letters.
