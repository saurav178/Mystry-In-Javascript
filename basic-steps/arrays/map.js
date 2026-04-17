// it returns the new array

const arr = [1,2,4,5,7,8]
let sum = arr.map(add=>add+add)
console.log(sum)

// multiply

const arr1 = [1,2,4,5,7,8]
let mult = arr1.map(multiply=>multiply*4)
console.log(mult)

// in objects real word scnerio

const users = [
    {name:"hanuman", age:1000000000},
    {name:"saurav", age:25}
]

let names = users.map(user=>user.name)
console.log(names)