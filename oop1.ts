
// Encapsulation: 
// Imagine you have a toy box with lots of different toys inside. 
// You can only play with the toys by opening the toy box and picking out the toy you want. 
// You can't just reach into the toy box and grab the toys without opening it first. 
// This is like how encapsulation works in code. We put our code into a special box (called a class or object) 
// and we can only use the code if we go through the box first.

// Example in Typescript:

class ToyBox {
    private toys: string[] = [];

    addToy(toy: string) {
        this.toys.push(toy);
    }

    getToy(index: number) {
        return this.toys[index];
    }
}

let myToyBox = new ToyBox();
myToyBox.addToy("train");
console.log(myToyBox.getToy(0)); // Output: "train"
console.log(myToyBox.toys); // Error: Property 'toys' is private and only accessible within the class 'ToyBox'



// Polymorphism: 
// Imagine you have a magic wand that can turn into different things depending on what spell you use. 
// The wand is always the wand, but it can be different things based on the spell you use. 
// This is like how polymorphism works in code. We can have different things that all do similar things, 
// but they may look different.

// Example in Typescript:

class Spell {
    cast(): void {}
}

class Fireball extends Spell {
    cast() {
        console.log("Casting Fireball!");
    }
}

class Heal extends Spell {
    cast() {
        console.log("Casting Heal!");
    }
}

let spell: Spell;
spell = new Fireball();
spell.cast(); // Output: "Casting Fireball!"
spell = new Heal();
spell.cast(); // Output: "Casting Heal!"




// Abstraction: Imagine you have a remote control that can turn on different things like the TV, DVD player, and game console. 
// You don't need to know how the TV, DVD player, and game console work, you just need to know how to use the remote control. 
// This is like how abstraction works in code. We can hide the complicated details and just show what is needed to use the code.

// Example in Typescript:

abstract class RemoteControl {
    turnOn(): void {}
}

class TV extends RemoteControl {
    turnOn() {
        console.log("TV is now on!");
    }
}

class DVDPlayer extends RemoteControl {
    turnOn() {
        console.log("DVD player is now on!");
    }
}

let device: RemoteControl;
device = new TV();
device.turnOn(); // Output: "TV is now on!"
device = new DVDPlayer();
device.turnOn(); // Output: "DVD player is now on!"