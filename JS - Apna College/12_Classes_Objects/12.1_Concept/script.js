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



// Inheritance in JS
/*
Inheritance is passing down properties and methods from parent class to child class.

class Parent {

}

class child extends Parent {

}

Note : If child & parent have same method, child's method will be used.[Method Overriding]
*/

class Parent {
    hello(){
        console.log("hello");
    }
}

class Child extends Parent {
     
}


class Person {
    constructor(){
        this.species = "homo sapiens";
    }


    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("Sleep");
    }
}

class Engineer extends Person{

    constructor(branch){
        this.branch = branch;
    }
    work(){
        console.log("solve problems, build something");
    }
}

let shradhaObj = new Engineer();

class Doctor extends Person {
    work (){
        console.log("Treat patients");
    }
}

let vishalObj = new Doctor();
console.log(vishalObj);

console.log(vishalObj.work());

// Super Keyword
/* The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

super (args) // call Parent's constructor

super.parentMethod(args)
*/

