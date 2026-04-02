let count = 0

const countbox = document.getElementById("count")
const incbtn = document.getElementById("inc")
const decbtn = document.getElementById("dec")
const resetbtn = document.getElementById("reset")


function updateui(){
    countbox.textContent = count
}

incbtn.addEventListener("click", ()=>{
    count++;
updateui()
})

decbtn.addEventListener("click", ()=>{
count--;
updateui()
})

resetbtn.addEventListener("click", ()=>{
    count = 0
updateui()
})
