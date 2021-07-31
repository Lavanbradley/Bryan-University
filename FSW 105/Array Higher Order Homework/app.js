//Section A
console.log('Section A');

//Question 1
console.log('Question 1');

const fiveAndUp = [1, 4, 5, 7, 9, 10];

function fiveAndGreater(num) {
  return num > 5;
};

const fiveUp = fiveAndUp.filter(fiveAndGreater);

console.log(fiveUp);

//Question 2
console.log('Question 2');

const evenAndOdd = [1, 2, 3, 4, 5, 6]

const even = evenAndOdd.filter(evensOnly);

function evensOnly(value) {
  return value % 2 === 0;
};

console.log(even);

//Extra Credit
console.log("Extra credit");

const ofAge = [
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
];

const adults = ofAge.filter(person => person.age >= 18);
console.log(adults);


//Section B
console.log("Section B");

//Question 1
console.log("Question 1");

const numbersDouble = [2, 4, 6, 8];

function doubleNumbers(x) {
  return x * 2;
}
const doubled = numbersDouble.map(doubleNumbers);
console.log(doubled);

//Question 2
console.log("Question 2");

const numbersToString = [1, 2, 3, 4, 5, 6];

function stringItUp(arr) {
  return arr.toString();
};

const string = numbersToString.map(stringItUp);
console.log(string);

//Question 3
console.log("Question 3");

const names = ["janak", "van", "carina", "aaralyn"];

function capitalizeNames(arry) {
  return arry.toUpperCase();
};

const upper = names.map(capitalizeNames);
console.log(upper);


//Extra Credit
console.log("Extra credit 1");

const nameArray = [
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
];

function namesOnly(justNames) {
  return justNames.name;
}
const result = nameArray.map(namesOnly);
console.log(result);


console.log("Extra credit 2");

const nameArray2 = [
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
];

//Section C
console.log("Section C");

//Question 1
console.log("Section 1");

const totalOfAll = [10, 20, 30, 40];

function total(accumulator, value) {
  return accumulator + value;
};

const addedUp = totalOfAll.reduce(total);
console.log(addedUp);

//Question 2
console.log("Question 2");

const numbersAndStrings = [5, 6, 7, 8];

function stringConcat(concat) {
  return concat.toString();
};

const newString = numbersAndStrings.reduce(stringConcat);
console.log(newString);


//Question 3
console.log("Question 3");

var voters = [
  {
    name: "Bob",
    age: 30,
    voted: true
  },
  {
    name: "Jake",
    age: 32,
    voted: true
  },
  {
    name: "Kate",
    age: 25,
    voted: false
  },
  {
    name: "Sam",
    age: 20,
    voted: false
  },
  {
    name: "Phil",
    age: 21,
    voted: true
  },
  {
    name: "Ed",
    age: 55,
    voted: true
  },
  {
    name: "Tami",
    age: 54,
    voted: true
  },
  {
    name: "Mary",
    age: 31,
    voted: false
  },
  {
    name: "Becky",
    age: 43,
    voted: false
  },
  {
    name: "Joey",
    age: 41,
    voted: true
  },
  {
    name: "Jeff",
    age: 30,
    voted: true
  },
  {
    name: "Jack",
    age: 19,
    voted: false
  },
];

//Extra credit
console.log("Extra credit 1");

var wishlist = [
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
];

const totalValueWishlist = wishlist.reduce((acc, item) => acc + item.price, 0);
console.log(totalValueWishlist);

console.log("Extra credit 2");

var arrays = [
  [1, 2, 3],
  [true],
  ['4', '5', '6']
];

const res = arrays.flat(2);
console.log(res);


//Section D
console.log("Section D");

//Question 1
console.log("QUestion 1");

const sortingArray = [9, 2, 7, 4, 11, 1000, 5];

function leastToGreatest(a, b) {
  return a - b;
};

const sorted = sortingArray.sort(leastToGreatest);
console.log(sorted);

//Question 2
console.log("Question 2");

const sortingArray2 = [2, 9000, 8000, 1, 50, 678];

function greatestToLeast(a, b) {
  return b - a;
};

const sorted2 = sortingArray2.sort(greatestToLeast);
console.log(sorted2);

//Question 3
console.log("Question 3");

const sortBy = ["cars", "dog", "extract", "detail", "do"];

function lengthSort(a, b) {
  return a.length - b.length;
};

const stringSort = sortBy.sort(lengthSort);
console.log(stringSort);


//Extra credit
console.log("Extra credit");

let makeAlphabetically = ["egale", "spirit", "apple", "dog", "up"];
makeAlphabetically.sort();
console.log(makeAlphabetically);




