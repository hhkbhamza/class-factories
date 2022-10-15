class Hamster {
    constructor(name) {
        this.owner = ""
        this.name = name
        this.price = 15
    }
    wheelRun() {
        console.log("squeak squeak")
    }
    eatFood() {
        console.log("nibble nibble")
    }
    getPrice() {
        return this.price
    }
}
const h = new Hamster("Tom")
h.wheelRun()
h.eatFood()
console.log(h.getPrice())
console.log(h)


class Person {
    constructor(name) {
        this.name = name
        this.age = 0
        this.height = 0
        this.weight = 0
        this.mood = 0
        this.hamsters = []
        this.bankAccount = 0
    }
    getName() {
        return this.name
    }
    getAge() {
        return this.age
    }
    getWeight() {
        return this.weight
    }
    greet() {
        console.log("Hello " + this.name)
    }
    eat() {
        this.weight++
        this.mood++
    }
    exercise() {
        this.weight--
    }
    ageUp() {
        this.age++
        this.height++
        this.weight++
        this.mood--
        this.bankAccount += 10
    }
    buyHamster(pet) {
        p.hamsters.push(pet)
        this.mood += 10
        this.bankAccount = this.bankAccount -= pet.getPrice()
    }
}
const p = new Person("Henry")
p.buyHamster(h)
console.log(p)


const timmy = new Person("Timmy")