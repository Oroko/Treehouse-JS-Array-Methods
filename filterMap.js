const numbers = [1, 2, 3, 4]

const not2 = numbers
.filter(number => number !== 2)
.map(number => number + 1)

console.log(not2);
