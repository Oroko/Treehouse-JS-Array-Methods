const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];

    // Result: 4
const namesThatStartsWithG = names.reduce((count,name) => {
    if(name[0]=== "G"){
       return count + 1
    }else{
        return count
    }
},0);
console.log(namesThatStartsWithG);