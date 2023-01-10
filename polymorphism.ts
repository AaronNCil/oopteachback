interface Greetable {
    greet(): void;
}

class Manager implements Greetable {
    name: string;
    age: number;
    private managerId: number;
    constructor(name: string, age: number, managerId: number) {
        this.name = name;
        this.age = age;
        this.managerId = managerId;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I am manager number ${this.managerId}.`);
    }
}

class Developer implements Greetable {
    name: string;
    age: number;
    private developerId: number;
    constructor(name: string, age: number, developerId: number) {
        this.name = name;
        this.age = age;
        this.developerId = developerId;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I am developer number ${this.developerId}.`);
    }
}

let team: Greetable[] = [];
team.push(new Manager("Bob", 45, 1));
team.push(new Developer("Alice", 25, 101));
team.forEach(member => member.greet());
/* Output: 
Hello, my name is Bob and I am 45 years old. I am manager number 1.
Hello, my name is Alice and I am 25 years old. I am developer number 101.
*/