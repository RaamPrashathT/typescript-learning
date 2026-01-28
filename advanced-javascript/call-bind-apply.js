//call

const person = {
    name: "raam",
    age: 35,
}

function Greeting(greeting) {
    console.log(`${greeting} ${this.name} of age ${this.age}`)
}

Greeting.call(person, "hello")

// lvl2

const person1 = {
    myFunc: function (value) {
        console.log(`${value} ${this.name} of age ${this.age}`)
    }
}

const person2 = {
    name: "raam",
    age: 35,
}

person1.myFunc.call(person2, "hello")