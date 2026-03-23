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
  // return password.length >= 8 &&
  //   password.toLowerCase() !== username.toLowerCase() &&
  //   !password.includes(" ")
  //   ? true
  //   : false;
  return (
    password.length >= 8 &&
    password.toLowerCase() !== username.toLowerCase() &&
    !password.includes(" ")
  );
}
console.log(isValidPassword("jumpingmonkey", "jumpingmonkey"));
console.log(isValidPassword("bunny", "jumpingmonkey"));
console.log(isValidPassword("happy bunny", "jumpingmonkey"));
console.log(isValidPassword("everythingisawesome", "jumpingmonkey"));
console.log(isValidPassword("JumpinGmonkey", "jumpingmonkey"));
console.log(isValidPassword("HelloWorld", "jumpingmonkey"));
