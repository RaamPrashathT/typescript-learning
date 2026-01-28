class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    getname() { return this.name; }
    setName(name) { this.name = name; }
    getAge() { return this.age; }
    setAge(age) { this.age = age; }
    getEmail() { return this.email; }
    setEmail(email) { this.email = email; }

    displayUser() {
        console.log(`Displaying user Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`);
    }
}

class User1 {
    #name
    constructor(name) {
        this.#name = name;
    }

    get name() { return this.#name; }
    set name(name) { this.#name = name; }
}

const user = new User1("Raam");
console.log(user.name);
user.name = "Mouniesh";
console.log(user.name);