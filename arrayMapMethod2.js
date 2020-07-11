const prices = [5, 4.23, 6.4, 8.09, 3.20];

// Result: [ '$5.00', '$4.23', '$6.40', '$8.09', '$3.20' ]

const newPrices = prices.map(price => `$${price.toFixed(2)}`);
console.log(newPrices);