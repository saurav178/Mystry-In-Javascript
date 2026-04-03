// A function is a resuable block of code that perform on a specific task..
  
function greet(){
    console.log("hello")
}greet()


// function declaration
function add (a,b){
    console.log(a+b)
}add(5,6)


//anonymous function

const square = function(n,m){
    console.log(n*m)
}
square(5,6)


setTimeout(function(){
    console.log("runs after 5 second")
},5000);

setTimeout(function(){
    console.log("runs after 3 sec")
},3000)


//Arrow function

const addition = (a,b)=>{

    console.log(`le beta add kardia`,a+b)

}
addition(5,6)

const multiplication = (m,n) =>{
    console.log("le multiply kar diya", m*n)
}

multiplication(8,5)

// ✅ Can be stored in object
const calculator = {
  add: function(a, b) { console.log( a + b); },
  sub: function(a, b) {console.log( a - b); }
};
calculator.add(5, 3);
calculator.sub(5, 3);



const div = (s,t) => s/t
console.log(div(10,2))