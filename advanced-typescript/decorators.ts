function Report(constructor: Function) {
    console.log("Class created: " + constructor.name);
}

// 2. Use it
@Report
class User {
    constructor(public age: number) {}
}