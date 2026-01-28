class Animal {
    name
    #isNotASpecificAnimal = true
    _isAnimal = true

    constructor(name) {
        this.name = name;
    }

    animalType() {
        console.log(`Animal Type: ${this.name}`);
    }

    printProtectedVariable(){
        console.log(`Is this a protected variable?: ${this.#isNotASpecificAnimal}`);
    }
}

class Goose extends Animal {
    constructor(name) {
        super(name);
    }

    gooseMethod() {
        console.log(`This method is only for Goose class`);
    }


}

const goose = new Goose("Larry");
goose.animalType();
goose.gooseMethod()
console.log(goose._isAnimal)

const animal = new Animal("Jeff");
animal.animalType();
animal.printProtectedVariable()

