// Events in Javascript

let btn1 = document.getElementById("btn1");
btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a);
}

let next = document.getElementById("next");
next.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.ClientY);
};

let div = document.querySelector("div");
div.onmouseover = (evt) => {
    console.log('You are inside div');
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.ClientY);
}

// Event Listeners

// node.addEventListener(event, callback)


let explore = document.getElementById("explore");

explore.addEventListener("click", () => {
    console.log("Explore Button was Clicked");
})

explore.addEventListener("click", () => {
    console.log('Explore was clicked - Handler 2');
})

const handler3 = () => {
    console.log("Explore button was Clicked - handler3");
}

explore.addEventListener("click", handler3);


explore.addEventListener("click", () => {
    console.log('Explore was clicked - Handler 4');
})

// node.removeEventListener(event, callback)

explore.removeEventListener("click", handler3);

// Note : the callback reference should be same to remove.

// Q. Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");

modeBtn.addEventListener("click", () => {
    console.log("You are trying to change mode");
})

let currMode = 'light';

modeBtn.addEventListener("click", () => {
    if(currMode === "light"){
        currMode = "dark";
        // document.querySelector("body").style.backgroundColor = "black";
        // document.querySelector("body").style.color = "white";

        body.classList.add("dark");
        body.classList.remove("light");

    } else {
        currMode = 'light';
        // document.querySelector("body").style.backgroundColor = "white";
        // document.querySelector("body").style.color = "black";

        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(currMode);
});

