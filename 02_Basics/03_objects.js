// singleton
// object.create

// object literals

const jsUser = {
    name : "vishal",
    age : 24,
    location : "Bhopal",
    email : "vishalkumarsingh162@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"],
    "College" : "SAGE University Bhopal"
}

console.log(jsUser.name);      //way of accessing object property
console.log(jsUser["email"]);   // another way of accessing object property
console.log(jsUser["College"]);

jsUser.age = 25;   //change value of objects
console.log(jsUser);

// freeze the object to not changeable value
// Object.freeze(jsUser)

jsUser.name = "V.k.Singh"
console.log(jsUser);

jsUser.greetings = function(){
    console.log("Hello world");
}

console.log(jsUser.greetings());

jsUser.greetingsTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greetingsTwo());

 




