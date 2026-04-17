// class is a blue print of creating an object and we can create multiple object in a single class.

class Toyotacar{
    start(){
        console.log("start")
    }

    stop(){
        console.log("stop")
    }

    setBrand(brand){
        this.brand = brand;
    }
}

let fortuner = new Toyotacar()
fortuner.setBrand("Vip");