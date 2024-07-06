console.log("hello jee");

// let lastName = 'singh';

// let firstName = new String('vishal');

// let message = 'This is vishal kumar singh';

// let words = message.split(' ');

// console.log(words);

// let messages = `hello ${lastName},
// Thanks for the Opportunity

// thanks,
// Vishal`;

// console.log(messages);

// let date = new Date();

// console.log(date);

// let date2 = new Date(1998,0,17,9);

// console.log(date2);

// let date3 = new Date('january,17,1998,9');

// console.log(date3);

// date3.setFullYear(2000);

// console.log(date3);

// Arrays
// adding new elements
// finding elements
// removing elements
// spliting elements
// combinig elements

// let numbers = [1,8,6,5,4];

// console.log(numbers);

// numbers.push(10);

// console.log('after push');

// console.log(numbers);

// numbers.unshift(0);

// console.log('after unshift');

// console.log(numbers);

// numbers.splice(2,0,'v','i','s','h','a','l');

// console.log('after slice');

// console.log(numbers);

// console.log(numbers.indexOf('v'));

// if(numbers.indexOf(44) !=-1){
//     console.log('present');
// }
// else{
//     console.log('Absent');
// }

// let courses = [
//     {no:1,name:'vishal'},
//     {no:2,name:'aman'}
// ];

// console.log(courses);

// let course = course.find(function(course){

//     return courses.name === 'vishal';

// })

// console.log(course);

// spread operator...

// let first = [1,2,3,4];

// console.log(first);

// let second = [5,6,7,8];

// console.log(second);

// let combine = [...first,...second];
// console.log(combine);

// let arr = [10,20,30,40];

// for(let value of arr){
//     console.log(value);
// }

// arr.forEach(function(number){
//     console.log(number);
// })

// arr.forEach(numbers=> console.log(numbers));

// join function

// let numbers = [1,2,3,4,5,6];

// const joined = numbers.join(',');

// console.log(joined);

// split function

// let message = 'This is my first message';

// let parts = message.split(' ');

// console.log(parts);

// let joined = parts.join('_');

// console.log(joined);


// sorting an array

// let numb = [44,33,45,54,32,23];

// let final = numb.sort();

// console.log(final);

// let rev = numb.reverse();

// console.log(rev);

// let numbers = [10,2,-3,-5,5];

// let filtered = numbers.filter(value => value >=0
// );

// console.log(filtered);

// mapping

let numbers = [1,2,3,4,5];

let items = numbers.map(function(value){
    return 'student_no ' + value;
})

console.log(items);