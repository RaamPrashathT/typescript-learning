interface Validator {
    (message : string): boolean;
    version: number;
    checkLength(str: string, max: number): boolean;
}

const myValidator: Validator = (str) => {
    return str.length > 0;
}

myValidator.version = 1.2;

myValidator.checkLength = (str, max) => {
    return str.length <= max
}



console.log(myValidator("Hello")); // true
console.log(myValidator.checkLength("Hello", 3));
console.log(myValidator.version)
