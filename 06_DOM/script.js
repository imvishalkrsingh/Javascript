// Four pillars of DOM
/*
1. Selection of an Element
2. Changing HTMl
3. Changing CSS
4. Event Listener
*/


// 1. Selecting of an Element
var a = document.querySelector("h1") // for selecting query
console.log(a)

// 2. Changing HTML
a.innerHTML = "Content changed"   //Changing HTMl

// document.querySelector("h1").innerHtml = "Content Changes"

// 3. Changing CSS
a.style.backgroundColor = "red"
a.style.color = "black"

// 4. Event Listener
a.addEventListener("click", function(){
    console.log("Hey")
    console.log('You just click on the Heading');
    a.style.color = 'yellow'
    a.style.backgroundColor = 'black'
})


let bulb = document.querySelector("#bulb")
let btn = document.querySelector("#on")

btn.addEventListener("click",function(){
    bulb.style.backgroundColor = "yellow"
})


let off = document.querySelector('#off')
off.addEventListener("click", function(){
    bulb.style.backgroundColor = "grey"
})


// single button for ON or OFF 
let auto = document.querySelector("#auto")
let flag = 0;
auto.addEventListener("click", function(){
    if(flag == 0){
        bulb.style.backgroundColor = "yellow"
        console.log("clicked");
        flag = 1;
    } else{
        bulb.style.backgroundColor = "transparent"
        console.log("clicked again");
        flag = 0
    }
})

// selecting multiple elements in a single line

let h2 = document.querySelectorAll("h2")

h2.forEach(function(e){
    console.log(e);
})

// document.getElementById("id")
// document.getElementByClassName("classname")




