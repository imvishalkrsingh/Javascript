const score = 400;

const balance = new Number(1000)

console.log(balance);

console.log(balance.toString());

console.log(typeof balance);

console.log(balance.toFixed(2));

const otherNumber = 123.8966;

console.log(otherNumber.toPrecision(4));

const hundreds =  10000000

console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);

// Absolute Value in Math function
console.log('Absolute Value in Math function');
console.log(Math.abs(-54));

// Round value in Math function
console.log('Round value in Math function : ');
console.log(Math.round(otherNumber));

// Ceil and floor value
console.log('Ceil value of a Number');
console.log(Math.ceil(otherNumber));

console.log('floor value of a Number');
console.log(Math.floor(otherNumber));

// square root of a number :
console.log('Square Root of a Number : ');
console.log(Math.sqrt(144));

// Min and Max
console.log('Min and Max');
console.log(Math.min(1,2,5,7,8,9));

console.log(Math.max(1,2,5,7,8,9));

// Random
console.log('Random Number : ');
console.log(Math.random()*10 + 1);

const min = 10;
const max = 20
console.log('Getting Random Number between 10 & 20');

console.log(Math.floor(Math.random() * (max - min + 1))) + min;



