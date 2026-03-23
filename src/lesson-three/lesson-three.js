let counterNumber = document.getElementById("counter-number");

let number = 0;

function handleCounter(operation) {
  switch (operation) {
    case "add":
      number++;
      break;
    case "subtract":
      number--;
      break;
    case "reset":
      number = 0;
      break;
    default:
      console.log("something unexpected happened!");
  }
  counterNumber.textContent = number;
}

console.log(
  "The password must be at least 8 characters, not contain the username or spaces",
);

function isValidPassword(password, username) {
  return password.length >= 8 &&
    password.toLowerCase() !== username.toLowerCase() &&
    !password.includes(" ")
    ? true
    : false;
}
console.log(isValidPassword("cryingmonkey", "cryingmonkey"));
console.log(isValidPassword("bunny", "cryingmonkey"));
console.log(isValidPassword("happy bunny", "cryingmonkey"));
console.log(isValidPassword("everythingisawesome", "cryingmonkey"));
console.log(isValidPassword("CryinGMonKey", "cryingmonkey"));
console.log(isValidPassword("HelloWorld", "cryingmonkey"));
