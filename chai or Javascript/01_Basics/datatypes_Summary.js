// datatypes : 1- Primitive Datatypes, 2- Non-Primitive Datatypes / Referenced Datatypes


/* 
Primitive Datatypes : String, number, boolean, null, undefined, bigInt

Non-Primitive Datatypes : Array, object and function

*/

console.log("Primitive Datatypes : ");

//  String datatypes
let name = " Vishal Kumar Singh"
console.log("String Value : " + name);

// number
let score = 495
console.log("Number value : " + score);

// boolean
const isAdult = true
console.log("Boolean Value : " + isAdult);

// null
let space = null
console.log("Null value : " + space);

// undefined
let marks = undefined
console.log("Undefined Value : " + marks);

// bigInt
let phnNumber = 98564558362953n
console.log("BigInt Value : " + phnNumber);

// Non-Primitive Datatypes / Referenced Datatypes

console.log();
console.log("Non-Primitive Datatypes :");

// Array 

let price = [100,200,300,400];
console.log("Array value : " + price);


// Object
let data = {
    StudentName : "vishal",
    id : "22MCA5CCM1001",
    email : "vishalkumarsingh162@gmail.com",
    phn : 9988776655,
}
console.log("Object Value : ");

console.log(data);

// function

const print = function print(){
    console.log("Hello World");
}

print();


// Stack and Heap Concept 

/*

Handling Memory Management in JavaScript
JavaScript engines store their data in two places; the Stack Memory and the Heap Memory

1. Stack : It is used to store Primitive data types, (String, boolean, number, null, undefined, bigInt)
 It created copy of datatypes

2. Heap : It is used to store Non-Predefined data types objects and functions in JavaScript.
  It refers original value

*/

// Stack : 
console.log("Stack Memory ");

let devName = "Vishal singh"
console.log(devName);

let originalName = devName
console.log(originalName);

originalName = "Aman"
console.log(originalName);

// Heap :

console.log("Heap Memory : ");

let userOne = {
    name : "vishal",
    id : 123,
    college : "Sage University",
}

console.log(userOne);

console.log("After reinitializing userOne name : ");

userOne.name = "Aman"

console.log(userOne.name);
