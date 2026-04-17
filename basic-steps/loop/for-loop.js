const prompt = require("prompt-sync")();

// loop repeat a block of code until a condition is met, insted of writing the same code again and again.
//for loop

// for(let i = 1; i <=5; i++){
//     console.log(i)
// }

// //loop backward

// for(let i = 5; i>0; i--){
//     console.log(i)
// }

// // loop in array
// const fruit = ['apple', 'mango', 'banana']

// for(let item of fruit){
//     console.log(item)
// }

// const num = Number(prompt("enter a array"))
// for(let i=0; i<num.length; i++){
//     console.log(num[i])
// }

// //alternate for loop

// const fruits = ['apple', 'mango', 'banana']
// for(i=0; i>fruits.length; i++){
//     console.log(fruits[i])
// }

// let sum = 0

// for(let i=1 ; i<=10 ; i++){
//     sum += i
// }
// console.log(sum)

// sum of even numbers

let even = 0

for(i = 1; i<=10; i++){
    if(i%2==0){
        even += i
    }
}

console.log(even)