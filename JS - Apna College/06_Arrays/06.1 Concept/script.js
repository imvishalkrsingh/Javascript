// Arrays in Javascript



let marks_Student1 = 97;
let marks_Student2 = 96;
let marks_Student3 = 95;
let marks_Student4 = 94;
let marks_Student5 = 93;

// Arrays = collections of items

let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";

const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";


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

// Array Methods -----

// push() : add to end

let foodItems = ["mango", "apple", "litchi", "grapes"]
console.log(foodItems);

foodItems.push("Oranges")
console.log(foodItems);

// pop()  : delete from end and return

foodItems.pop();
console.log(foodItems);

// toString() : converts array to string
console.log(foodItems.toString());

// concat() ; Joins multiple arrays and returns result

let vegetables = ["Potato", "tomato", "cabbage"]

console.log(foodItems.concat(vegetables));


// unshift() : add to start
vegetables.unshift("chilli")
console.log(vegetables);

// unshift() :Delete elements from start

vegetables.shift();
console.log(vegetables);

// slice() : returns a piece of the array

console.log(foodItems.slice(1,3));

// splice() : change original array (add, remove, replace)

let arr = [1, 2, 3, 4, 5, 6]

arr.splice(2,2,101, 102)
console.log(arr);

arr.splice(3, 1, 103)

console.log(arr);









