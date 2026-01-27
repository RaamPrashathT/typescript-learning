type IsString<T> = T extends string? "yes" : "no";

type A = IsString<"hello">;
type B = IsString<20>;

// lvl 2:

type Payload<T> = T extends "numeric" ? number : string;

const getPayLoad = <T extends "numeric" | "text">(format: T): Payload<T> => {
    return (format === "numeric" ? 42 : "some text") as Payload<T>;
}

console.log(getPayLoad("numeric"));
console.log(getPayLoad("text"));