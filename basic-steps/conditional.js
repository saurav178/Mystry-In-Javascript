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

let check = prompt("enter a number")

console.log(
  check < 18
    ? "you are minor"
    : check < 60
    ? "you are eligible"
    : "please take rest"
);


let marks = Number(prompt("Enter your Mark"));

console.log(
  marks >= 90
    ? "Grade A"
    : marks >= 60
    ? "Grade B"
    : marks >= 30
    ? "Grade C"
    : "You are fail"
);