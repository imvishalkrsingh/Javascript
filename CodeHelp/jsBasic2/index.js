console.log('chaliye suru krte h.....')

// let rectangle ={
//     length:1,
//     breadth:2,

//     draw: function(){
//             console.log('draw');
// }
// };

// factory function

// function createRectangle(len,bre) {
//     return rectangle ={
//         length:len,
//         breadth:bre,
    
//         draw: function(){
//                 console.log('draw');
//     }
//     };
//     // return rectangle;
// }

// let obj1 = createRectangle(5,4);
// let obj2 = createRectangle(7,8);
// let obj3 = createRectangle(8,9);

// camel Case -> numberOfStudents
// constructor function -> pascal notation ->first letter of every word is capital -> NumberOfStudent
// constructor function -> properties/method ->initialise/define
// function Rectangle(len,bre){
//     this.length = len,
//     this.breadth = bre,
//     this.draw = function(){
//         console.log('drawing Rectangle');
//     }

// }
// object creation using constructor function

// let rectangleObject = new Rectangle(3,4);

// rectangleObject.color = 'yellow';
// console.log(rectangleObject);

// delete rectangleObject.color; 
// console.log(rectangleObject);


// let Rectangle1 = new Function(
//         'length', 'breadth',
//     `this.length = length;
//     this.breadth = breadth;
//     this.draw = function(){
//         console.log('drawing');
//     }`);


//     let rect = new Rectangle1(22,33);
//     console.log(rect);


// let a = 10;
// let b = a;
// a++;
// console.log(a);
// console.log(b);

// primitives are copied by their value

// let c = { value:10 };
// let d = c;

// c.value++;
// console.log(c.value);
// console.log(d.value);

// references are copied by their address 

// let a = 10;
// function inc(a){
//     a++;
//     console.log(a);
// }
// inc(a);
// console.log(inc); 

// let rectangle = {
//     length:2,
//     breadth:3
// };

// for in loop
// for(let key in rectangle){
    // keys are reflected through key variables
    // values are reflected through rectangle[key]
    // console.log(key,rectangle[key]); 
// }

// for off loop
// for(let key of object.keys(rectangle)){
//     console.log(key);
// }

// if('color' in rectangle){
//     console.log('present');
// }
// else{
//     console.log('Absent');
// }


// object cloning through 

// let src = {
//     a : 10,
//     b : 20,
//     c : 30
// };

// let dest = {}; 

// for(let key in src){
//     dest[key] = src[key];
// }

// console.log(dest);
// src.a++;
// console.log(dest);
// console.log(src.a);

// object cloning through 

// let src = {
//     a : 10,
//     b : 20, 
//     c : 30
// };

// let src2 = {value:25};
// let dest = Object.assign({},src,src2);
// console.log(dest);

// src.a++;
// console.log(src.a);
// console.log(dest);

// object cloning through .....

let src = { 
    a : 10,
    b : 20,
    c : 30
};

let dest = {...src};
console.log(dest);

src.a++;
console.log(src.a);