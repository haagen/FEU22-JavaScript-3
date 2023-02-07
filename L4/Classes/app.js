
class Animal {

    name = '';

    constructor(name) {
        console.log('In the Animal constructor(', name, ")");
        this.name = name;
    }

    printName() {
        console.log('My name is', this.name);
    }

}

class Dog extends Animal {

    breed = "";

    constructor(name, breed) {
        console.log("In the Dog constructor(", name, ",", breed, ")");
        super(name);
        this.breed = breed;

        this.printBreed = this.printBreed.bind(this);       // Binder detta objektet till denna metoden i detta objekt
    }

    printName() {
        console.log("In printName() in Dog");
        super.printName();
    }

    printBreed() {
        console.log("My breed is", this.breed);
    }

    setHandler() {
        document.getElementById("btn").addEventListener("click", this.printBreed);
    }
}

console.log("Starting Application");

let myAnimal = new Animal("Plutten");
//myAnimal.name = 'Boss';
myAnimal.printName();

let myDog = new Dog("Boss", "Border Collie");
//myDog.breed = 'Border Collie';
myDog.printName();
myDog.printBreed();
myDog.setHandler();



function getMySecretNumber() {
    //"use strict";
    this.secretNumber = 101;
    return this.secretNumber;
}

console.log("Call to getMySecretNumber() =", getMySecretNumber());
console.log("window.secretNumber =", window.secretNumber);

let myFunctionVariable = getMySecretNumber;
console.log("myFunctionVariable() =", myFunctionVariable());
