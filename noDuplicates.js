const numbers =  [1, 1, 2, 3, 4, 3, 5, 5, 6, 7, 3, 8, 9, 10];

const unique = numbers.filter((number,index, array) => {
   return index === array.indexOf(number);
})

console.log(unique)