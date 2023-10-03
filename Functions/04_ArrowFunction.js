const user = {
    username : "Vishal",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to website`);
    }
}

user.welcomeMessage()

// creating a function
console.log(`..............Normal Function............`);

const normal = function() {
    const name = "Normal Function"
    console.log(name);
    console.log(this.name);
}
normal();

// .......Arrow Function
console.log(`...........Arrow function..................`);
const chai = () => {
    const chaiName = "Adrak chai"
    console.log(chaiName);
    console.log(this.chaiName);
}

chai();

const addTwoNumber = () => {
    const a = 5;
    const b = 3;

    return a + b   // need to return because curly braces used in arrow functions
}

addTwoNumber();

const subsTwoNumber = (a,b) => (a-b)

console.log(subsTwoNumber(2,3))

// ...........Return objects in arrow function
console.log(`...........Return objects in arrow function..............`);

const apple = () => ({modelname : 'Macbook Air', YOM : 2020})

console.log(apple());

