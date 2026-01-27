type Greeting = {
    (name: string): void;
    (id: number): void;
    language: string;
}

const sayHello: Greeting = (input: string | number) => {
    if(typeof input === "string") {
        console.log(`Hello : ${input.toUpperCase()}`)

    } else {
        console.log(`Hello : ${input}`);
    }
}

sayHello.language = "en";

sayHello("raam");
console.log(sayHello.language);
sayHello(20);