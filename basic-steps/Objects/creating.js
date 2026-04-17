// An object is collection of key value pairs. it lets you group releted data and functionality together.

const person = {
    name: "hanuman",
    age:30,
    isStudent: false
};


//A constructor is a special function used to create and initializes the objects.


//constructor function
function User(name, age) {
  this.name = name;
  this.age = age;
}

const u1 = new User("Bituna", 22);

console.log(u1.name, u1.age); // Bituna


//Accessing Properties

const user = { name: "Bob", age: 25 };

// Dot notation
console.log(user.name);     // "Bob"

// Bracket notation (useful for dynamic keys)
console.log(user["age"]);   // 25

const key = "name";
console.log(user[key]);     // "Bob"



// const obj = { x: 10 };

// obj.y = 20;        // Add
// obj.x = 99;        // Update
// delete obj.y;      // Delete


const scores = { math: 90, english: 85, science: 92 };

// for...in loop
// for (let key in scores) {
//   console.log(key, scores[key]);
// }

// for-of loop
for (let key of Object.keys(scores)) {
  console.log(key, scores[key]);
}



// destructuring
const { name, age } = { name: "Alice", age: 30 };
console.log(name); // "Alice"

// With rename
const { name: fullName } = { name: "Alice" };
console.log(fullName); // "Alice"

// With default value
const { city = "Unknown" } = { name: "Alice" };
console.log(city); // "Unknown"


//...spread and merge
const a = { x: 1, y: 2 };
const b = { y: 99, z: 3 };

const merged = { ...a, ...b }; // { x: 1, y: 99, z: 3 }
const copy   = { ...a };       // shallow copy
