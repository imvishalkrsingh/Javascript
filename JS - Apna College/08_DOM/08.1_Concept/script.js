/*
In JavaScript, the Document Object Model (DOM) is a programming interface that represents the structure of a web page as a tree-like structure, where each node represents an element (such as a paragraph, a heading, or an image) and each branch represents the relationships between elements. The DOM provides a way for scripts to dynamically access and manipulate the content, structure, and style of a web page.
*/

/*
Window Object in JS : The window object represents an open window in a browser. It is browser's object (not javascript's) & is automatically created by browser.

Note : It is a global objects with lots of properties and methods.
*/

/*
Q. what is DOM ?
sol : when a web page is loaded, the browser creates a Document object model (DOM) of the page.

Window -> Document -> html -> head -> body

*/

console.dir(document.body);
console.log(document.body);
console.log(document.body.childNodes[1]);


/*
1.Accessing Elements:
You can access elements in the DOM using methods like document.getElementById(), document.querySelector(), or document.querySelectorAll(). These methods allow you to select elements by their ID, class, tag name, or other attributes.
*/

// Get an element by ID
var element = document.getElementById("myElementId");

// Get the first element with a specific class
var element1 = document.querySelector(".myClass");

// Get all elements with a specific class
var elements = document.querySelectorAll(".myClass");

/*
Manipulating Elements:
Once you have a reference to an element, you can manipulate its properties, such as its innerHTML, textContent, style, or classList.
*/
// Change the text content of an element
// element.textContent = "New content";

// Add a CSS class to an element
// element.classList.add("newClass");

// Change the background color of an element
// element.style.backgroundColor = "blue";

let heading = document.getElementById("heading");
console.dir(heading);

// check the tag name
console.log(heading.tagName);

// innerText 

let div = document.querySelector("div");
console.dir(div);

console.log(div.innerText);

// inner HTML
console.log(div.innerHTML);

div.innerText = "lemon";

console.log(div.innerText);

// text content -- used to show hidden contents
let h1 = document.querySelector("h1");
console.log(h1)
console.log(h1.textContent);

// Q1. Create a H2 heading element with text - "hello javascript". Append "from Apna College Students" to this text using JS.

let h2 = document.querySelector("h2");
console.log(h2);

console.log(h2.textContent);
h2.innerText = h2.innerText + " From apna college Students"

console.log(h2.innerText);


// Q2. Create 3 divs with common class name - 'box'. Access them and add some unique text to each of them.

let box = document.querySelectorAll(".box");
box[0].innerText = "hey this is first"
box[1].innerText = "hey this is Second"
box[2].innerText = "hey this is Third"
