/*
In JavaScript, the concepts of local and global scope refer to the visibility and accessibility of variables within different parts of your code.

1. Global Scope
2. Local Scope
*/

/*
Global Scope:
Variables declared outside of any function or block have global scope.
They can be accessed from any part of your code, including inside functions.
*/

const globalVar = "I'm global";

function exampleFunction() {
    console.log(globalVar); // This function Can access globalVar
}

/*
Local Scope:
Variables declared inside a function or block have local scope.
They are only accessible within that function or block.
*/

function exampleFunction() {
    const localVar = "I'm local";
    console.log(localVar); // Can access localVar
}

// ........Trying to access localVar outside the function will result in an error
// console.log(localVar);  

/*
Function Scope:
Variables declared with var keyword (prior to ES6) inside a function have function scope.
They are visible throughout the entire function, regardless of block structure.
*/

function exampleFunction() {
    if (true) {
        var functionScopedVar = "I'm function-scoped";
    }
    console.log(functionScopedVar); // Can access functionScopedVar
}

/*
Block Scope (ES6+):
Variables declared with let and const keywords have block scope.
They are only accessible within the block (enclosed by curly braces) where they are defined.
*/

function exampleFunction() {
    if (true) {
        let blockScopedVar = "I'm block-scoped";
        const anotherBlockScopedVar = "I'm also block-scoped";
    }
    console.log(blockScopedVar); // Error: blockScopedVar is not defined
    console.log(anotherBlockScopedVar); // Error: anotherBlockScopedVar is not defined
}

if(true){
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a);      // print a because var is a global scope
// console.log(b);    // Can not print because of block level scope

// console.log(c);    // Can not print because of block level scope

// ..............Lexical Scope

/*
Lexical Scope:
Refers to the scope resolution based on the physical placement of functions and blocks in the code.
Inner functions have access to variables in their outer (enclosing) scope.
*/

function outerFunction() {
    const outerVar = "I'm outer";

    function innerFunction() {
        console.log(outerVar); // Can access outerVar from the outer scope
    }

    innerFunction();
}

outerFunction()

function one(){
    const username1 = "Vishal"
    console.log(username1);

    function two(){
        const website = 'Youtube'
        console.log(username1);
        console.log(website);
    }

    two();

    // console.log(website);        // cannot be accessed outside the function
}

one();

// +++++++++++++++ interesting ++++++++++++++

console.log(addOne(5));
function addOne(value){
    return value + 1
}

// console.log(addTwo(5));   // this can not be accessed here because of hoisting
const addTwo = function(num){
    return num + 2;
}

console.log(addTwo(5));   // here it can be accessed

