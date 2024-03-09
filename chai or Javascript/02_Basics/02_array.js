// arrays in javascript

let marvel_heroes = ['iron Man','Spieder Man', 'Thor']
console.log(marvel_heroes)

let dcHeroes = ['Superman', 'Flash', 'Batman']
console.log(dcHeroes)

// push array in another array

// marvel_heroes.push(dcHeroes);

// console.log(marvel_heroes);


// concat method
console.log('...........Concat method ...............');
let all_heroes = marvel_heroes.concat(dcHeroes);

console.log(all_heroes);
console.log();

// spread operator
console.log('...........Spread Operator...............');

const heroes = [...marvel_heroes, ...dcHeroes]

console.log(heroes);
console.log();


