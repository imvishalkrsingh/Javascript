console.log('one');
console.log('Two');


function hello(){
    console.log("Hello");
}

// setTimeout(hello, 2000) //timeout 2s = 2000ms

// arrow function in setTimeout

setTimeout(() => {
    console.log('Hello this is Array function in setTimeout');
}, 4000);

console.log('Three');
console.log('Four');


// callbacks

function sum(a, b){
    console.log('Sum of a & b : ',a+b);
}

function calculator(a,b, sumCallback){
    sumCallback(a,b);
}

calculator(1,2, sum);


function getInfo(infoId, getNextInfo){
    // 2s
    setTimeout(() => {
        console.log("Information", infoId);
        if(getNextInfo){
            getNextInfo();
        }
    }, 2000);
}

// getInfo(123);
// getInfo(456);
// getInfo(789);
// getInfo(987);

getInfo(123, () => {
    console.log("Getting data2");
    getInfo(456, () => {
        console.log("Getting data3");
        getInfo(789,() => {
            console.log("Getting data4");
            getInfo(987);
        });
    });
});


// Promise in jS

let promise = new Promise((resolve, reject) => {
    console.log('I am a Promise');
    resolve("Success");
    // reject('Some Error occured');
});


function getData(dataId, getNextData){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            reject("error");
            if(getNextData){
                getNextData();
            }
        }, 5000);
    });
}
