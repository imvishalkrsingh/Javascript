// JavaScript is a high-level, dynamically typed, interpreted programming language. It is widely used for creating interactive web pages, developing web applications, building server-side applications, and more.

// Outputting a string
console.log('V.k.Singh');

// Declaring and logging a string variable
let fullName = "vishal";
console.log(fullName);

// Declaring and logging a number variable
let age = 24;
console.log(age);

// Declaring and logging a floating-point number variable
let price = 99.90;
console.log(price);

// Declaring and logging a null variable
let x = null;
console.log(x);

// Declaring and logging an undefined variable
let y = undefined;
console.log(y);

// Note - JavaScript is a dynamically typed language

/*
Variable rules:
1. Variable names are case sensitive: "a" & "A" are different.
2. Only letters, digits, underscore(_), and $ are allowed. (Not even space)
3. Only a letter, underscore(_), or $ should be the first character.
4. Reserved Words cannot be variable names.
*/

/*
Let, const, and Var:

Var: Variables can be re-declared & updated. It has a global scope.

let: Variables cannot be re-declared but can be updated. It has a block scope.

const: Variables cannot be re-declared or updated. It has a block scope.
*/

// Logging a string variable
let full_Name = "Tony Stark";
console.log(full_Name);

// Logging a number variable
console.log(age);

// Logging a floating-point number variable
let total_price = 100.99;
console.log(total_price);

// Data types:
/*
Primitive:
1. String
2. Number
3. Boolean
4. Undefined
5. Null

Non-Primitive:
1. Objects
2. Array
3. Symbol
*/

// Logging a string variable
let carName = "Scorpio";
console.log(carName);

// Logging a number variable
let modelYear = 2025;
console.log(modelYear);

// Logging a floating-point number variable
let roadPrice = 1700000.99;
console.log(roadPrice);

// Logging a boolean constant
const isBought = true;
console.log(isBought);

// Logging an object constant
const Student = {
    name: 'vishal kumar singh',
    roll: 11,
    course: 'MCA',
    fees: 200000.00,
    isPass: true,
    cgpa: 8.7,  
};

console.log(Student);
console.log(Student["fees"]);
console.log(Student.course);

// Product description
const product = {
    title: "Ball pen",
    rating: 4,
    offer: 5,
    price: 270,
};

console.log(typeof(product));

// Profile Description
const profile = {
    userName: "imvishalkrsingh",
    isFollow: true,
    followers: 2.3,
    following: 236,
};

console.log(profile);
console.log(typeof(profile));

// Logging the data types of profile object properties
console.log(typeof profile["userName"]);
console.log(typeof profile["isFollow"]);
console.log(typeof profile["followers"]);
console.log(typeof profile["following"]);
