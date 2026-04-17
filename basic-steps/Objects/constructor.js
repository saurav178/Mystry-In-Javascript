// A constructor is a function that runs when an object is created, and it sets up the initial data.


class Toyotacar{
    constructor(brand, milage){
        this.brand = brand
        this.milage = milage
    }
    start(){
        console.log("start")
    }

    stop(){
        console.log("stop")
    }

    
}

let fortuner = new Toyotacar("VIP", 15)
let lexus = new Toyotacar("VIP", 18 )

