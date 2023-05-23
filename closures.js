function createMultiplier(mainNumber) {
  // This function takes in a parameter "mainNumber" which is used as the base number for the multiplication
  return function(n) {
    // This function returns another function that takes in a variable "n"
    return mainNumber * n;
  }
}

const multiplyByTen = createMultiplier(10);
// This variable is assigned the returned function from createMultiplier with the mainNumber passed in as 10

for (let i = 0; i <= 10; i++) {
  console.log(`10 * ${i} = ${multiplyByTen(i)}`);
  // This loop iterates from 0 to 10 and logs the result of the multiplication of 10 and the current loop variable i to the console.
}
