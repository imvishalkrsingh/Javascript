// JavaScript Operators
// The Addition Operator + adds numbers:
// The Assignment Operator = assigns a value to a variable.

// JavaScript Assignment -- The Assignment Operator (=) assigns a value to a variable:
// Assign the value 5 to x
let x = 5;
// Assign the value 2 to y
let y = 2;
// Assign the value x + y to z:
let z = x + y;

console.log(z)

// Operators in JS -- used to perform some operation in data

// Arithmetic Operators -> +, -, *, /
let a = 3;
let b = 9;

console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);


// Modulus
console.log("a % b = ", a % b);

// Exponentiation
console.log("a ** b = ", a ** b);

// Increment
console.log("pre increment",++a)
console.log("Post increment", b++);

// Decrement
console.log("pre Decrement",--a)
console.log("Post Decrement", b--);

// Assignment Operator -- The assignment ( = ) operator is used to assign a value to a variable or property. The assignment expression itself has a value, which is the assigned value.

let s = 5;
let t = 2;
s = 4; // s = s - 4
console.log("s = ", s);


// The Addition Assignment Operator (+=) adds a value to a variable.
let c = 10;
c += 5;
console.log(c);

/*
Operator        Example            Same as
=	            x = y	            x = y
+=	            x += y	            x = x + y
-=	            x -= y	            x = x - y
*=	            x *= y	            x = x * y
/=	            x /= y	            x = x / y
%=	            x %= y	            x = x % y
**=	            x **= y	            x = x ** y
*/

// Comparision Operator -- 
/*
Operator	    Description
==	            equal to
===	            equal value and equal type
!=	            not equal
!==	            not equal value or not equal type
>	            greater than
<	            less than
>=	            greater than or equal to
<=	            less than or equal to
?	            ternary operator
*/

// Equal to (==)
let numA = 10;
let numB = 5;
if (numA == numB) {
    console.log("numA is equal to numB");
} else {
    console.log("numA is not equal to numB");
}

// Equal value and equal type (===)
let p = 10;
let q = "10";
if (p === q) {
    console.log("p is equal to q in value and type");
} else {
    console.log("p is not equal to q in value and/or type");
}

// Not equal (!=)
let m = 5;
let n = 7;
if (m != n) {
    console.log("m is not equal to n");
} else {
    console.log("m is equal to n");
}

// Not equal value or not equal type (!==)
let r = 10;
let sDifferent = "10";
if (r !== sDifferent) {
    console.log("r is not equal to s in value or type");
} else {
    console.log("r is equal to s in value and type");
}

// Greater than (>)
let numC = 15;
let numD = 10;
if (numC > numD) {
    console.log("numC is greater than numD");
} else {
    console.log("numC is not greater than numD");
}

// Less than (<)
let numE = 5;
let numF = 8;
if (numE < numF) {
    console.log("numE is less than numF");
} else {
    console.log("numE is not less than numF");
}

// Greater than or equal to (>=)
let numG = 10;
let numH = 10;
if (numG >= numH) {
    console.log("numG is greater than or equal to numH");
} else {
    console.log("numG is less than numH");
}

// Less than or equal to (<=)
let numI = 20;
let numJ = 15;
if (numI <= numJ) {
    console.log("numI is less than or equal to numJ");
} else {
    console.log("numI is greater than numJ");
}

// Ternary operator (?:)
let age = 20;
let message = (age >= 18) ? "You are an adult" : "You are a minor";
console.log(message);

// Logical Operator -- &&, ||, !

// Logical AND -- &&
// Logical OR -- ||
// Logical NOT - !


// Logical AND (&&)
let num1 = 10;
let num2 = 5;
if (num1 > 0 && num2 > 0) {
    console.log("Both num1 and num2 are positive numbers");
} else {
    console.log("At least one of num1 and num2 is not a positive number");
}

// Logical OR (||)
let isRaining = true;
let isSunny = false;
if (isRaining || isSunny) {
    console.log("It is either raining or sunny (or both)");
} else {
    console.log("It is neither raining nor sunny");
}

// Logical NOT (!)
let hasMoney = true;
if (!hasMoney) {
    console.log("You don't have money");
} else {
    console.log("You have money");
}