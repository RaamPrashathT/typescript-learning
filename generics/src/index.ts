// Move <T> to before the parameters
const myFunc = <T>(array: T[]) => {
    return array[0];
};

const arr = [1, 2, 3, 4, 5];
const value = myFunc(arr); // 'value' is inferred as number

const arr1 = ["one", "two", "three"];
const value1 = myFunc(arr1); // 'value1' is inferred as string