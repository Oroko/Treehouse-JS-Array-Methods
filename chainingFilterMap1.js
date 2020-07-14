const users = [
  {name: 'Samir', age: 27},
  {name: 'Angela', age: 33},
  {name: 'Beatrice', age: 42},
  {name: 'Shaniqua', age: 30},
  {name: 'Marvin', age: 23},
  {name: 'Sean', age: 47}
];
 // Result: ['Angela', 'Beatrice', 'Shaniqua', 'Sean'];

 const newUsers = users.filter(user => user.age >= 30 ).map(user => user.name)
 

 console.log(newUsers);