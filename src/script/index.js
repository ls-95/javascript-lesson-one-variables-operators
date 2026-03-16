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
