var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var cart = [];
  var price = Math.floor(Math.random() * 100);
 var obj = {[item]: price};
 cart.push(obj);
console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
