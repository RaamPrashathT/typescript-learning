interface User {
    id: number;
    username: string;
    email: string;
    age?: number;
    isActive: boolean;
    role: "admin" | "user";
}

let users: User[] = [
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

const getActiveUsers = (users : User[]): User[] => {
    return users.filter((user) => user.isActive);
}

const findUserByUsername = (username : string, users : User[]): User | undefined => {
    return users.find(user => user.username === username)
}

const printUserInfo = (username: string, users: User[]):void => {
    const user: User | undefined = findUserByUsername(username, users);

    if(user === undefined) {
        console.log("No such user found")
    } else {
        console.log([
            "User found:",
            `Username: ${user.username}`,
            `Email: ${user.email}`,
            `Age: ${user.age ?? "Not Specified"}`,
            `Active: ${user.isActive ? "Active" : "Not Active"}`
        ].join("\n"));

    }
}

const deactivateUser = (username : string, users: User[]): User[] => {
    let found = false;

    const updatedUsers = users.map(user => {
        if(user.username === username) {
            found = true;
            return {...user, isActive: false};
        }
        return user;
    })

    if(!found) {
        console.log("No such user found");
        return users;
    }

    return updatedUsers;
}

console.log(getActiveUsers(users));
users = deactivateUser("raam", users)
printUserInfo("raam", users)