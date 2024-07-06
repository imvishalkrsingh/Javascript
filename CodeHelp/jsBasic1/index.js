console.log("Nmastey Duniya");
// this line is used to print on cosole window...

let firstName = 'vishal';
console.log(firstName);


firstName = 3;
console.log(firstName);

// Ternary Operators 
let age = 17;
let status = (age >=18) ? 'Yes Vote' : 'Not able to Vote';
console.log(status);

// Conditional Statements
// if else condition
let marks = 78;

if(marks>=80){
    console.log('A Grade');
}
else if(marks >= 70){
    console.log('B Grade');
}
else if(marks >=60){
    console.log('C Grade');
}
else if(marks >= 50){
    console.log('D Grade');
}
else{
    console.log("fail");
}

// Switch Statements
let num = 44;

switch(num){
    case 1 : console.log('A');
    break;
    case 2 : console.log('B');
    break;
    case 3 : console.log('c');
    break;
    default :console.log("fail");
}

// loops
// for loops

for(let i=0;i<5;i++){
    console.log(i);
    console.log("vishal" + i);
}

// while loop

let score = 143;
while(score <= 200){
    console.log(score);
    score++;
}
