//// Returns a NEW array with matching elements

let nums = [1, 2, 3, 4, 5, 6];

let check = nums.filter(num=> num%2===0);
console.log(check)

//check age>18
let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 }
];

let eligible = users.filter(user=> user.age>=18)
.map(user => user.name)
console.log(eligible)


