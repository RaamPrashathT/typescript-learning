//
// console.log(sayHi)
//
//
// function sayHi() {
//     console.log('hi')
// }
//
// function sayHi() {
//     console.log('hello')
// }
//
// var sayHi = 20
// console.log(sayHi)

var a = 1;
defineA();

function defineA() {
    if (!a) {
        var a = 20;
    }
    console.log(a);
}