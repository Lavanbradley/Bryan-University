const items = [
  { name: 'bike', price: 100 },
  { name: 'tv', price: 200 },
  { name: 'album', price: 10 },
  { name: 'book', price: 5 },
  { name: 'phone', price: 500 },
  { name: 'computer', price: 1000 },
  { name: 'keyboard', price: 25 }
];

//Filter under 100
// Variable with single function and one parameter called item
const filteredItems = items.filter((items) => {
  return items.price <= 100
})
console.log(filteredItems);
//Note: items array unchanged
console.log(items);

//Map to get only names
const items2 = [
  { name: 'bike', price: 100 },
  { name: 'tv', price: 200 },
  { name: 'album', price: 10 },
  { name: 'book', price: 5 },
  { name: 'phone', price: 500 },
  { name: 'computer', price: 1000 },
  { name: 'keyboard', price: 25 }
];

const itemName = items.map((items2) => {
  return items2.name
})
console.log(itemName);


//Find 
const items3 = [
  { name: 'bike', price: 100 },
  { name: 'tv', price: 200 },
  { name: 'album', price: 10 },
  { name: 'book', price: 5 },
  { name: 'phone', price: 500 },
  { name: 'computer', price: 1000 },
  { name: 'keyboard', price: 25 }
];
const foundItem = items.find((items3) => {
  return items3.name === 'album';
})
console.log(foundItem)


//Foreach does not return anything

const items4 = [
  { name: 'bike', price: 100 },
  { name: 'tv', price: 200 },
  { name: 'album', price: 10 },
  { name: 'book', price: 5 },
  { name: 'phone', price: 500 },
  { name: 'computer', price: 1000 },
  { name: 'keyboard', price: 25 }
];

items4.forEach((items4) => {
  console.log(items4.price)
})

//Some return true or false
const items5 = [
  { name: 'bike', price: 100 },
  { name: 'tv', price: 200 },
  { name: 'album', price: 10 },
  { name: 'book', price: 5 },
  { name: 'phone', price: 500 },
  { name: 'computer', price: 1000 },
  { name: 'keyboard', price: 25 }
];

const hasInexpensiveItems = items5.some((items5) => {
  return items5.price <= 100;
});
console.log(hasInexpensiveItems);

//Reduce takes a item and a property that we want to reduce everything into. Also takes second parameter which will be our starting point: 0
const items6 = [
  { name: 'bike', price: 100 },
  { name: 'tv', price: 200 },
  { name: 'album', price: 10 },
  { name: 'book', price: 5 },
  { name: 'phone', price: 500 },
  { name: 'computer', price: 1000 },
  { name: 'keyboard', price: 25 }
];

const total = items6.reduce((currentTotal, items6) => {
  return items6.price + currentTotal;
}, 0);
console.log(total);

//Includes
const items7 = [1, 2, 3, 4, 5];
const includesTwo = items7.includes(2);
console.log(includesTwo);


