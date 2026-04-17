class bike {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    start() {
        console.log(this.name + " bike started which price is " + this.price)
    }
}

class bike2 extends bike {
    constructor(name, price, topspeed) {
        super(name, price)
        this.topspeed = topspeed
    }

    details() {
        console.log(this.name + " top speed is " + this.topspeed)
    }
}

let first_bike = new bike("Yamaha", "800000")
let second_bike = new bike2("Kawasaki", "900000", "300km/h")

first_bike.start()
second_bike.details()