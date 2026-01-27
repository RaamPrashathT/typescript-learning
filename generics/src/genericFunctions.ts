const myFunction = <T>(array: T[]): T | undefined => {
    return array[0];
}

const array1 = [1, 2, 3, 4, 5];
const firstElement1 = myFunction(array1)
console.log(firstElement1);

const array2 = ["one", "two", "three", "four", "five"];
const firstElement2 = myFunction(array2)
console.log(firstElement2);


// Multiple Type Variables

const merge = <T, U>(obj1: T, obj2: U): T & U => {
    return {...obj1, ...obj2}
}

const combined = merge({ name: "Alice" }, { age: 30 })
console.log(combined)