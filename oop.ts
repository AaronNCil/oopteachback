//Inheriance class
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

let person1 = new Person("John Smith", 30);
person1.greet(); // Output: "Hello, my name is John Smith and I am 30 years old."


class Employee extends Person {
  salary: number;

  constructor(name: string, age: number, salary: number) {
    super(name, age);
    this.salary = salary;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I earn $${this.salary} per year.`);
  }
}

let employee1 = new Employee("Jane Doe", 35, 50000);
employee1.greet(); // Output: "Hello, my name is Jane Doe and I am 35 years old. I earn $50000 per year."







  //Encapsulation

  class EncapsulatedPerson {
    private name: string;
    private age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    public greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  let encapsulatedPerson = new EncapsulatedPerson("John Smith", 30);
  encapsulatedPerson.greet(); // Output: "Hello, my name is John Smith and I am 30 years old."
  console.log(encapsulatedPerson.name); // Error: Property 'name' is private and only accessible within class 'EncapsulatedPerson'.
  console.log(encapsulatedPerson.age); // Error: Property 'age' is private and only accessible within class 'EncapsulatedPerson'.
