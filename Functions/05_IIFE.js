// IIFE -> immediately invoked function expressions (IIFE)

/*
An Immediately Invoked Function Expression (IIFE) is a JavaScript function that is executed immediately after it is defined. It is a way to create a private scope for variables and functions to avoid polluting the global scope. Here's the basic structure of an IIFE:
*/

(function printName(){
    let name = "Vishal"
    console.log(`My name is ${name}`);
})();

// Immediately invoked function expressions in Arrow function

((phone) => {
    // let phone = 'Realme'
    console.log(`My phone is ${phone}`);
})('Apple');


// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. 

(function () {
    // …
  })();
  
  (() => {
    // …
  })();
  
  (async () => {
    // …
  })();
  
