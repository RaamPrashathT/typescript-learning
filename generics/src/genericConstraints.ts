interface Properties {
    length: number;
}

const property = <T extends Properties>(input: T): number => {
    return input.length;
}

console.log(property("string"));
console.log(property([1,2,3,4,5]));
// console.log(property(20));


function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3 };

console.log(getProperty(x, "a"))
