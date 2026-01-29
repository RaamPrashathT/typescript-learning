function User (name, age) {
    this.name = name;
    this.age = age;
    this.introduction = () => {
        console.log(`Hello ${this.name} of age ${this.age}`);
    }
}

const user = new User("Raam", 21);
user.introduction();