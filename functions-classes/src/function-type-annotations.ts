function myFunc1(name: string, age: number): string {
    return `${name} (${age})`;
}

const myFunc2 = (a: number, b: number): number => {
    return a + b;
}

const myFunc3 = (name: string, age: number, address?: string, role: string = "user") => {
    return `${name} (${age})`;
}

const myFunc4 = (...array: number[]) => {
    console.log(array[0]);
}

myFunc4(0,1,2,3,4);


