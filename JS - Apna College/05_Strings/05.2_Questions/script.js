// Practice Questions

// Q1. Prompt the user to enter their name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length.
let text = "We are the so-called \"Vikings\" from the north.";
console.log(text);

let fullName = prompt("Enter your full name : ")
console.log("Full name is : ", fullName);
len = fullName.length;
ans = `@${fullName}${len}`
console.log(ans);