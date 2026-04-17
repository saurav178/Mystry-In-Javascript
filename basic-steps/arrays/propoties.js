//length

let fruits = ["apple", "banana", "mango"];
console.log(fruits.length)

let arr2 = [5,8,6,8,7]
console.log(arr2.length)

//pop-->remove the last of the item
//push --> add the item at last of the array
//shift --> remove the item at firdt of he array
//unshift --> add the item at first of the array
//length --> calculate the length of the array

//reverse
let name= "samrutisaurav ojha"
let rev = name.split('').reverse().join("")
console.log(rev)

//remove duplicates

let nums = [1, 2, 2, 3, 3, 4];
let unique = [...new Set(nums)];  // [1, 2, 3, 4] 

//find max 

let nums1 = [1, 2, 2, 3, 3, 4];
let max = Math.max(...nums1)

console.log(max)