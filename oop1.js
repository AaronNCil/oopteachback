// Encapsulation: 
// Imagine you have a toy box with lots of different toys inside. 
// You can only play with the toys by opening the toy box and picking out the toy you want. 
// You can't just reach into the toy box and grab the toys without opening it first. 
// This is like how encapsulation works in code. We put our code into a special box (called a class or object) 
// and we can only use the code if we go through the box first.
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
// Example in Typescript:
var ToyBox = /** @class */ (function () {
    function ToyBox() {
        this.toys = [];
    }
    ToyBox.prototype.addToy = function (toy) {
        this.toys.push(toy);
    };
    ToyBox.prototype.getToy = function (index) {
        return this.toys[index];
    };
    return ToyBox;
}());
var myToyBox = new ToyBox();
myToyBox.addToy("train");
console.log(myToyBox.getToy(0)); // Output: "train"
console.log(myToyBox.toys); // Error: Property 'toys' is private and only accessible within the class 'ToyBox'
// Polymorphism: 
// Imagine you have a magic wand that can turn into different things depending on what spell you use. 
// The wand is always the wand, but it can be different things based on the spell you use. 
// This is like how polymorphism works in code. We can have different things that all do similar things, 
// but they may look different.
// Example in Typescript:
var Spell = /** @class */ (function () {
    function Spell() {
    }
    Spell.prototype.cast = function () { };
    return Spell;
}());
var Fireball = /** @class */ (function (_super) {
    __extends(Fireball, _super);
    function Fireball() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fireball.prototype.cast = function () {
        console.log("Casting Fireball!");
    };
    return Fireball;
}(Spell));
var Heal = /** @class */ (function (_super) {
    __extends(Heal, _super);
    function Heal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Heal.prototype.cast = function () {
        console.log("Casting Heal!");
    };
    return Heal;
}(Spell));
var spell;
spell = new Fireball();
spell.cast(); // Output: "Casting Fireball!"
spell = new Heal();
spell.cast(); // Output: "Casting Heal!"
// Abstraction: Imagine you have a remote control that can turn on different things like the TV, DVD player, and game console. 
// You don't need to know how the TV, DVD player, and game console work, you just need to know how to use the remote control. 
// This is like how abstraction works in code. We can hide the complicated details and just show what is needed to use the code.
// Example in Typescript:
var RemoteControl = /** @class */ (function () {
    function RemoteControl() {
    }
    RemoteControl.prototype.turnOn = function () { };
    return RemoteControl;
}());
var TV = /** @class */ (function (_super) {
    __extends(TV, _super);
    function TV() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TV.prototype.turnOn = function () {
        console.log("TV is now on!");
    };
    return TV;
}(RemoteControl));
var DVDPlayer = /** @class */ (function (_super) {
    __extends(DVDPlayer, _super);
    function DVDPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DVDPlayer.prototype.turnOn = function () {
        console.log("DVD player is now on!");
    };
    return DVDPlayer;
}(RemoteControl));
var device;
device = new TV();
device.turnOn(); // Output: "TV is now on!"
device = new DVDPlayer();
device.turnOn(); // Output: "DVD player is now on!"
