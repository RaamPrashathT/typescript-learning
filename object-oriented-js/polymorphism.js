// Method Overriding

class Shape {
    printShape () {
        console.log("This is a Shape");
    }
}

class Circle extends Shape {
    printShape () {
        console.log("This is a Circle");
    }
}

class Unknown extends Shape {
    printShape (shape) {
        console.log("This is a ", shape);
    }
}

const unknown = new Unknown()
unknown.printShape("rectangle")


// Method Overloading(not native)

class X {
    add(x, y = undefined) {
        if (y === undefined) {
            console.log(x);
        } else {
            console.log(x + y);
        }
    }
}

const x = new X();
x.add(20);
x.add(20,40);
