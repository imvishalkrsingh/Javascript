// Question 1: Explain the difference between using inline event attributes (onclick, onmouseover, etc.) and event listeners (addEventListener) for handling events in JavaScript. Provide examples for both approaches.

let btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        console.log('Button clicked');
    });

/*
Question 2: How can you retrieve information about the event object in an event handler? Provide an example demonstrating how to access properties of the event object.
*/

let btn1 = document.getElementById('btn');
btn.addEventListener('click', (event) => {
    console.log('Event type:', event.type);
    console.log('Target element:', event.target);
    console.log('Mouse coordinates:', event.clientX, event.clientY);
});

// Question 3: Explain the concept of event propagation in JavaScript. How does event propagation work, and what are the phases of event propagation?Code Example:

let outer = document.getElementById('outer');
let inner = document.getElementById('inner');

outer.addEventListener('click', () => {
    console.log('Outer div clicked');
});

inner.addEventListener('click', () => {
    console.log('Inner div clicked');
    event.stopPropagation(); // Stops the event from bubbling up to the outer div
});
