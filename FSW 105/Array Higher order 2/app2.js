function ofAge(arr) {
  const result = arr.filter(function (num) {
    if (num.age > 18);
    return num.name;
  });
  return result;
};
console.log(ofAge([
  {
    name: "van",
    age: 20
  },
  {
    name: "dog",
    age: 12
  }
]));



console.log("Question 3C")
function totalVotes(arr) {
  const result = arr.filter(function(num){
    return num.voted == true;
  })
  return result;
}
console.log(totalVotes([
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
]));