// Define a prototype object
const animal = {
    type: 'Unknown',
    sound: function() {
        console.log('Some sound');
    }
};

// Create a new object using the prototype
const dog = Object.create(animal);
dog.type = 'Dog';
dog.breed = 'Labrador';
dog.sound = function() {
    console.log('Woof woof');
};

// Access properties and methods
console.log(dog.type); // Output: Dog
console.log(dog.breed); // Output: Labrador
dog.sound(); // Output: Woof woof

// If we attempt to access a property not directly on 'dog', JavaScript looks up the prototype chain
console.log(dog.color); // Output: Undefined (not found on 'dog' or its prototype)
console.log(dog.sound === animal.sound); // Output: false (overridden method)



// Second Questions...............

// Parent class
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

// Child class inheriting from Animal
class Dog extends Animal {
    constructor(name, breed) {
        // Call the constructor of the parent class using super()
        super(name);
        this.breed = breed;
    }

    speak() {
        // Override the speak() method of the parent class
        console.log(`${this.name} barks`);
    }

    fetch() {
        console.log(`${this.name} fetches the ball`);
    }
}

// Create an instance of the child class
const myDog = new Dog('Buddy', 'Golden Retriever');

// Access properties and methods
console.log(myDog.name); // Output: Buddy
console.log(myDog.breed); // Output: Golden Retriever
myDog.speak(); // Output: Buddy barks
myDog.fetch(); // Output: Buddy fetches the ball


// Third Questions

function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error('Division by zero is not allowed');
        }
        return a / b;
    } catch (error) {
        // Handle the error gracefully
        console.error('An error occurred:', error.message);
        // Perform fallback behavior or notify the user
        return 'Error: Division operation failed';
    }
}

// Example usage
console.log(divide(10, 2)); // Output: 5
console.log(divide(10, 0)); // Output: An error occurred: Division by zero is not allowed
                            //         Error: Division operation failed
