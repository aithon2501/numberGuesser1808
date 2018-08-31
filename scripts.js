var userGuess = document.querySelector('.user-input-field');
var guessButton = document.querySelector('.user-input-guess-button');
var clearButton = document.querySelector('.user-input-clear-button');
var numberDisplay = document.querySelector('.last-guess-number-display');
var output = document.querySelector('.last-guess-output');
var resetButton = document.querySelector('.last-guess-reset-button');
var rangeButton = document.querySelector('.range-button');
var minimumRange = document.querySelector('.minimum');
var maximumRange = document.querySelector('.maximum');
var winMessage = document.querySelector('.game-win-message');
var randomNumber;

minimumRange.addEventListener('keydown', function() {
  rangeButton.removeAttribute('disabled');
});

maximumRange.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    rangeButton.click();
  }
});

rangeButton.addEventListener('click', function() {
  randomNumber = generateRandomNumber(minimumRange, maximumRange);
  rangeButton.setAttribute('disabled', '');
});

userGuess.addEventListener('keydown', function() {
  guessButton.removeAttribute('disabled');
  clearButton.removeAttribute('disabled');
  if (event.keyCode === 13) {
    guessButton.click();
  };
});

guessButton.addEventListener('click', function() {
  event.preventDefault();
  numberDisplay.innerText = userGuess.value;
  enableReset();
  checkGuess();
  userGuess.focus();
  userGuess.value = '';
  guessButton.setAttribute('disabled', '');
});

clearButton.addEventListener('click', function() {
  event.preventDefault();
  userGuess.value = '';
  userGuess.focus();
  clearButton.setAttribute('disabled', '');
});

resetButton.addEventListener('click', function() {
  event.preventDefault();
  userGuess.value = '';
  minimumRange.value = '';
  maximumRange.value = '';
  winMessage.innerText = '';
  numberDisplay.innerText = 'XX';
  output.innerText = "Guess A Number!";
  userGuess.focus();
  guessButton.setAttribute('disabled', '');
  clearButton.setAttribute('disabled', '');
  resetButton.setAttribute('disabled', '');
});

function enableReset() {
  if (numberDisplay.innerText !== 'XX') {
    resetButton.removeAttribute('disabled');
  }
};

function generateRandomNumber(min, max) {
  var minNum = parseInt(min.value, 10);
  var maxNum = parseInt(max.value, 10);
  var num = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  console.log(num);
  return num;
};

function checkGuess() {
  var min = parseInt(minimumRange.value, 10);
  var max = parseInt(maximumRange.value, 10);
  var userGuessNumber = parseInt(userGuess.value, 10);
  if (userGuessNumber > max || userGuessNumber < min) {
    output.innerText = "You're outside the range! Try Again!";
  } else if (userGuessNumber === randomNumber) {
    output.innerText = "BOOM! You got it!";
    wonGame();
  } else if (userGuessNumber > randomNumber) {
    output.innerText = "Too High! Try Again!";
  } else if (userGuessNumber < randomNumber) {
    output.innerText = "Too Low! Try Again!";
  } else {
    numberDisplay.innerText = 'N/A';
    output.innerText = "I don't recognize that!";
  }
};

function wonGame() {
  var min = parseInt(minimumRange.value, 10);
  var max = parseInt(maximumRange.value, 10);
  minimumRange.value = min -= 10;
  maximumRange.value = max += 10;
  winMessage.innerText = 'Play Again! The Range Has Changed!';
  randomNumber = generateRandomNumber(minimumRange, maximumRange);
};

// adding to test github settings