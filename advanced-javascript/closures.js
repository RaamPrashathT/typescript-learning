function outside1() {
    var input = "Value"
    function inside1() {
        console.log(input)
        var input2 = "val"
        console.log(input2)
    }
    inside1()
    var input2 = "val2"
    console.log(input2)
}

outside1()

// if block scope and var

if (Math.random() > 0.5) {
    var x = 1;
} else {
    var x = 2;
}
console.log(x);

// closure of environment

function makeFunc() {
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();

// training 1

function createCounter() {
    let count = 0;

    function increment() {
        count++;
        console.log(count);
    }

    function decrement() {
        count--;
        console.log(count);
    }
    return { increment, decrement };
}

const counter = createCounter();
const {increment, decrement} = counter
increment();
decrement();

// returning functions

function createCounter2() {
    let count = 0;
    return {
        increment: function() { return count++ },
        decrement: function() { return count-- }
    }
}

const counter = createCounter2();
console.log(counter.increment());
console.log(counter.decrement());