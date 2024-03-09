/*
Functions are fundamental in JavaScript, allowing you to group code into reusable blocks. Here's a basic overview:
*/

// ................Function Declaration:
function myFunction() {
    // code to be executed
}

// .................Function Expression:
const myFunction = function() {
    // code to be executed
};

// ..................Parameters:
function add(a, b) {
    return a + b;
}
// ..................Return Statement:
function multiply(a, b) {
    return a * b;
}

// -----------------------------------------

function hello (){
    console.log("Hello world");
}

hello();


function add(number1, number2){
    add = number1 + number2;
    console.log(add);
    return add;
}
add(1,2);

// const result = add(2,9);
// console.log("Result : " + result);

function login (username){
    return `${username} Just logged In`
}

const user = login("Vishal Singh");
console.log(user);


