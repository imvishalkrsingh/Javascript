// array

const myArr = [1,2,3,4,5,6]

const heroes = ["iron Man", "hulk", "thor"]

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element)
}

// printing
console.log('String Array : ');

for (let i = 0; i < heroes.length; i++) {
    const element= heroes[i]
    console.log(element);
}

// push and pop

console.log('Push and Pop');
heroes.push('Black Panther')

// for (let i = 0; i < heroes.length; i++) {
//     const element= heroes[i]
//     console.log(element);
// }

heroes.pop()

for (let i = 0; i < heroes.length; i++) {
    const element= heroes[i]
    console.log(element);
}

//  shift and unshift

myArr.unshift(10);
console.log(myArr[0]);

myArr.shift()
console.log(myArr[0]);

// includes and indexOf
console.log(myArr.includes(1));
console.log(myArr.indexOf(3));

// slice and splice
