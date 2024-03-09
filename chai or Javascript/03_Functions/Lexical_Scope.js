// Define a variable in the global scope:
const fullName = "Vishal kumar singh";

// Define nested functions:
function profile() {
  function sayName() {
    function writeName() {
      return fullName;
    }
    return writeName();
  }
  return sayName();
}

console.log(profile());



// ++++++++++++++++++++++++++++++++++++++++++++++++++

// Working of lexical scope

/*
JavaScript uses lexical scoping to resolve the variable names when a function is created inside another function. It determines the function's parent scope by looking at where the function was created instead of where it was invoked.
*/


// Define a function:
function showLastName() {
    const lastName = "Dwayne Jhonshon";
    return lastName;
  }
  
  // Define another function:
  function displayFullName() {
    const fullName = "The Rock : " + showLastName();
    return fullName;
  }
  
  // Invoke displayFullName():
  console.log(displayFullName());
  
  // The invocation above will return:
//   Uncaught ReferenceError: lastName is not defined


// Another example of Lexical scope

let friend = "Jennifer";

function getFriend() {
  console.log(friend);
  
  let enemy = "Peter";
  return function getEnemy() {
    console.log(enemy);
  };
}

getFriend();