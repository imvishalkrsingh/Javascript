let score = 33

console.log(typeof score) // check typeof variable

console.log(typeof (score)) // check typeof variable as a method

let scores = "33"  // Scores is a string type variable 

console.log(typeof scores)

// convert the scores(string) variables in number

console.log(typeof Number(scores))


// if number and english character combined as a string and we convert the mix number in Number then we get NaN

const word = "123abc"

console.log(typeof Number(word))   // here we get the Number as output

let valueInNumber = Number(word)   // here 

console.log(typeof valueInNumber) // here we get number 

console.log(valueInNumber)  // but here we get the NaN as output because number is not a pure integer value


let check1 = null;

console.log(typeof(check1))

console.log(Number(check1)) // convert null to Number

let check2 = undefined

console.log(typeof(check2)) // checking undefined data type

console.log(Number(check2)) // converting undefined to Number


let check3 = true;

console.log("checking 'true' data type : " + typeof(check3))  // checking 'true' data type

console.log("converting boolean to number : " + Number(check3))  // converting boolean to number

