interface Box<T> {
    content: T
    description: string
}

const stringBox: Box<string> = {content:"This is a string box", description:"nothing special"};
console.log(stringBox.content)

const numberBox: Box<number> = {content:20, description:"nothing special"};
console.log(numberBox.content)

// lvl 2

interface ApiResponse<Data> {
    id: number;
    status: number;
    payload: Data;
}

interface User {
    id: number;
    name: string;
}

const apiResponse: ApiResponse<User> = {
    id: 1,
    status: 200,
    payload: { id: 1000, name: 'Alice' }
}

console.log(apiResponse)

// interface transformer

interface Transformer<T, U> {
    (input: T): U;
    description: string
}

const transformer: Transformer<string, number> = (str) => {return str.length}
transformer.description = "This is the transformer";

console.log(transformer("hello world"))

// default generic types

interface DefaultGenericInterface <T = string>{
    content: T
}

const defaultGenericInterface: DefaultGenericInterface = { content: "Hello world" };
const defaultGenericInterface1: DefaultGenericInterface<number> = { content: 5000 };

console.log(defaultGenericInterface);
console.log(defaultGenericInterface1);
