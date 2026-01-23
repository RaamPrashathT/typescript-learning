interface User {
    id: number;
    username: string;
    email: string;
    age?: number;
    isActive: boolean;
    role: "admin" | "user";
}

const users: User[] = [
    {
        id: 1,
        username: "raam",
        email: "raam@mail.com",
        age: 22,
        isActive: true,
        role: "admin"
    },
    {
        id: 2,
        username: "alex",
        email: "alex@mail.com",
        isActive: false,
        role: "user"
    },
    {
        id: 3,
        username: "maria",
        email: "maria@mail.com",
        age: 28,
        isActive: true,
        role: "user"
    }
];

const getActiveUsers = (): User[] => {
    return users.filter((user) => user.isActive);
}

const findUserByUsername = (username : string): User | undefined => {
    return users.find(user => user.username === username)
}

const printUserInfo = (username: string):void => {
    const user: User | undefined = findUserByUsername(username)

    if(user === undefined) {
        console.log("No such user found")
    } else {
        console.log([
            "User found:",
            `Username: ${user.username}`,
            `Email: ${user.email}`,
            `Age: ${user.age ?? "Not Specified"}`,
            `Active: ${user.role}`
        ].join("\n"));

    }
}

const deactivateUser = (username: string): void => {
    const user: User | undefined = findUserByUsername(username)
    if(user === undefined) {
        console.log("No such user found")
    } else {
        user.isActive = false;
        console.log(`User ${username} deactivated!`)
    }
}

console.log(getActiveUsers());
printUserInfo("raam")
printUserInfo("some dude")
deactivateUser("alex")