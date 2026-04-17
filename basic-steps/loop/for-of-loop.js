// it loops over values of an iterable(string, objects)

let fruits = ['apple','orange','mango']

for(let fruit of fruits){
    console.log(fruit)
}

// in numbers

let num1 = [5,6,5,7,8,9,3]

for(let val of num1){
    console.log(val)
}

// in arrays of objects

const users = [
    {name:"saurav", age:20},
    {name:'shyam', age:40}
]
for(let user of users){
    console.log(user.name, user.age)
}

let name = "saurav"

for(let ch of name){
    console.log(ch)
}