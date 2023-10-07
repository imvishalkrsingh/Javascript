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
    const lastName = "Sofela";
    return lastName;
  }
  
  // Define another function:
  function displayFullName() {
    const fullName = "Oluwatobi " + lastName;
    return fullName;
  }
  
  // Invoke displayFullName():
  console.log(displayFullName());
  
  // The invocation above will return:
//   Uncaught ReferenceError: lastName is not defined