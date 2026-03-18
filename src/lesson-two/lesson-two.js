let input = prompt("Please enter a price ($):", "$20.00");
const pattern = /^\$\d+(\.\d{2})?$/;
let result = document.getElementById("result");
let inputPrice = document.getElementById("input");
let discount = document.getElementById("discount");

if (pattern.test(input)) {
  let price = parseFloat(input.slice(1));
  let discountPrice = price / 10;
  let newPrice = price - discountPrice;
  discount.textContent = `$${discountPrice.toFixed(2)}`;
  inputPrice.textContent = input;
  result.textContent = `$${newPrice.toFixed(2)}`;
  console.log(`The price you entered is: $${input}`);
  console.log(`Your new price is: $${newPrice.toFixed(2)}`);
  console.log(`You saved: $${discountPrice.toFixed(2)}`);
} else {
  alert("Invalid format. Please use something like $20.99");
}
