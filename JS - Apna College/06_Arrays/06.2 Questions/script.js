// Let's practice some Question of Arrays in javascript

// Q1. For a given array with marks of students -> 
// [85,97,44,37,76,60] Find the average marks of the entire class.

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

let items = [250, 645, 300, 900, 50];

// let i = 0;
// for(let val of items){
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }

// using for loop to solve this problem....

for(let i = 0; i < items.length; i++){
    let offer = items[i] / 10;
    items[i] -= offer;
}

console.log(items);


// Q3. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);

// a. Remove the first company from the array.
// companies.shift()
// console.log(companies);

// b. Remove uber and add Ola in its place.
companies.splice(2, 1, "Ola")
console.log(companies);

// Add Amazon at the end.
companies.push("Amazon");
console.log(companies);