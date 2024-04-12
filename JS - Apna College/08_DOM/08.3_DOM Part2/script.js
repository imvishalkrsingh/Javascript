let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));

console.log(para.setAttribute("class", "new"));

// css: to change from javascript
div.style.backgroundColor = "grey";

// insert elements 

let el = document.createElement("button");
el.innerText = "Click me";
console.log(el);


div.append(el); // adds at the end of node (inside)

para.prepend(el); // adds at the start of node (inside)

let h1 = document.querySelector("h1");
h1.before(el); // adds before the node (outside)

h1.after(el); // adds after the node (outside)

// Delete Element

el.remove(); // removes the node

// Q1. create a new button element. Give it a text "Click me", background color of red and text color of white.
// insert the button as the first element inside the body tag.

let clickMe = document.createElement("button");
clickMe.innerText = "click me!";

clickMe.style.color = 'white';
clickMe.style.backgroundColor = 'red';

document.querySelector("body").prepend(clickMe);

// Q2. Create a paragraph tag in html, give it a class and some styling. Now create a new class in CSS and try to append this class to the paragraph element.

// Did you notice, how you overwrite the class name when you add a new one ? Solve this problem using classList.

let para1 = document.getElementsByClassName("content")[0];

console.log(para1.getAttribute("class"));

para1.classList.add("newClass"); // Adding new class using classList






