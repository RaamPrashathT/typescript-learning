type Greeting = {
    (name: string): void;
    (id: number): void;
}

const sayHello: Greeting = (input: string | number) => {
    if(typeof input === "string") {
        console.log(`Hello : ${input.toUpperCase()}`)
    } else {
        console.log(`Hello : ${input}`);
    }
}

sayHello("raam");
sayHello(20);