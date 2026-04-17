const prompt = require("prompt-sync")();

// let age = prompt("enter your age")
// if(age>=18 && age<60){
//     console.log("hey you are elgiable")

// }else if(age>=60){
//     console.log("please take rest you can't")
// }else{
//     console.log("your minor so don't come")
// }

// ternary

// let check = prompt("enter a number")

// console.log(
//   check < 18
//     ? "you are minor"
//     : check < 60
//     ? "you are eligible"
//     : "please take rest"
// );


// let marks = Number(prompt("Enter your Mark"));

// console.log(
//   marks >= 90
//     ? "Grade A"
//     : marks >= 60
//     ? "Grade B"
//     : marks >= 30
//     ? "Grade C"
//     : "You are fail"
// );


// let val = Number (prompt("enter a number"))

// if(val % 2 === 0){
//   console.log("yes you are typed a even number")
// }else{
//   console.log(val, "your number is odd")
// }



// let test = Number(prompt("enter a number to check even or odd"))

// let cal = test % 2 === 0 ?  `${test} yes this is the even`
// :  `${test} You are right odd number`

// console.log(cal)



// let condition = Number(prompt("enter a number to check"))

// let evaluate = condition > 0 && condition % 2 ===0 ? `${condition} is positive even`
// : condition < 0 && condition % 2 === 0 ? `${condition} is negative even`
// : condition < 0 && condition % 2 !==0 ? `${condition} is negative odd number`
// : condition > 0 && condition % 2 !==0 ? `${condition} is possetive odd number`
// : condition === 0 ? `you are typing ${condition}`
// :`what is this`

// console.log(evaluate)


// take largest 3 nos and check the bigger one

// let A = Number(prompt("enter first number"))
// let B = Number(prompt("enter second number"))
// let C = Number(prompt("enter third number"))

// if(A>B && A>C){
//   console.log(A, "is greater")
// }else if(B>A && B>C){
//   console.log(B, "is greater")
// }else if(C>A && C>B){
//   console.log(C, "is greater")
// }else{
//   console.log("something went wrong")
// }


let username = prompt("enter your username")
let password = prompt("enter your password")

if(username === "" && password === ""){
  console.log("please enter the creditional")
}else if(username === "admin" && password ==="1234"){
  console.log("login successful")
}else if(username !== "admin"){
  console.log("invalid username")
}else if(password !== "1234"){
  console.log("invalid password")
}
