// Loops in JavaScript -- Loops are used to execute a piece of code again and again.
// 
// 1. for loop - 
// syntax - 
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// This loop runs for a specified number of times.
// It starts with an initial value of 'i' set to 1, executes the code block as long as 'i' is less than or equal to 5, 
// and increments 'i' by 1 in each iteration.
for (let i = 1; i <= 5; i++) {
    console.log("Vishal Singh");
}

// calculate sum of numbers from 1 to 5
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}
console.log("sum = ", sum);
console.log("Loop has ended");

// Infinite Loop -- A loop that never ends

// While Loop -
// Syntax -
// This loop continues executing as long as the condition inside the parentheses evaluates to true.
let i = 1;
while (i <= 5) {
    console.log("i = ", i, " : Vishal Singh");
    i++;
}

// do while Loop --
// Syntax -
// Similar to the 'while' loop, but the code block is executed at least once before the condition is checked.
let f = 2;
do {
    console.log("f = ", f, " : Vishal Singh");
    f++;
} while (f <= 20);

// for - of Loop -- used for iterating over elements in strings and arrays
// Syntax - 
// This loop iterates over the elements of an iterable object, such as strings and arrays.
let str = "Vishal";
for (let char of str) {
    // do some work
    console.log(char);
}

// for - in Loop --
// Syntax -
// This loop iterates over the enumerable properties of an object.
let Student = {
    name: "Vishal",
    age: 24,
    cgpa: 8.7,
    isPass: true,
}
for (let key in Student) {
    // do some work
    console.log(key);
}
