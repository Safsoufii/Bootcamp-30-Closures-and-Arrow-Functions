// Define a function to add two numbers
const add = (x, y) => x + y;

// Define a function to subtract two numbers
const subtract = (x, y) => x - y;

// Define a function to multiply two numbers
const multiply = (x, y) => x * y;

// Define a function to divide two numbers
const divide = (x, y) => x / y;

// Get the first number from the user
const x = parseInt(prompt("Please enter the first number:"));

// Get the second number from the user
const y = parseInt(prompt("Please enter the second number:"));

// Get the operation from the user
const operation = prompt(
  "Please enter the operation you would like to perform (+, -, *, /):"
);

// Perform the calculation and log the result to the console
let result;
switch (operation) {
  case "+":
    result = add(x, y);
    break;
  case "-":
    result = subtract(x, y);
    break;
  case "*":
    result = multiply(x, y);
    break;
  case "/":
    result = divide(x, y);
    break;
  default:
    console.log("Invalid operation");
}

console.log(`${x} ${operation} ${y} = ${result}`);
