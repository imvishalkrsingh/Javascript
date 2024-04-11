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



