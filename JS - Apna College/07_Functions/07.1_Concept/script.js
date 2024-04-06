// JavaScript functions are essential blocks of code designed to perform specific tasks, promoting code reusability and organization.

// Function definition syntax:
// function functionName(parameter1, parameter2, ...) {
//     // code block to execute
// }

// Function call syntax:
// functionName(argument1, argument2, ...);

// Example of a simple function:
function myFunction() {
    console.log("Welcome to Apna College");
    console.log("We are learning JavaScript");
}

// Calling the function:
myFunction();

// Function with parameters:
function welcome(name) {  // 'name' is a parameter
    console.log("Hello", name);
}

// Calling the function with an argument:
welcome("Vishal Singh"); // Output: Hello Vishal Singh

// Creating a function to calculate the sum of two numbers:
function sum(a, b) {
    console.log("The sum of", a, "and", b, "is:", a + b);
}

// Calling the sum function:
sum(4, 2); // Output: The sum of 4 and 2 is: 6

// Functions can have comments to explain their purpose, parameters, and return values.
// Comments provide clarity and make the code more understandable to others.

// JavaScript functions can return values using the 'return' keyword. This allows functions to produce results for further computation.

// Functions can also be assigned to variables, passed as arguments to other functions, or even returned from other functions, enabling powerful functional programming paradigms.

// Arrow functions -- Compact way of writing a function

//  -------------------------------------------------------------------------------------------------
// Arrow function
let add = (a, b) => a + b;

console.log(add(3, 5)); // Output: 8

let multi = (a, b) => a * b;

console.log(multi(5,4));

// Count vowels

function countVowels(str) {
    // "apnaCollege" count = 4
    let count = 0; // Initialize count variable outside the loop

    for (const char of str) {
        console.log(char);
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
            count++; // Increment count if the character is a vowel
        }
    }

    return count; // Return the count of vowels
}
console.log(countVowels("vishal")); // Output: 2


// Write the same functions with the help of Arrow functions .....

const countVow = (str) => {
    // "apnaCollege" count = 4
    let count = 0; // Initialize count variable outside the loop

    for (const char of str) {
        console.log(char);
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
            count++; // Increment count if the character is a vowel
        }
    }

    return count; // Return the count of vowels
};
console.log(countVow("vishal")); // Output: 2

// -------------------------------------------------------------------------------------------------
// forEach loops in Arrays -- arr.forEach(callBack function)

// callback Function : Here, it is a function to execute for each element in the array
// A callback is a function passed as an argument to another function.

// arr.forEach((val) => {
    // console.log(val);
// })


// --------------------------------------------------------------------------------------------------
// Higher-order functions in JavaScript are functions that can take other functions as arguments or return functions as their results.

// Higher-order function: forEach
function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

// Callback function to be passed to myForEach
function printElement(element) {
    console.log(element);
}

// Array of numbers
let numbers = [1, 2, 3, 4, 5];

// Using myForEach to print each element of the array
myForEach(numbers, printElement);

// Questions : For a given array of numbers, print the square of each value using the forEach loop.

let nums = [2,4,6,8,10];

nums.forEach((nums) =>{
    console.log(nums * nums);
});

// Some more Array Methods -- 
// 1. Map : Creates a new array with the results of some operations. The value its callback returns are used to form new array.

// arr.map(callBackFnx(value, index, array))

// let newArr = arr.map((val) => {
    // return val * 2;
// })

// 2. Filter : Creates a new array of elements that give true for a condition/ filter.
// eg: All even elements.

// let newArr = arr.filter( (val) => {
//  return val % 2 === 0;
// })

// 3. Reduce : Performs some operations & reduces the array to a single value. It returns that single value.

/*
const array1 = [1,2,3,4];
// 0+1+2+3+4

const initalValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue,
);

console.log(sumWithInitial);  // Expected output: 10
*/

