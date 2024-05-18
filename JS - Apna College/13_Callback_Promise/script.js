console.log('one');
console.log('Two');

function hello() {
    console.log("Hello");
}

// Uncomment the next line to use setTimeout with a named function
// setTimeout(hello, 2000); //timeout 2s = 2000ms

// Arrow function in setTimeout
setTimeout(() => {
    console.log('Hello, this is an arrow function in setTimeout');
}, 4000);

console.log('Three');
console.log('Four');

// Callbacks
function sum(a, b) {
    console.log('Sum of a & b:', a + b);
}

function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}

calculator(1, 2, sum);

function getInfo(infoId, getNextInfo) {
    // 2s
    setTimeout(() => {
        console.log("Information", infoId);
        if (getNextInfo) {
            getNextInfo();
        }
    }, 2000);
}

// Sequential execution using nested callbacks
getInfo(123, () => {
    console.log("Getting data 2");
    getInfo(456, () => {
        console.log("Getting data 3");
        getInfo(789, () => {
            console.log("Getting data 4");
            getInfo(987);
        });
    });
});

// Promises in JS
let promise = new Promise((resolve, reject) => {
    console.log('I am a Promise');
    resolve("Success");
    // Uncomment the next line to test rejection
    // reject('Some error occurred');
});

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching data", dataId);
            // Uncomment the next line to test resolve
            // resolve("Success");
            // Uncomment the next line to test reject
            // reject("Error");
            if (getNextData) {
                getNextData();
            }
        }, 5000);
    });
}

function asyncFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some data 1");
            resolve("Success");
        }, 4000);
    });
}

console.log("Fetching Data........");
let p1 = asyncFunction();
p1.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

// Async-await
async function greeting() {
    console.log("Hello, Good Morning .....");
}

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather Data");
            resolve(200);
        }, 200);
    });
}

async function getWeatherData() {
    await api();
}

// IIFE: Immediately Invoked Function Expression with async-await
(async function getAllData() {
    try {
        console.log("Getting data 1.......");
        await getData(1);
        console.log("Getting data 2.......");
        await getData(2);
        console.log("Getting data 3.......");
        await getData(3);
    } catch (error) {
        console.log("Error:", error);
    }
})();
