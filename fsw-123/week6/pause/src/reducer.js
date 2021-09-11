const nums = [2,4,6]
const initialState =0;

function reducer (state, value){
  return state + value
}


/*
Takes a collection and return a single value
reducer returns :
0 + 2
(0 +2) + 4
(2 + 4) + 6
12
*/

const total = nums.reduce(reducer, initialState)
console.log(total);