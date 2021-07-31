//Section A
console.log("Section A");
console.log("Question 1A");
function fiveAndGreater(arr) {
  const result = arr.filter(function (num) {
    if (num >= 5)
      return num;
  });
  return result;
}
console.log(fiveAndGreater([3, 6, 8, 2]));

console.log("Question 2A");

function evensOnly(arr) {
  const result = arr.filter(function (num) {
    if (num % 2 == 0)
      return num;
  });
  return result;
}
console.log(evensOnly([2, 5, 100]));

console.log("Extra Credit 1A");

function ofAge(arr) {
  const result = arr.filter(function (num) {
    if (num.age > 18) {
      return num.name;
    }

  });
  return result;
};
console.log(ofAge([
  {
    name: "Angelina Jolie",
    age: 80
  },
  {
    name: "Eric Jones",
    age: 2
  },
  {
    name: "Paris Hilton",
    age: 5
  },
  {
    name: "Kanye West",
    age: 16
  },
  {
    name: "Bob Ziroll",
    age: 100
  }
]));



//Section B
console.log("Section B");

console.log("Question 1B");
function doubleNumbers(arr) {
  const result = arr.map(function (num) {
    return num * 2;
  })
  return result;
};
console.log(doubleNumbers([2, 5, 100]));

console.log("Question 2B");

function stringItUp(arr) {
  const result = arr.map(function (num) {
    return num.toString();
  });
  return result;
};
console.log(stringItUp([2, 4, 6, 8]));

console.log("Question 3B")
function capitalizeNames(arr) {
  const result = arr.map(function (num) {
    const result2 = num.slice(0, 1).toUpperCase();
    const result3 = num.slice(1);
    return result2 + result3;
  });
  return result;
};
console.log(capitalizeNames(['janak', 'van', 'carina']));


console.log("Extra Credit 1B");

function namesOnly(arr) {
  const result = arr.map(function (num) {
    return num.name;
  });
  return result;
};
console.log(namesOnly([
  {
    name: "Angelina Jolie",
    age: 80
  },
  {
    name: "Eric Jones",
    age: 2
  },
  {
    name: "Paris Hilton",
    age: 5
  },
  {
    name: "Kanye West",
    age: 16
  },
  {
    name: "Bob Ziroll",
    age: 100
  }
]));

console.log("Extra credit 2B");
function makeStrings(arr) {
  const result = arr.map(function (num) {
    if (num.age > 18) {
      return num.name + " can go to The Matrix";
    } else if (num.age < 18) {
      return num.name + " is under age!!";
    }
  });
  return result;
};
console.log(makeStrings([
  {
    name: "Angelina Jolie",
    age: 80
  },
  {
    name: "Eric Jones",
    age: 2
  },
  {
    name: "Paris Hilton",
    age: 5
  },
  {
    name: "Kanye West",
    age: 16
  },
  {
    name: "Bob Ziroll",
    age: 100
  }
]));


//Section C
console.log("Section C");

console.log("Question 1C");
function total(arr) {
  const result = arr.reduce(function (num, finalAddition) {
    return finalAddition = finalAddition + num;
  });
  return result;
};

console.log(total([1, 2, 3, 4]));

console.log("Question 2C");
function stringConcat(arr) {
  const result = arr.reduce(function (total, num) {
    return total.concat(num.toString());
  }, "");
  return result
};
console.log([1, 2, 3]);


console.log("Question 3C")
function totalVotes(arr) {
  const result = arr.filter(function (num) {
    return num.voted == true;
  })
  return result;
}
console.log(totalVotes([
  { name: 'Bob', age: 30, voted: true },
  { name: 'Jake', age: 32, voted: true },
  { name: 'Kate', age: 25, voted: false },
  { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true },
  { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true },
  { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false },
  { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true },
  { name: 'Zack', age: 19, voted: false }
]));

console.log(stringConcat([1, 2, 3]))

console.log("Extra credit 1C");

function shoppingSpree(arr, item) {
  const result = arr.reduce(function (total, item) {
    return item.price + total;
  }, 0);
  return result;
};
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

console.log("Extra credit 2C");

function flatten(arr) {
  const result = arr.reduce(function (num) {
    return arr.flat(2);
  });
  return result;
};
console.log(flatten([
  ["1", "2", "3"],
  [true],
  [4, 5, 6]
]));

//Section D
console.log("Section D");

console.log("Question 1D");

function leastToGreatest(arr) {
  const result = arr.sort(function (num1, num2) {
    return num1 - num2;
  });
  return result;
};
console.log(leastToGreatest([8, 1, 9, 2, 6, 3, 5, 8]));

console.log("Question 2D");

function greatestToLeast(arr) {
  const result = arr.sort(function (num3, num4) {
    return num4 - num3;
  });
  return result;
};
console.log(greatestToLeast([1, 2, 4, 5, 7, 9]));

console.log("Question 3D");
function lengthSort(arr) {
  const result = arr.sort(function (a, b) {
    return a.length - b.length;
  });
  return result;
};
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));

console.log("Extra credit 1D");

function alphabetically(arr) {
  const result = arr.sort();
  return result;
}
console.log(alphabetically(["dog", "wolf", "by", "family", "eaten"]));


