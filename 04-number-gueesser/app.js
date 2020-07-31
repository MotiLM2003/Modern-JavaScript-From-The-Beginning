let min = 1,
  max = 10,
  winningNum = 2,
  guessLeft = 3;

// UI ELEMENTS
const game = document.getElementById("game");

const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");
const guessBtn = document.getElementById("guess-btn");
const guessInput = document.getElementById("guess-number");
const message = document.querySelector(".message");

// assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// LISTEN FOR GUESS
guessBtn.addEventListener("click", function () {
  const value = parseInt(guessInput.value);
  if (isNaN(value) || value < min || value > max) {
    setMesage(`Please enter a number between ${min} and ${max}`, "red");
  } else if (value !== winningNum) {
    setMesage(`wrong number!`, "red");
    guessLeft -= 1;
    if (guessLeft === 0) {
      lostGame();
    }
  } else {
    setMesage(`Correct`, "green");
    guessInput.disabled = true;
    guessInput.style.borderColor = "green";
  }
});

function setMesage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
  guessInput.style.borderColor = color;
}

function lostGame() {
  message.style.color = "red";
  message.textContent = "you lost";
  guessInput.style.borderColor = "red";
  guessInput.disabled = true;
}
