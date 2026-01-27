class ApiResponse<T> {
    data: T | null;
    error: string | null;
    status: number


    constructor(data: T | null, status: number, error: string | null = null) {
        this.data = data;
        this.error = error;
        this.status = status;
    }
}

interface User {
    id: number;
    name: string;
}

interface Product {
    pid: number;
    name: string;
}

const val = new ApiResponse<User>({id: 1, name:"Raam"}, 200)
const val1 = new ApiResponse<Product>({pid: 1, name:'Pencil'}, 500, "Server Failed" )
console.log(val)
console.log(val1)
