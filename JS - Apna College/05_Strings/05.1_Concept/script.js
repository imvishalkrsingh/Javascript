// Strings -- String is a sequence of characters used to represent text.

// Create String
let str = "Vishal Singh "; // Define a string variable
console.log("str = ",str); // Log the string to the console

// String Length
let len = str.length; // Get the length of the string
console.log("str Length : ", len); // Log the length of the string

// String indices
// Access individual characters in the string using index notation
str[0], str[1], str[2]

// To print characters at each index
for (let i = 0; i < str.length; i++) {
    const element = str[i]; // Access each character at index 'i'
    console.log(element); // Log each character to the console
}

// Template Literals in JS -- A way to have embedded expressions in Strings
// Enclose strings in backticks (`) to create template literals

`this is a template literal`

// String interpolation -- To create strings by doing substitution of placeholders
// Syntax: `string text ${expression} string text`
let object = {
    item : "Pen",
    price : 10,
}

console.log("The cost of ", object.item, "is ", object.price, "Rupees."); // Using concatenation
let output = `The cost of ${object.item} is ${object.price} Rupees.`; // Using template literals
console.log(output);

// Escape Character - \n (Next line), \t (next tab)
console.log("Vishal \n Kumar \nSingh"); // Using \n for new lines

// String methods - These are built-in functions to manipulate a string.

let phone = "samsung Galaxy F14";

console.log(phone.toUpperCase()); // Transform to uppercase
console.log(phone.toLowerCase()); // Transform to lowercase
console.log(phone.trim()); // Removes whitespace from both ends of the string

// Note - Strings are immutable in JavaScript

console.log("Slice Method"); // .slice(start, end)
console.log(phone.slice(1,4)); // Extracts a section of the string and returns it as a new string

console.log("Concat Method"); // variable1.concat(variable 2)
console.log(str.concat(phone)); // Concatenates two or more strings

console.log("Replace Method");
console.log(phone.replace("Galaxy", "smart")); // Replaces a specified value with another value in a string

console.log("charAt Method"); // Returns the character at a specified index (position) in a string
console.log(phone.charAt(4)); // Returns 's', the character at index 4 in the string 'samsung Galaxy F14'
