abstract class Vehicle {
    protected make: string;
    protected model: string;
    abstract startEngine(): void;
}

class Car extends Vehicle {
    startEngine() {
        console.log("Vroom vroom!");
    }
}

let car = new Car(); // Error:  Cannot create an instance of an abstract class.
console.log(car.startEngine())