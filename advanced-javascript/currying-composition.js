const myFunc = (a) => (b) => (c) => {
    return a + b + c;
}

console.log(myFunc(5)(10)(20));

function add (a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
console.log(add(5)(10)(20));

