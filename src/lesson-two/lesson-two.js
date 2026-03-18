let input = prompt("Please enter a price ($):", "$20.00");
const pattern = /^\$\d+(\.\d{2})?$/;
let result = document.getElementById("result");
let inputPrice = document.getElementById("input");

if (pattern.test(input)) {
  let price = Number(input.replace("$", ""));
  let discountedPrice = price - price / 10;
  let roundedPrice = discountedPrice.toFixed(2);
  console.log(discountedPrice);
  console.log(roundedPrice);
  inputPrice.textContent = input;
  result.textContent = `$${roundedPrice}`;
} else {
  alert("Invalid format. Please use something like $20.99");
}
