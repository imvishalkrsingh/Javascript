const myObject = {
    js : 'Javascript',
    cpp : 'C++',
    rb : 'Ruby',
    swift : 'Swift by apple'
}

for (const key in myObject) {
    console.log(key);
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ['c', 'c++', 'java', 'javascript', 'R', 'python']
for (const key in programming) {
    // console.log(key); 
    console.log(programming[key]);
}

// for each loop

let sum = 0;
const numbers = [65, 44, 12, 4];

numbers.forEach(myFunction => {
  sum += myFunction;
});

console.log(sum);


const myCoding  = [{
    languageName : "Javascript",
    languageFileNmae : 'js'
},
{
    languageName : "Java",
    languageFileNmae : 'java'
},
{
    languageName : "Python",
    languageFileNmae : 'py'
}
]

myCoding.forEach( (item) =>{
    console.log(item.languageName);
})

