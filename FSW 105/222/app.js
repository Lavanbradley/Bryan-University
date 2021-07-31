var shopper = {
  name: "Van",
  age: 31,
  hasCreditCard: true,
  groceryCart: ["Milk", "Eggs", "Bread", "Bannas"],
  listCartItems: function(){
    return this.name +  " is of age: " + this.age +  " and has access to a credit card: " + this.hasCreditCard
 + " and just purchased these items: " + this.groceryCart;
  }
}

console.log(shopper.listCartItems() );