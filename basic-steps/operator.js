// //1 Arithimatic 
// let a = 10, b = 3;

// console.log(
// a + b, 
// a - b  ,
// a * b  , 
// a / b  ,
// a % b  , 
// a ** b ) // 1000 =>10*10*10 exponentiation

// //Real use of % (modulus):
// // Check even or odd ← very common interview question!
// // num % 2 === 0   // even
// // num % 2 !== 0   // odd


// //2. 📈 Increment & Decrement

// let x = 5;
// console.log(x++) //5
// console.log(x)   //6

// console.log(++x) //7

// console.log(x--) //7
// console.log(x)   //6

// console.log(--x) //5

// //3. 🔗 Assignment Operators

// let y = 10;

// y += 5   // x = x + 5 → 15
// y -= 3   // x = x - 3 → 12
// y *= 2   // x = x * 2 → 24
// y /= 4   // x = x / 4 → 6
// y %= 4   // x = x % 4 → 2
// y **= 3  // x = x ** 3 → 8



// //4. ⚖️ Comparison Operators
// 5 == "5"    // true  ← loose (coercion) ⚠️
// 5 === "5"   // false ← strict ✅ always use this!
// 5 != "5"    // false
// 5 !== "5"   // true  ✅

// 5 > 3       // true
// 5 < 3       // false
// 5 >= 5      // true
// 5 <= 4      // false


// // 5. 🧠 Logical Operators ← Very Important!

// // AND &&  → both must be true
// true && true    // true
// true && false   // false

// // OR ||   → at least one must be true
// true || false   // true
// false || false  // false

// // NOT !   → flips the value
// !true           // false
// !false          // true
// !!value         // converts to boolean (double NOT trick)


// //7. ❓ Ternary Operator ← Used Everywhere!

// // condition ? valueIfTrue : valueIfFalse
// let age = 20;
// let result = age >= 18 ? "Adult" : "Minor";
// // "Adult" ✅

// // Real world use in React/UI:
// let label = isLoggedIn ? "Logout" : "Login";
// let color = score > 50 ? "green" : "red";

// // Nested ternary (keep it simple!)
// let grade = score >= 90 ? "A"
//           : score >= 70 ? "B"
//           : score >= 50 ? "C"
//           : "F";





//important

// Nullish Coalescing ??

const user = {}
console.log(user?.address?.city ?? "no city");



// spread operator

let num = [1,2,3,5,6,8,7]
let num2 = [...num, 10,11,12,13]
console.log(num2)

let obj1 = {a:1, b:2, c:5}
let obj2 = {...obj1, d:9}
console.log(obj2)


// rest operator

const supor = (...val) => {
  const result = val.reduce((a, b) => a + b, 0);
  console.log(result);
};

supor(1, 2, 3, 4); // 10