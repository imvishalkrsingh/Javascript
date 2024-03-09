// ....................object Creation method 1
const tinderUser = new Object();    

// console.log(tinderUser);

tinderUser.name = "vishal"
tinderUser.age = 24
tinderUser.id = "imvishalkrsingh"

// console.log(tinderUser);

 //................. object creation method 2
const tinderUser1 = {}             

console.log(tinderUser1);

const regularUser = {
    email : "someone@gmail.com",
    fullName : {
        firstName : "vishal",
        middleName : "kumar",
        lastName : "Singh",
        education : {
            college : "SAGE Bhopal",
            course : "MCA",
            specilization : "Cloud Computing"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullName.middleName);


// ...............object.assign property to add one or more object in a single object

// const user = Object.assign({}, tinderUser, regularUser)
// console.log(user);

//................. spread operator is used to combine two or more objects in a single object

const userName = {
    firstName : 'vishal',
    middleName : 'kumar',
    lastName :     'singh'
}

const college = {
    name : 'SAGE',
    course : 'MCA',
    specilization : 'cloud computing'
}

const vksingh = {...userName, ...college}

// console.log(vksingh);

// ..........objects in Array

const array1 = [
    car = {
        name : 'scorpio N',
        model : 2023,
        variant : 'Z8L'
    },
    phone = {
        name : 'Iphone 15',
        model : 2023,
        variant : '15 pro max'
    }
] 

console.log(array1[1]);
console.log(array1[0].name, array1[1].variant);

