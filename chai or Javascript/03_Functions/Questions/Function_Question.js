// Q1. Write a JavaScript function to print the “Hello World” message

function hello(){
    console.log("Hello World");
}

// Q2. Write a function that returns the square of a number 

function square(num){
    return num * num;
}
console.log(`Square root of a number : `);
console.log(square(4));

// Q3. Write a function to convert Celsius to Fahrenheit

console.log(`Convert Celsius to Fahrenheit : `);
function calFahrenheit(cel) {
    return (cel*9/5)+32; //Conversion formula
  }
  console.log(calFahrenheit(0)) //32
  console.log(calFahrenheit(20)) //68
  console.log(calFahrenheit(40)) //104

// Q4. Write a function to find the area of a given Rectangle

console.log(`Area of a given Rectangle : `);
function area(l,b){
    return l*b
}
console.log(area(3,5));

// Q5. Write a function to find the area and perimeter of a Circle
function area_Perimeter(rad){
    // return `Perimeter: ${2*Math.PI*rad}, Area: ${Math.PI*rad*rad}`;
    
    const perimeter1 = 2*(Math.PI * rad);
    const Area = (Math.PI * rad * rad);
    return perimeter1,Area;
}
console.log(area_Perimeter(5));

// Q6. Write a function to reverse a number

console.log(`Reverse a Number : `);

    function reverseNum(num) {
        var reverse = 0;
        while(num != 0)
        {
          reverse = reverse * 10;
          reverse = reverse + num%10;
          num = Math.trunc(num/10); // Remove decimal places
        }
        return reverse;
      }
      console.log(reverseNum(123)) //321
      console.log(reverseNum(5872)) //2785

