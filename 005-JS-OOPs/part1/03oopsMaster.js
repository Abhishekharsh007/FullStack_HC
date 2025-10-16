let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function () {
        return `${this.make} car got started in ${this.year}`;
    },
};

console.log(car);
console.log(car.start());

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let john = new Person("John Doe", 20);
console.log(`${john.name} ${john.age}`);

function Animal(type) {
    this.type = type
}

Animal.prototype.speak = function () {
    return `${this.type} make a sound`
}

Array.prototype.abhi = function () {
    return `Custon method ${this}`
}

let firstArray = [1, 2, 3];
console.log(firstArray.abhi());

let secondArray = [1, 2, 3, 4, 5, 6];
console.log(secondArray.abhi());



class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        return `${this.model} is a car from ${this.make}`
    }
}

class Car extends Vehicle {
    drive() {
        return `${this.make} : This is an inheritance example`;
    }
}

let myCar = new Car("Toyota", "Corolla");
console.log(myCar.start());
console.log(myCar.drive());


// Encapsulation

class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }

    getBalance() {
        return `$ ${this.#balance}`;
    }
}

let account = new BankAccount();
console.log(account.getBalance());


// Abstraction

class CoffeeMachine {
    start() {
        // call DB
        // filter value
        return `Starting the machine...`
    }

    brewCoffee() {
        // complex calculation
        return `Brewing coffee`
    }

    pressStartButton() {
        let msgOne = this.start();
        let msgTwo = this.brewCoffee();
        return `${msgOne} and ${msgTwo}`
    }
}

let myMachine = new CoffeeMachine();
console.log(myMachine.start());
console.log(myMachine.brewCoffee())
console.log(myMachine.pressStartButton());


// Polymorphism

class Bird {
    fly() {
        return `Flying...`;
    }
}

class Penguin extends Bird {
    fly() {
        return `Penguins can't fly`;
    }
}

let bird = new Bird();
let penguin = new Penguin();
console.log(bird.fly());
console.log(penguin.fly());


// static method

class Calculator { 
    static add(a, b) {
        return a + b;
    }
}

// ❌ let miniCalc = new Calculator();
// ❌ console.log(miniCalc.add(2, 3));

console.log(Calculator.add(2, 3));


// getters and setters

class Employee {
    #salary;

    constructor(name, salary) {
        if (salary < 0) {
            throw new Error("Salary cannot be negative");
        }
        this.name = name;
        this.#salary = salary;
    }

    get salary() {
        return `You are not allowed to see salary`;
    }

    set salary(value) {
        if (value < 0) {
            console.error("Invalid salary");
        }
        else {
            this._salary = value;
        }
    }
}

let emp = new Employee("Alice", 50000);
console.log(emp._salary);
