// if/ else if/ else

// let age = Number(prompt("enter your age"))

// if (age<0){
//     // console.log("invalid age")
//     result = "invalid age"
// }

// else if (age>=18){
//     // console.log("adult and able to driving")
//     result = "adult and able to driving"

// }
// else{
//     // console.log("nikal")

//     result = "Nikal"
// }

// document.body.innerText = result;



function checkAge() {
    let age = Number(document.getElementById("ageInput").value);
    let result = "";

    if (isNaN(age) || age <= 0) {
        result = "Invalid age";
    } 
    else if (age >= 18) {
        result = "Adult and able to drive";
    } 
    else {
        result = "Minor";
    }

    document.getElementById("result").innerText = result;
}