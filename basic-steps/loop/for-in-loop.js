//when we need both index and its value then that time we use the for-in loops

let arr1 = [
    {name: "saurav", age:"25"},
    {name: "hanuman", age:"10000000"}
]

for(let key in arr1){
    console.log(key, arr1[key])
}


const settings = {
  darkMode: true,
  notifications: false
};

for (let key in settings) {
  if (settings[key]) {
    console.log(key, "is enabled");
  }
}