var userGuess = document.querySelector('.user-input-field');
var guessButton = document.querySelector('.user-input-guess-button');
var clearButton = document.querySelector('.user-input-clear-button');
var numberDisplay = document.querySelector('.last-guess-number-display');
var output = document.querySelector('.last-guess-output');
var resetButton = document.querySelector('.last-guess-reset-button');
var randomNumber = generateRandomNumber();
var parsedNumber = parseNumber();

console.log(resetButton)

userGuess.addEventListener('focus', function() {
  guessButton.removeAttribute('disabled');
  clearButton.removeAttribute('disabled');
})

guessButton.addEventListener('click', function() {
  event.preventDefault();
  appendNumber();
  guessButton.setAttribute('disabled', '');
  enableReset();
  checkGuess();
});

clearButton.addEventListener('click', function() {
  event.preventDefault();
  userGuess.value = "";
  clearButton.setAttribute('disabled', '');
});

resetButton.addEventListener('click', function() {
  location.reload();
  resetButton.setAttribute('disabled', '');
})

function appendNumber() {
  console.log(parsedNumber)
  if (parsedNumber !== NaN) {
    numberDisplay.innerText = userGuess.value;
  } else {
    numberDisplay.innerText = 'N/A';
  }
}

function enableReset() {
  if (numberDisplay.innerText !== 'XX') {
    resetButton.removeAttribute('disabled');
  }
}

function generateRandomNumber() {
  var num = Math.floor(Math.random() * 100);
  return num;
}

function parseNumber() {
  parseInt(userGuess.value);
}

console.log(randomNumber)

function checkGuess() {
  if (parsedNumber > 100 || parsedNumber < 1) {
    output.innerText = "You're outside the range! Try Again!";
  } else if (parsedNumber === randomNumber) {
    output.innerText = "BOOM! You got it!";
  } else if (parsedNumber > randomNumber) {
    output.innerText = "Too High! Try Again!";
  } else if (parsedNumber < randomNumber) {
    output.innerText = "Too Low! Try Again!";
  } else {
    output.innerText = "I don't recognize that!"
  }
}

