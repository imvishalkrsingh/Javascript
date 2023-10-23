// Array specific loop
// for of loop

const arr = [1,2,3,4,5]

for(const num of arr){
    console.log(num);
}

console.log(`For of loop in Strings`);
const greetings = 'Hello World!'
for (const greet of greetings) {
    console.log(greet);
}

// Map

const map = new Map()
map.set('In', 'India')
map.set('us', 'United states')
map.set('fr', 'France')

console.log(map);

for (const key of map) {
    console.log(key);
}


for (const [key, value] of map) {
    console.log(key, ':-', value);
}



