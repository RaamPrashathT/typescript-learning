type Success = {
    status: "success",
    data: string
}

type Failed = {
    status: "failed",
    message: string
}

type Response = Success | Failed

const myFunc = (response: Response) => {
    if(response.status == "success") {
        console.log(response.data)
    } else {
        console.log(response.message)
    }
}

const val1: Success = {
    status: "success",
    data: "data",
}
myFunc(val1);

// switch

type Shape = { kind: "circle"; radius: number } | { kind: "square"; side: number } | { kind: "rect"; width: number; height: number }

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2
        case "square":
            return shape.side * shape.side
        case "rect":
            return shape.width * shape.height
    }
}

const shape: Shape = {
    kind: "circle",
    radius: 5,
}

console.log(getArea(shape))