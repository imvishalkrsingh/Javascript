// Destructuring of Objects in javascript

/*
Destructuring in JavaScript allows you to extract values from objects or arrays and assign them to variables in a more concise way. For objects, you can destructure by matching the variable names with the object keys. Here's a simple example:
*/


const course = {
    name : 'JS in hindi',
    price : 999,
    courseInstructor : 'Hitesh Choudhary'
}

console.log(course);

const {courseInstructor} = course

console.log(courseInstructor);

/*
If a property is not present in the object, the default value will be used.

You can also destructure nested objects:
*/

const person = {
    name: 'John',
    age: 30,
    job: {
        title: 'Developer',
        experience: '5 years'
    }
};

// Destructuring nested objects
const { name, job: { title, experience } } = person;

console.log(name);       // 'John'
console.log(title);      // 'Developer'
console.log(experience); // '5 years'


