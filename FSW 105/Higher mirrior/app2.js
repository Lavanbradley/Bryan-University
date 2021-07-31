function less(arr) {
  const result = arr.reduce(function (a, b) {
    return a + b;
  });
  return result;
}
console.log(less([1, 2, 3, 4, 5]));

function rock(arr){
  const result = arr.reduce(function(a,b){
    a - b;
  });
  return result;
}
console.log(rock(["ruu", "r", "ru"]));