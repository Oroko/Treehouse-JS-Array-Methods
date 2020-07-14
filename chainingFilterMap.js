const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];

// Result: [{name: 'Samir'}, {name: 'Shaniqua'}, {name:'Sean'}];


const newArray = userNames.filter(userName => userName.startsWith('S')).map(userName => ({ //you could also use charAt(0)
  Name: userName
}))

console.log(newArray)