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

//Exercise 3

function sumEvenNumbers(array) {
  let evenSum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenSum += array[i];
    }
  }
  return evenSum;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(sumEvenNumbers([1, 2, 4, 25, 26, 84]));
console.log(sumEvenNumbers([31, 8, 7, 16, 95]));
