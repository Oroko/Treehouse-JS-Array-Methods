const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin']; // Result: ['Selma', 'Sam', 'Sharon'];

const namesStartingWithS = [];

names.forEach(name => {
    if(name.startsWith('S')){
        namesStartingWithS.push(name);
    }

    // if(name.charAt(0) === 'S'){
    //     namesStartingWithS.push(name)
    // }
})

console.log(namesStartingWithS)
    