//Exercise one

function guessNumberGame() {
  const target = Math.floor(Math.random() * 10) + 1;
  let guess = null;

  while (guess !== target) {
    guess = parseFloat(prompt("Enter a number"));

    console.log(`The target is: ${target}. Your guess is: ${guess}`);

    if (guess < target) {
      console.log("You guess was too low");
    } else if (guess > target) {
      console.log("You guess was too high");
    } else {
      console.log(`Congratualtions, you guessed the correct number: ${guess}`);
    }
  }
}
guessNumberGame();

//Exercise 2

function generateRandomArray(length) {
  let randomArray = [];
  for (let i = 0; i <= length - 1; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    randomArray.push(randomNumber);
  }
  console.log(randomArray);
}

generateRandomArray(5);
generateRandomArray(10);
generateRandomArray(2);
generateRandomArray(7);
