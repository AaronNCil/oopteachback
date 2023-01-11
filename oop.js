var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Inheriance class
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
var person1 = new Person("John Smith", 30);
person1.greet(); // Output: "Hello, my name is John Smith and I am 30 years old."
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, salary) {
        var _this = _super.call(this, name, age) || this;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old. I earn $").concat(this.salary, " per year."));
    };
    return Employee;
}(Person));
var employee1 = new Employee("Jane Doe", 35, 50000);
employee1.greet(); // Output: "Hello, my name is Jane Doe and I am 35 years old. I earn $50000 per year."
//Encapsulation
// class EncapsulatedPerson {
//   private name: string;
//   private age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   public greet() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   }
// }
// let encapsulatedPerson = new EncapsulatedPerson("John Smith", 30);
// encapsulatedPerson.greet(); // Output: "Hello, my name is John Smith and I am 30 years old."
// console.log(encapsulatedPerson.name); // Error: Property 'name' is private and only accessible within class 'EncapsulatedPerson'.
// console.log(encapsulatedPerson.age); // Error: Property 'age' is private and only accessible within class 'EncapsulatedPerson'.
