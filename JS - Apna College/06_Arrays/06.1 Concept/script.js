// Arrays in Javascript

let marks_Student1 = 97;
let marks_Student2 = 96;
let marks_Student3 = 95;
let marks_Student4 = 94;
let marks_Student5 = 93;

// Arrays = collections of items

// Creating an Array -

let marks = [ 99, 98, 97, 96, 95]
console.log(marks);
console.log(marks.length);

let names = ["vishal", "Aman", "Piyush", "Vikash"]
console.log(names);
console.log(names.length);

// Array Indices -- arr[0], arr[1]
console.log(names[4]); // undefined

// Note - property gives some values while Methods do some work
// Note - Arrays in javascripts are Mutable.

let heroes = ["iron man", "Captain America", "Thor", "Hulk", "Loki"]

for (let i = 0; i < heroes.length; i++) {
    const element = heroes[i];
    console.log(element);
}
console.log("------for-of Loop------");
// for-of loop in Arrays
for(let el of heroes){
    console.log(el);
}






