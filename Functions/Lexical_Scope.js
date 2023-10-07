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