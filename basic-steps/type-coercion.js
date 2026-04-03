//javasceipt automatically converts one data to another data type when needed..
// there are two type of type-coercion 
//|
//| 1> implicit -----> automatically
//| 2> explicit -----> manually we have to do


let a = "4" + 2
console.log(typeof(a))
console.log(a)

let b = null
console.log(typeof(b))


console.log(null + "5")

console.log(undefined + "5")

console.log("5" + {})

console.log(typeof("5" + [1,2,3] ))




console.log(typeof("5" - 2))
console.log(true + true)
console.log(null+5)
console.log(undefined + 5)// NAN


//+ operator only converts to string but - opertor it actual do the calculation
