
//Setting module exports to a function 
// module.exports = function (a,b) {
//   return a + b
// }


//Add function expressions as properties
// module.exports.greet = function(){
//   console.log('Hello world')
// }


//Set module.exports to an object of your own with its own properties

// const sum = (a, b) => {
//   return a + b
// }

// const subtract = (c, d) => {
//   return c - d
// }


// module.exports = {
//   sum,
//   subtract
// };



//Set module.exports equal to a function constructor

function Greetr(){
  this.greeting = 'Hello world',
  this.greet = function (){
    console.log(this.greeting)
  }
}

module.exports = Greetr