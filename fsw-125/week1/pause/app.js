//1
// const sumFx = require('./math')

// console.log(sumFx(10,2))

//2
// const importObj = require('./math').greet;

// console.log(importObj())
// console.log(importObj.greet)
// console.log(importObj.greet())

//3
// const mathObj = require('./math')
// console.log(mathObj)
// console.log(mathObj.sum(2,5))
// console.log(mathObj.subtract(4,9))

//4

const GreetCFx = require('./math')
const greetr = new GreetCFx()

console.log(GreetCFx)
console.log(greetr)
console.log(greetr.greet())