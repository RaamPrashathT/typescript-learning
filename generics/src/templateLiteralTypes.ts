type World = "World";

type Greeting = `Hello ${World}!`

const greeting: Greeting = "Hello World!"
console.log(greeting);

// union combination

type Color = "red" | "green" | "blue";
type Vehicle = "car" | "bus" | "van";

type ColouredVehicle = `This is a ${Color} ${Vehicle}!`

const colouredVehicle : ColouredVehicle = "This is a red van!"
console.log(colouredVehicle);