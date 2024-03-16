// Let's practice........

// Q1. Print all even numbers from 0 to 100.
// In this question, we iterate through numbers from 0 to 100 and print only the even numbers.
// We use the modulus operator (%) to check if a number is even (divisible by 2 with no remainder).
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) { // Checking if the number is even
        console.log(i);
    }
}

// Q2. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
// In this question, we create a simple guessing game where the user needs to guess a random game number.
// We use a while loop to repeatedly prompt the user for their guess until they guess the correct number.

let gameNum = 25; // Define the game number

let userNum = prompt("Guess the game number : "); // Prompt the user for their guess
console.log(userNum);

while (userNum != gameNum) { // Keep prompting until the user guesses the correct number
    userNum = prompt("You entered the wrong number. Guess again : ");
}
console.log("Congratulations, You entered the right number"); // Display a success message when the user guesses correctly
console.log("You Won the game.");
