var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetable = ["carrot", "tomato", "pepper", "lettuce"];

function tryAgain() {
  console.log(vegetable.pop());
  console.log(fruit.shift());
  console.log(fruit.indexOf("orange"));
  console.log(fruit.push(fruit.indexOf("orange")));
  console.log(vegetable.length());
  const food = fruit.concat(vegetable);
  console.log(food);
  food.splice(4, 2);
  food.reverse();
  var x = food.toString();
  console.log(x);

}
console.log(tryAgain);
