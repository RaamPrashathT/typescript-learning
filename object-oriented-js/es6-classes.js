class User {
    name
    age

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName = () => this.name;
    setName = (name) => { this.name = name; }
    getAge = () => this.age;
    setAge = (age) => { this.age = age; }

    showAge = function() {
        console.log(`Showing age: ${this.age}`);
    }

    showName() {
        console.log(`Showing ${this.name}`);
    }
}

const user = new User("Raam", 21);
console.log(user.getName());
console.log(user.getAge());
user.showName();
user.showAge();

// static keyword

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static printVersion () {
        console.log("1.0.0");
    }

    static role = "ADMIN";

    static getRole () {
        return this.role;
    }
}

const person = new Person("Raam", 21);
Person.printVersion()
console.log(Person.getRole());