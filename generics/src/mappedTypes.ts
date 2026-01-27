// Convert all Properties to Optional

interface User {
    id: number;
    name: string;
    email: string;
}

type OptionalUser = {
    [K in keyof User]? : User[K];
};

// Mapping with modifiers

type AllOptionalUser = {
    id?: number;
    name?: string;
}

type ConvertToAllRequired<T> = {
    [K in keyof T]-?: T[K];
}

type User1 = ConvertToAllRequired<AllOptionalUser>;
const obj1: User1 = {
    id: 10,
    name: "Raam",
}
console.log(obj1);

// Converting all to readonly

type NoReadonly = {
    id: number;
    name: string;
}

type ConvertToAllReadonly<T> = {
    readonly [K in keyof T]: T[K];
}

type User2 = ConvertToAllReadonly<NoReadonly>;
const obj2: User2 = {
    id: 10,
    name: "Raam",
}

console.log(obj2)

// creating a getter type

interface Person {
    name: string;
    age: number;
}

type Getter<T> = {
    [K in keyof T as `get${Capitalize<string & K>}`]:() => T[K];
}

type personGetter = Getter<Person>;
const personGetterObj: personGetter = {
    getName: () => "Raam",
    getAge: () => 20
}

console.log(personGetterObj);