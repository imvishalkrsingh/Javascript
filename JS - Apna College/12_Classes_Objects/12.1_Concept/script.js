const student = {
    fullName : "Vishal singh",
    marks : 99,
    location : "Bhopal Madhya Pradesh",
}

console.log(student);

// Prototypes in JS

/*
A javascript object is an entity having state and behavior (properties and method).
JS objects have a special property called Prototype.

We can set prototype using __proto__

if objects * prototype have same method, object's method will be used.
*/

const employee = {
    calcTax() {
        console.log("Tax rate is 10");
    }
}

console.log(employee.calcTax);

const karanArjun = {
    salary : 50000,

}

karanArjun.__proto__ = employee;

// Classes in JS 
/*
Class is a program-code template for creating objects.
Those objects will have some state (Variables) & some behaviour (functions) inside it.

*/

class MyClass {
    constructor(){}
    myMethod(){}
}

let myObj = new MyClass();

class toyotaCar {
    start(){
        console.log("Start");
    }

    stop(){
        console.log("Stop");
    }
}

let fortuner = new toyotaCar();
console.log(fortuner);

// Constructor in JS
/*
Constructor() method is :       class MyClass{
1. automatically invoked by        new constructor(){}
2. initializes object              myMethod(){}
                                }
*/
