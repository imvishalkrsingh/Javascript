// Let's practice some Question of Arrays in javascript

// Q1. For a given array with marks of students -> [85,97,44,37,76,60] Find the average marks of the entire class.

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let i = 0; i < marks.length; i++) {
    const element = marks[i];
    console.log(element);
    sum = sum + element;
}
let avg = sum / 6;
console.log("Average of 6 Students in a class :", avg);


// Q2. For a given array with prices of 5 items -> [250, 645, 300, 900, 50] All items have an offer of 10% off on them. Change the array to store final price after applying offer.

let price = [ 250, 645, 300, 900, 50];
let price1 = [];

for (let i = 0; i < price.length; i++) {
    let offer = i / 10;
    const element = price[i];
    console.log(element);
    price[i] = price[i] - offer;
    console.log(`Value after offer = ${price[i]}`);
}