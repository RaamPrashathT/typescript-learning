// Partial

interface User {
    id: string;
    name: string;
    email: string;
}

const updateUser = (id: number, changes: Partial<User>) => {
    console.log(id, changes);
}

updateUser(1, {name: "John"});

// Required

interface User1 {
    id: string;
    name?: string;
    email?: string;
}

const config : Required<User1> = {
    id: "01",
    name: "Raam",
    email: "raamthiruna@gmail.com"
}

interface Ticket {
    id: string;
    trainName: string;
    trainDestination: string;
}

const pickedTrain: Pick<Ticket, "id"> = {
    id: "T01"
}