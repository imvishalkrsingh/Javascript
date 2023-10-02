function calculateCartPrice(...num1){ //rest operator
    return num1
}
console.log(calculateCartPrice(3));

console.log(calculateCartPrice(3, 5, 9));

const user = {
    name : "Vishal",
    age : 24
}

function handleObject(anyObject){
    return `Name is ${anyObject.name} and age is ${anyObject.age}`
}

const print = handleObject(user);
console.log(print);

// creating objects while calling function
const print1 = handleObject({
    name : "vksingh",
    age : 24
})
console.log(print1);

// passing array in function

const array1 = [ 200, 400, 500, 700]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(array1));



