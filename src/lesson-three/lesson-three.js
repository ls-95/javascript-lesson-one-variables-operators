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
