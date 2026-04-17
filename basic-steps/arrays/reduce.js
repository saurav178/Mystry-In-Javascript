let num = [1,2,4,5,6,8,7]

let total = num.reduce((acc,curr)=>{
    return acc+curr
},0)

console.log(total)

//in real scnerio
let cart = [
  { item: "shirt", price: 500 },
  { item: "pants", price: 1000 },
  { item: "shoes", price: 1500 }
];
let totals = cart.reduce((sum, product) => sum + product.price, 0);
console.log(totals);  // 3000