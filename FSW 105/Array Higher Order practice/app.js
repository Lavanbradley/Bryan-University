


//Homework
//Section A
console.log("Section A");

//Question 1
console.log("Question 1");
let arr = [1, 2, 3, 6, 7, 8];
function fiveAndGreaterOnly(num) {
  return num > 5;
};
arr = arr.filter(fiveAndGreaterOnly);
console.log(arr);

//Question 2
console.log("Question 2");
let arr2 = [2, 3, 4, 5, 6, 7, 8];
function evensOnly(num2) {
  return (num2 % 2 == 0);
};
arr2 = arr2.filter(evensOnly);
console.log(arr2);



//Section B
console.log("Section B");
//Question 1
console.log("Question 1");
function doubleNumbers(x) {
  return x * 2;
}
let doubled = arr2.map(doubleNumbers);
console.log(doubled);

//Question 2
console.log("Question 2");
let numberToString = [9, 8, 7, 6, 5];
function stringItUp(y) {
  return y.toString();
}
let string = numberToString.map(stringItUp);
console.log(string);

//Question 3
console.log("Question 3");
let listOfNames = ["Janak", "Carina", "Bryan", "Van"];
function capitalizeNames(z) {
  return z.toUpperCase();
}
let upper = listOfNames.map(capitalizeNames);
console.log(upper);

//Section C
console.log("Section C");
//Question 1 
console.log("Question 1");
let adding = [2, 6, 4, 5];
function total(a, b) {
  return a + b;
};
let answer = adding.reduce(total);
console.log(answer);

//Question 2
console.log("Question 2");
let numberString = [1, 10, 6, 4, 3];
function stringConcat(d) {
  return d.toString();
};
let newNumberToString = numberString.map(stringConcat);
console.log(newNumberToString);

//Question 3
console.log("Question 3");


var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

//Extra Credit


console.log("Extra credit section C");
function flatten(arr6) {
  return arr6.reduce();
}
var arrays = [
  ["1", "2", "3"],
  [true],
  [4, 5, 6]
];
console.log(arrays.concat());



//Section D
console.log("Section D");
//Question 1
console.log("Question 1");
let highToLow = [10, 1, 8, 3, 6, 5];
function leastToGreatest(a, b) {
  return a - b;
};
highToLow.sort(leastToGreatest);
console.log(highToLow);

//Question 2
console.log("Question 2");
let lowToHigh = [10, 1, 8, 3, 6, 5];
function greatestToLeast(a, b) {
  return b - a;
};
lowToHigh.sort(greatestToLeast);
console.log(lowToHigh);

//Question 3
console.log("Question 3");
let lowString = ["Cars", "To", "Victor", "Insurance"];
function lengthSort(a, b) {
  return a.length - b.length;
};
lowString.sort(lengthSort);
console.log(lowString);

// Extra Credit
console.log("Section D Extra Credit");
let alpha = ["by", "dog", "eten", "family", "wolf"];
function alphabetical() {
  alpha.sort();
};
console.log(alpha);










