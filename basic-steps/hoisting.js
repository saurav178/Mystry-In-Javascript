// 1> simple variable hoisted

// console.log(a)
// let a = "wowwww"


//2> function can hoisted

// lab()
// function lab(){
//     let m = "who r u?"
//     console.log(m)
// }


//3> scope chain

let a = "global";
function outer() {
  let b = "outer";

  function inner() {
    let c = "inner";

    // inner can access ALL of these:
    console.log(a);  // ✅ "global"
    console.log(b);  // ✅ "outer"
    console.log(c);  // ✅ "inner"
  }

  inner();
  console.log(c);   // ❌ ReferenceError (c is inner only)
}

outer();