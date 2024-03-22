/*
Question 1:
Explain the purpose of parameters in JavaScript functions. Provide an example demonstrating how parameters are used in a function, and explain how arguments are passed to these parameters during a function call.
*/

// Example function with parameters
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Function call with argument passed to the parameter
greet("Alice");
// Output: Hello, Alice!


/*
Question 2:
Describe the significance of comments in JavaScript functions. How do comments enhance the readability and maintainability of code? Provide an example of a function with appropriate comments explaining its functionality and parameters.
*/

// Function to calculate the area of a rectangle
function calculateArea(length, width) {
    // Calculate area by multiplying length and width
    var area = length * width;
    return area;
}

// Explanation of function parameters and purpose
// Parameters: length - the length of the rectangle, width - the width of the rectangle
// Returns: The calculated area of the rectangle

/*
Question 3:
Discuss the concept of return values in JavaScript functions. Explain with an example how return values allow functions to produce results for further computation. Also, illustrate how to capture and utilize the return value of a function in a practical scenario.
*/

// Function to calculate the square of a number and return the result
function square(number) {
    return number * number;
}

// Capturing the return value and utilizing it in a practical scenario
var result = square(5); // Calling the function and storing the result
console.log("The square of 5 is: " + result);
// Output: The square of 5 is: 25

/*
Question 4:
Explore the versatility of JavaScript functions beyond basic usage. Discuss at least two advanced concepts related to functions, such as assigning functions to variables, passing functions as arguments, or returning functions from other functions. Provide examples to demonstrate each concept's implementation and its significance in JavaScript programming.
*/

// Example 1: Assigning a function to a variable
var multiply = function(a, b) {
    return a * b;
};
var result = multiply(3, 4); // Calling the function via the variable
console.log("Result of multiplication:", result);
// Output: Result of multiplication: 12

// Example 2: Passing a function as an argument to another function
function operate(func, x, y) {
    return func(x, y);
}
var addition = function(a, b) {
    return a + b;
};
var result = operate(addition, 5, 3); // Passing 'addition' function as an argument
console.log("Result of addition:", result);
// Output: Result of addition: 8


/*
Question 5:
Discuss the concept of scope in JavaScript functions. Explain the difference between global scope and local scope, and how variables declared inside functions are scoped. Provide an example illustrating variable scope within a function and outside it.
*/

// Global variable
let globalVar = "I'm global";

function testScope() {
    // Local variable
    let localVar = "I'm local";

    console.log(localVar); // Output: I'm local
    console.log(globalVar); // Output: I'm global
}

testScope();
console.log(globalVar); // Output: I'm global
// console.log(localVar); // Uncommenting this line will result in an error because localVar is not defined outside the function

/*
Question 7:
Explain the concept of higher-order functions in JavaScript. Define what higher-order functions are and provide an example of their usage, including scenarios where they are beneficial. Additionally, discuss the advantages of using higher-order functions in JavaScript programming.
*/

// Higher-order function example
function operate(operation, a, b) {
    return operation(a, b);
}

// Function to perform addition
function addition(x, y) {
    return x + y;
}

// Function to perform subtraction
function subtraction(x, y) {
    return x - y;
}

// Using operate function with different operations
console.log("Addition result:", operate(addition, 5, 3)); // Output: Addition result: 8
console.log("Subtraction result:", operate(subtraction, 7, 2)); // Output: Subtraction result: 5

