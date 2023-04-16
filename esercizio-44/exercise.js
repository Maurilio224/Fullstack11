const user = {
  id: 1,
  name: "John",
  age: 25,
};

localStorage.setItem("user",JSON.stringify(user));
const storage = localStorage.getItem("user");

console.log(JSON.parse(storage))