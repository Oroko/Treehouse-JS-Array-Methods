const numbers = [1,2,3,4,5,6,7,8,9,10];
let times10 = [];

// times10 should be: [10,20,30,40,50,60,70,80,90,100]
// Write your code below

numbers.forEach(number => {
    let product = number * 10;
    times10.push(product)
})

console.log(times10)