//.map()
//Executes a given function on every element 0f an array and returns the new array
//Multiplying array
const numbers = [1, 2, 3, 4, 5];

const numbersDouble = numbers.map(double);

function double(value, index, arr) {
  return value * 2;
};
console.log(numbersDouble);

//Multiply value by index

const numbers2 = [1, 2, 3, 4, 5];
const numbersDouble2 = numbers2.map(multiply);
function multiply(value2, index2, arr2) {
  return value2 * index2;
}
console.log(numbersDouble2);

//Finding the value of products. Count * price

const products = [
  {
    name: "laptop",
    price: 1000,
    count: 5
  },
  {
    name: "desktop",
    price: 1500,
    count: 2
  },
  {
    name: "phone",
    price: 500,
    count: 10
  }
];
const totalProductsValue = products.map(item => item.price * item.count);
console.log(totalProductsValue);

///Finding the value of products. Count * price and creating an array

const products2 = [
  {
    name: "laptop",
    price: 1000,
    count: 5
  },
  {
    name: "desktop",
    price: 1500,
    count: 2
  },
  {
    name: "phone",
    price: 500,
    count: 10
  }
];
const totalProductsValue2 = products2.map(item => ({
  name: item.name,
  totalValue: item.price * item.count
}));
console.log(totalProductsValue2);


//Clears console
console.clear();

//Converting array of string numbers to array of numbers

const str = ["1", "2", "3"];
const numbers3 = str.map(Number);
console.log(numbers3);

//.filter()
//Creates a new array by removing all the element for which the callback function returns a false value, a test of the items of an arrary,if the item from the array turns true for a callback then we keep it, otherwise we remove it
//Creating array with only even numbers from numbers4 array
const numbers4 = [1, 2, 3, 4, 5, 6];

const even = numbers4.filter(isEven);

function isEven(value3) {
  return value3 % 2 === 0;
};

console.log(even);


//If old enough
const people = [
  {
    name: "Florin",
    age: 26
  },
  {
    name: "Ivan",
    age: 18
  },
  {
    name: "Jai",
    age: 15
  }
];
const adults = people.filter(person => person.age >= 18);
console.log(adults);

//Removing duplicates from array

const numbers5 = [1, 2, 3, 2, 1, 3, 3, 5, 4, 6];
const nums = numbers5.filter((value, index, arr) => {
  return arr.indexOf(value) === index;
})
console.log(nums);

//.reduce()
//Executes a callback function on every elements of a an will return one single output value, getting an array of items and adding all of them items inside one resulting value

//Adding array
const numbers6 = [1, 2, 3, 4, 5, 6, 7];
//Syntax const toatl = numbers6.reduce(callback, initialValue);
const total = numbers6.reduce(sum, 0);
//Syntax function sum(accumulator, value, index, arr)
function sum(accumulator, value) {
  return accumulator + value;
};
console.log(total);

//Getting maximum from array

const numbers7 = [10, 2, 3, 4, 5, 6];
const max = numbers7.reduce(callBack, -Infinity);
function callBack(accumulator2, value) {
  if (accumulator2 > value) {
    return accumulator2;
  } else {
    return value;
  }
};
console.log(max);

//Finding value of all the products

const store = [
  {
    products: "laptop",
    value: 1000,
    count: 3
  },
  {
    products: "desktop",
    value: 1500,
    count: 4
  },
  {
    products: "phone",
    value: 500,
    count: 10
  }
];
const totalValueStore = store.reduce((acc, item) => acc + (item.value * item.count), 0);
console.log(totalValueStore);

//.sort()
//Sorts the elements of a array by manipulating the array, the default sort order is ascending, it will convert the element from the array to strings and then it will compare the sequences of utf

//Sorting names alphabetically
const names = ['Florin', 'Liam', 'Jai', 'Ivan'];
names.sort();
console.log(names);

//Sorting numbers, must create compare functions

const numbers8 = [74, 6, 8, 1000, 5000, 1];
numbers8.sort(compareFunction);
function compareFunction(a, b) {
  //1. < 0 .... a comes first
  //2. 0 ... nothing happens
  //3. > 0 ... b comes first

  return a - b;
};
console.log(numbers8);


//Sorting array by price 
const products3 = [
  {
    name: 'laptop',
    price: 1000
  },
  {
    name: 'desktop',
    price: 1500
  },
  {
    name: 'phone',
    price: 500
  }

];

products3.sort((a, b) => {
  return a.price - b.price;
});
console.log(products3);
// If you want them to sort in desending order change to b.price - a.price, also you can remove the return becase you have a arrow function


//.forEach()
//Executes a given function on every element from a array

//Printing each element on terminal
const numbers9 = [1, 2, 3, 4, 5, 6, 7, 8];
numbers9.forEach(consoleItem);
function consoleItem(item, index, arr) {
  console.log(item);
};

//Printing each element on terminal plus the index
const numbers10 = [1, 2, 3, 4, 5, 6, 7, 8];
numbers10.forEach(consoleItem2);
function consoleItem2(item, index, arr) {
  console.log('a[' + index + '] = ' + item);
};

//Using an arrow function to print each element on terminal plus the index

console.log("Creating space so you see the diffrence")
const numbers11 = [1, 2, 3, 4, 5, 6, 7, 8];
numbers11.forEach((item, index, arr) => {
  console.log('a[' + index + '] = ' + item);
});

//Calculating sum of an array
const numbers12 = [1, 2, 3, 4];
let sum2 = 0;
numbers12.forEach(item => {
  sum2 += item;
});
console.log(sum2);

//See how many times a letter appears in a array
const letters = ['a', 'b', 'a', 'b', 'c', 'd', 'a'];

let count2 = {};
letters.forEach(item => {
  if (count2[item]) {
    count2[item]++;
  } else {
    count2[item] = 1;
  }
});
console.log(count2);

//.find
//Will search inside of the array and will return the first element for with the callback function returns a true to value

//Finding and returning an element from an array
const names4 = ['Florin', 'Liam', 'Ivan'];
//Syntax function findIvan(item, index, arr)
function findIvan(item) {
  return item === 'Ivan';
}
const res = names4.find(findIvan);
console.log(res);

//Returning multiple element from an array of objects

const persons = [
  {
    name: 'Flo',
    age: 25
  },
  {
    name: 'Iva',
    age: 20
  },
  {
    name: 'Liam',
    age: 18
  }
];

const res2 = persons.find(findFlo);
function findFlo(person2) {
  return person2.name === 'Flo';
}
console.log(res2);
//Syntax for just finding age :
// const age = persons.find(findFlo).age;
//function findFlo(person2){
//return person2.name === 'Flo';
//}
//console.log(age);



//.findIndex()
// Finds element and returns the index

const numbers13 = [1, 2, 3, 4, 5];

const result = numbers13.findIndex(findThree);

function findThree(value) {
  return value === 3;
}

console.log(result);

//.some()
//Executes a given function on the element of the arrayand returns true if the callback function returns a true to value for atleast one element inside the array


//Checking if one of the elements is greater than 4
const numbers14 = [1, 2, 3, 4, 5];

const result2 = numbers14.some(greaterThanFour);

function greaterThanFour(item) {
  return item > 4;
};
console.log(result2);
//Returns true because 5 is in the array, if 5 was not there, it would return false


//Checking if there is anyone 18 and over in array. Returns true because there is

const peeps = [
  {
    name: 'Flo',
    age: 25
  },
  {
    name: 'Iva',
    age: 20
  },
  {
    name: 'Liam',
    age: 18
  }
];

const result3 = peeps.some(isAdult);

function isAdult(peep) {
  return peep.age >= 18;
}
console.log(result3);


//.every()
//Executes a given function on every item of an array and returns true only if the callback function retuns a true to value for ALL the items inside the array

const numbers15 = [1, 2, 3, 4, 5];

const result4 = numbers15.every(isPositive)
function isPositive(item) {
  return item > 0;
}
console.log(result4);
//Returns true because EVERY number in the array is greater than 0

//Checking if all of the objects inside the array have the name property
const peeps2 = [
  {
    name: 'Flo'

  },
  {
    name: 'Iva'

  },
  {
    name: 'Liam'

  },
  {
    surname: 'Van'
  }
];

const result5 = peeps2.every(peep2 => peep2.name !== undefined);

console.log(result5);
//Returns false becasue of surname

//Checking if all the arrays are arrays inside const arrys2

const arrys2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const result6 = arrys2.every(arr => Array.isArray(arr));
console.log(result6);





