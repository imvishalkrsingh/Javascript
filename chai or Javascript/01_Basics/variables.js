const accountId = 12321

let accountEmail = "vishalkumarsingh162@gmail.com"

var accounPassword = "123456"

accountCity = "jaipur"

// accountId = 43212 // It can not be reinitialized because of const 

// reassigning const variable....

// console.log(accountId)

// reassigning accountEmail 

accountEmail = "vishalsingh162@gmail.com"

console.log(accountEmail)

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/

accounPassword = "abcdabcd"
accountCity = "Bhopal"

// console.table is used to print many variables with a single line of code 
console.table([accountId, accountEmail, accounPassword,accountCity])




