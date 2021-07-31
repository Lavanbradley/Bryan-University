console.log("Question 3B")
function capitalizeNames(arr){
  const result = arr.map(function(num){
    const result2 = num.slice(0,1).toUpperCase();
    console.log(result2);
    const result3 = num.slice(1);
    return result2 + result3;
  });
  return result;
};
console.log(capitalizeNames(['janak','van', 'carina']));


//2C
console.log("2C");
function stringConcat(arr) {
  console.log("inside");
  const result = arr.reduce(function (total, num) {
    console.log(total);
    console.log(num);
    return num.toString();
  });
  return result;
};

console.log(stringConcat([1, 2, 3]))

console.log("Question 2");

function stringConcat(arr) {
  const result = arr.reduce(function (num) {
    return num.toString();
  });
  return result;
}
console.log(stringConcat([1, 2, 3]));





console.log("Extra credit 1C");

function shoppingSpree(arr, item){
  const result = arr.reduce(function(total, item){
    return item.price + total;
  } , 0);
  return result;
} ;
console.log(shoppingSpree([
  {
    tittle: "Tesla model S",
    price: 90000
  },
  {
    tittle: "4 Carot diamond ring",
    price: 45000
  },
  {
    tittle: "Fancy hacy sack",
    price: 5
  },
  {
    tittle: "Gold fidgit spinner",
    price: 2000
  },
  {
    tittle: "S second Tesla model S",
    price: 90000
  }
]));




//Section D
console.log("Section D");
console.log("Question 1D");
function leastToGreatest(arr, a, b) {
  const result = arr.sort(function (num) {
    return a - b;
  });
  return result;
};
console.log(leastToGreatest([3, 1, 5, 2]));



function lengthSort(arr) {
  const result = arr.sort(function (num) {
    return num;
  })
  return result;
};
console.log(lengthSort(['dog', 'wolf', 'by', 'family', 'eaten']));
