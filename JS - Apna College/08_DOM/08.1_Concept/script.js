/*
In JavaScript, the Document Object Model (DOM) is a programming interface that represents the structure of a web page as a tree-like structure, where each node represents an element (such as a paragraph, a heading, or an image) and each branch represents the relationships between elements. The DOM provides a way for scripts to dynamically access and manipulate the content, structure, and style of a web page.
*/

/*
1.Accessing Elements:
You can access elements in the DOM using methods like document.getElementById(), document.querySelector(), or document.querySelectorAll(). These methods allow you to select elements by their ID, class, tag name, or other attributes.
*/

// Get an element by ID
var element = document.getElementById("myElementId");

// Get the first element with a specific class
var element = document.querySelector(".myClass");

// Get all elements with a specific class
var elements = document.querySelectorAll(".myClass");

/*
Manipulating Elements:
Once you have a reference to an element, you can manipulate its properties, such as its innerHTML, textContent, style, or classList.
*/
// Change the text content of an element
element.textContent = "New content";

// Add a CSS class to an element
element.classList.add("newClass");

// Change the background color of an element
element.style.backgroundColor = "blue";
