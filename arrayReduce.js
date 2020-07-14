const users = [{
  name: "Samir",
  age: 27
}, {
  name: "Angela",
  age: 33
}, {
  name: "Beatrice",
  age: 45
}];



const newObject = users.reduce((newObject, user) => {
  newObject[user.name] = user.age
  return newObject
}, {})

console.log(newObject)