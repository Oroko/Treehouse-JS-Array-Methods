const users = [{
  name: "Samir",
  age: 27
}, {
  name: "Angela",
  age: 33
}, {
  name: "Beatrice",
  age: 40
}];

const newUsersAge = users.map(user => {
  return `${user.name} is ${user.age} years old.`
})

console.log(newUsersAge)