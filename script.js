const inputNumber = document.querySelector("#number");
const resultData = document.querySelector(".result-data");
const guessNumber = document.querySelector(".guess-number ");
const startGame = document.querySelector(".start-game");
//inputNumber.value
const submitBtn = document.querySelector(".plus-btn");
const randomNumber = Math.floor(Math.random() * 101);

// console.log(randomNumber);
let guessNumberArray = [];

submitBtn.addEventListener("click", () => {
  guessNumberArray.push(parseInt(inputNumber.value));
  guessNumber.innerText = `Your guesses: ${guessNumberArray}`;
  startGame.disabled = false;
  if (randomNumber === parseInt(inputNumber.value)) {
    resultData.innerText = "You got it! Congrats";
    submitBtn.disabled = true;
  } else if (randomNumber > parseInt(inputNumber.value)) {
    resultData.innerText = "Plz Enter high number";
  } else if (randomNumber < parseInt(inputNumber.value)) {
    resultData.innerText = "Plz Enter low number";
  }
});

startGame.addEventListener("click", () => {
  resultData.innerText = "";
  guessNumberArray = [];
  guessNumber.innerText = ``;
  submitBtn.disabled = false;
  inputNumber.value = "";
});
