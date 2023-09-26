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
