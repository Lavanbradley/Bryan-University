var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetable = ["carrot", "tomato", "pepper", "lettuce"];

//Requirement 1
console.log("Requirement 1");

console.log(vegetable.pop());
vegetable.forEach(function (fetch) {
  console.log("Vegetable: ", fetch);
});

//Requirement 2
console.log("Requirement 2");

console.log(fruit.shift());
fruit.forEach(function (fetch) {
  console.log("Fruit: ", fetch);
});
// Used forEach method because the array wouldn't show on terminal otherwise. Hope this runs as you expected! 

//Requirement 3
console.log("Requirement 3");

console.log(fruit.indexOf("orange"));


//Requirement 4
console.log("Requirement 4");

console.log(fruit.push(fruit.indexOf("orange")));
fruit.forEach(function (fetch) {
  console.log("Fruit: ", fetch);
});

//Requirement 5
console.log("Requirement 5");

console.log(vegetable.length);

//Requirement 6
console.log("Requirement 6");

console.log(vegetable.push(vegetable.length));
vegetable.forEach(function (fetch) {
  console.log("Vegetable: ", fetch);
});

//Requirement 7
console.log("Requirement 7");

const food = fruit.concat(vegetable);
console.log(food);

//Requirement 8
console.log("Requirement 8");

food.splice(4, 2);
food.forEach(function (fetch) {
  console.log("Food: ", fetch);
});

//Requirement 9
console.log("Requirement 9");

food.reverse();
food.forEach(function (fetch) {
  console.log("Food: ", fetch);
});

//Requirement 10
console.log("Requirement 10");

var x = food.toString();
console.log(x);



var van = ['hey', 'yo', 'add','bite', 'shane'];
van.shift()
console.log(van)












