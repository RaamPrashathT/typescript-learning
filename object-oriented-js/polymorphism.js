// Method Overloading

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

class Square extends Shape {
    printShape () {
        console.log("This is a Square");
    }
}

const shapes = [new Circle(), new Square()];
shapes.forEach(shape => shape.printShape())

// Method Overloading(not native)

class X {
    add(x, y = undefined) {
        if(typeof y !== "undefined") {
            console.log(x + y);
        } else {
            console.log(x);
        }
    }
}

const x = new X();
x.add(20);
x.add(20,40);
