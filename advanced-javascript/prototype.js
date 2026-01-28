const animal = {
    eats: "eating",
    move() {
        console.log("animal is moving")
    }
}

const rabbit = {
    hops: true,
    __proto__: animal
}

console.log(rabbit.eats);
rabbit.move();

// constructor functions

function greet(name, age) {
    this.name
    this.age
}

greet.prototype.move = function() {
    console.log("greeting")
}

greet.prototype.move();


