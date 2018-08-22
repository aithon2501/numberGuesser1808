var userGuess = document.querySelector('.user-input-field')
var guessButton = document.querySelector('.user-input-guess-button');
var clearButton = document.querySelector('.user-input-clear-button');
var numberDisplay = document.querySelector('.last-guess-number-display');
var output = document.querySelector('.last-guess-output');
var resetButton = document.querySelector('.last-guess-reset-button');
var randomNumber = generateRandomNumber();

console.log(randomNumber);

userGuess.addEventListener('keydown', function() {
  guessButton.removeAttribute('disabled');
  clearButton.removeAttribute('disabled');
})

userGuess.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    guessButton.click()
  }
})

guessButton.addEventListener('click', function() {
  event.preventDefault();
  numberDisplay.innerText = userGuess.value;
  enableReset();
  checkGuess();
  guessButton.setAttribute('disabled', '');
});

clearButton.addEventListener('click', function() {
  event.preventDefault();
  userGuess.value = "";
  userGuess.focus();
  clearButton.setAttribute('disabled', '');
});

resetButton.addEventListener('click', function() {
  userGuess.value = '';
  numberDisplay.innerText = 'XX';
  output.innerText = "Enter a number between 1 and 100"
  guessButton.setAttribute('disabled', '');
  clearButton.setAttribute('disabled', '');
  resetButton.setAttribute('disabled', '');
  randomNumber = generateRandomNumber();
  console.log(randomNumber);
})

function enableReset() {
  if (numberDisplay.innerText !== 'XX') {
    resetButton.removeAttribute('disabled');
  }
}

function generateRandomNumber() {
  var num = Math.floor(Math.random() * 100 + 1);
  return num;
}

function checkGuess() {
  var userGuessNumber = parseInt(userGuess.value, 10);
  if (userGuessNumber > 100 || userGuessNumber < 1) {
    output.innerText = "You're outside the range! Try Again!";
  } else if (userGuessNumber === randomNumber) {
    output.innerText = "BOOM! You got it!";
  } else if (userGuessNumber > randomNumber) {
    output.innerText = "Too High! Try Again!";
  } else if (userGuessNumber < randomNumber) {
    output.innerText = "Too Low! Try Again!";
  } else {
    numberDisplay.innerText = 'N/A';
    output.innerText = "I don't recognize that!";
  }
}

