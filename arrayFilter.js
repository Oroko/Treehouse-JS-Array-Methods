const users = [{ name: "Samir" }, { name: "Angela" }, { name: "Beatrice" }];

const removeSamir = users.filter((user) => user.name !== "Samir");

console.log(removeSamir);
