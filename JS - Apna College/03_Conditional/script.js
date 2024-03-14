// Conditional Statements -- To implement conditions in the code

// if-else Statement

let age = 16;

// Check if age is greater than or equal to 18
if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}

let mode = "light";
let color;

// Check the mode and assign color accordingly
if (mode === "light") {
    color = "white"; // If mode is light, set color to white
} else {
    color = "black"; // Default to black if mode is not light (assumed to be dark)
}

console.log(color); // Output the selected color


// find even or odd
let number = 9;

if(number % 2 == 0){
    console.log("number is even");
} 
else{
    console.log("number is odd");
}

// else-if Statements -- The "else if" statement is used in JavaScript to execute a block of code if a specified condition is true. 

let marks = 95;

// Ternary Operators -- condition ? true output : false output
let result = marks > 30 ? "pass" : "Fail";
console.log(result);

if(marks >= 60){
    console.log("First Division");
} else if (marks < 60 && marks > 45) {
    console.log("Second Division");
} else if(marks < 45 && marks > 30){
    console.log("Third Division");
} else{
    console.log("Fail");
}

// Q2. Write a code which can give grades to students according to their scores ?
let mark = prompt("Enter your marks : ");

if (mark >= 80 && mark <= 100) {
    console.log("Grade A");
} else if (mark >= 70 && mark < 80) {
    console.log("Grade B");
} else if (mark >= 60 && mark < 70) {
    console.log("Grade C");
} else if (mark >= 50 && mark < 60) {
    console.log("Grade D");
} else {
    console.log("Fail");
}

