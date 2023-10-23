// for

for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element);

    if(element == 5){
        // console.log('5 is best Number');
    }
}


for (let i = 1; i < 10; i++) {
    // console.log(`Outer Loop value ${i}`);

    for (let j = 1; j < 10; j++) {
        // console.log(`Inner Loop value ${i} and inner loop ${j}`);
        // console.log(i + ' * ' + j + ' = ' + i*j);
    }
}

let array = ['Flash', 'Batman', 'superman']

for (let index = 0; index < array.length; index++) {
    // console.log(array[index]);
}

// break & continue keyword

console.log(`.........Break Keyword..........`);
for (let index = 0; index < 7; index++) {
    
    if (index == 6) {
        break
    }
    console.log(`Value of i is ${index}`);
}

console.log(`..........Continue Keyword..........`);


for (let index = 1; index <= 7; index++) {
    
    if (index == 5) {
        continue
    }
    console.log(`Value of i is ${index}`);
}


