// let global = "i am global"

// function test(){
//     console.log(global)
// }
// test();

// console.log(global)


//not accessed outer of the block
// function greet(){
//     let gvar = "i am block level"
//     console.log(gvar)
// }
// greet()
//     console.log(gvar)


//LEXICAL SCOPE

function first(){
    const a = "namaste"

    function second(){
        let b = a

        function third(){
            let c =b

            function fourth(){
                let d = c
                console.log(d)
            }fourth()
        }third()
    }second()
}first()