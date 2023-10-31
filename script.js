var numbers = [2,4,6,8,10]; // defined a global variable holding array of numbers

function calculateAverage(numbers) { // defined a function and parameters = array of numbers
  let sum = 0; // first local variable
  for (let i = 0; i <numbers.length; i++) {
  sum += numbers[i] }
    let avg = sum/numbers.length; // second local variable
    return avg; // return average of all numbers in array
}

console.log(calculateAverage(numbers)) // test code using console.log
