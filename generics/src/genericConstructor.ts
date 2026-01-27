interface Property {
    toUpperCase(): string
}

const property = <T extends Property>(val: T): T => {
    console.log(val);
    return val
}

property("hello");

