alert("Hello There")//said Obi-Wan

const guessesResult = document.querySelector('.guessesResult');
const lastResult = document.querySelector('.lastResult');
const guessResult = document.querySelector('.guessResult');
const submitGuess = document.querySelector('.submitGuess');
const guessesField = document.querySelector('.guessField');
let replay;
let numberToGuess = Math.floor(Math.random() * 100) + 1;
let numOfGuesses = 0;
let guesses = [];


function play() {
    const guess = parseFloat(document.getElementById("guessField").value);
    guesses.push(guess);
    numOfGuesses++;
    if (guess === numberToGuess) {
        if (numOfGuesses === 1) {
            guessResult.textContent = 'WOW!!! You Got it on the fisrt try!';
            guessesResult.textContent = "Your guess was " + guesses;
        } else {
            lastResult.textContent = '';
            guessResult.textContent = 'You Got it!';
            guessesResult.textContent = "You got it in " + numOfGuesses + " guesses\nYour guesses were " + guesses;
        }
        starNewGame();
    } else if (guess < 1 || guess > 100) {
        guessResult.textContent = "You guess must be between 1 and 100";
        lastResult.textContent = "Try again!";
    } else if (guess < numberToGuess) {
        guessResult.textContent = "Nope! Too Low!";
        lastResult.textContent = "Try again!";
        guessesResult.textContent = "Guuesses: " + guesses;
    } else if (guess > numberToGuess) {
        guessResult.textContent = "Nope! Too High!";
        lastResult.textContent = "Try again!";
        guessesResult.textContent = "Guesses: " + guesses;
    } else {
        guessResult.textContent = "Invalid!";
        lastResult.textContent = "Try again!";
        guessesResult.textContent = "Guesses: " + guesses;
    }
    
    document.getElementById("guessField").value = '';
    document.getElementById("guessField").focus();
}

guessesField.addEventListener('click', checkGuess);

function starNewGame() {
    guessesField.disabled = true;
    submitGuess.disabled = true;
}

function restartGame() {
    numOfGuesses = 1;
    guesses = [];
    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas) {
        resetPara.textContent = '';
    }

    guessesField.disabled = false;
    submitGuess.disabled = false;
    document.getElementById("guessField").value = '';
    document.getElementById("guessField").focus();
    numberToGuess = Math.floor(Math.random() * 100) + 1;

}
