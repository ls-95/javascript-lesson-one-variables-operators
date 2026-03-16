function handleConversion() {
  let input = document.getElementById("temperature").value;
  let number = Number(input);
  let result = document.getElementById("result");

  if (isNaN(number) || input === "") {
    alert("Please enter a valid number");
    return;
  }
  let fahrenheit = Math.floor(number * 1.8 + 32);
  console.log(fahrenheit);
  result.textContent = `${fahrenheit}°F`;
}

//Exercise 1:
console.log("Hello, World!");

//Exercise 2:
let firstName = "Polly";
let age = 57;
let favouriteColor = "lavender";
console.log(
  `Hi! My name is ${firstName} and I am ${age} years old. My favourite colour is ${favouriteColor}.`,
);

//Exercise 3
let cats = 25;
let dogs = 30;

cats += 1;
console.log(cats);
dogs -= 5;
console.log(dogs);

let horse = 5;
let rabbit = 10;

let x;
let y;
x = horse * rabbit;
console.log(x);
y = horse / rabbit;
console.log(y);

x++;
y++;
console.log(x, y);

x--;
y--;
console.log(x, y);
console.log(typeof x);
console.log(typeof y);

cats -= 1;
cats %= 2;
console.log(cats % 2);

let hasAccount = true;
console.log(hasAccount);

hasAccount = false;
console.log(hasAccount);
console.log(typeof hasAccount);

hasAccount = null;
console.log(typeof hasAccount);

console.log(typeof (0 / 0));
console.log(typeof NaN === "number");
console.log(isNaN(0 / 0));
console.log(NaN === NaN);
