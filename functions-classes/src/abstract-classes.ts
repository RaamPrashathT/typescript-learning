abstract class Shape {
    constructor(public name: string){}

    display(): void {
        console.log(this.name);
    }

    abstract getArea(): number;
}

class Circle extends Shape {
    constructor(public radius: number) {
        super("Circle");
    }

    getArea() : number {
        return Math.PI * this.radius**2;
    }
}

class Square extends Shape {
    constructor(public side: number) {
        super("Square");
    }

    getArea() : number {
        return this.side**2;
    }
}

const myCircle = new Circle(5)
console.log("Shape name: ", myCircle.name)
console.log("Shape radius: ", myCircle.radius)
console.log("Shape area: ", myCircle.getArea())

const mySquare = new Square(5)
console.log("Shape name: ", mySquare.name)
console.log("Shape side: ", mySquare.side)
console.log("Shape area: ", mySquare.getArea())