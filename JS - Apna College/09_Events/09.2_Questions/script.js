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


/*
3. Write a JavaScript function that changes the background color of an element when a mouse enters it.
*/

function changeBackgroundColorOnMouseEnter(elementId, newColor) {
    let element = document.getElementById(elementId);
    
    // Add event listener for mouseenter event
    element.addEventListener('mouseenter', () => {
        // Change the background color when mouse enters the element
        element.style.backgroundColor = newColor;
    });

    // Add event listener for mouseleave event to revert back to original color
    element.addEventListener('mouseleave', () => {
        // Revert back to the original background color when mouse leaves the element
        element.style.backgroundColor = '';
    });
}

// Example usage:
changeBackgroundColorOnMouseEnter('myElement', 'lightblue');
