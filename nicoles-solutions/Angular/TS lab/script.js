var mountains = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];
function findNameOfTallestMountain(array) {
  var tallestMtn = mountains[0];
  array.forEach(function (mtn) {
    if (mtn.height > tallestMtn.height) {
      tallestMtn = mtn;
    }
  });
  return tallestMtn.name;
}
console.log(findNameOfTallestMountain(mountains));
var products = [
  { name: "phone", price: 800 },
  { name: "Laptop", price: 1800 },
  { name: "Shoes", price: 120 },
];
function calcAvgProductPrice(array) {
  var totalPrices = 0;
  array.forEach(function (item) {
    totalPrices += item.price;
  });
  return totalPrices / array.length;
}
var productAvg = calcAvgProductPrice(products);
console.log(productAvg);
var inventory = [
  { product: { name: "motor", price: 10.0 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 },
];
function calcInventoryValue(array) {
  var totalValue = 0;
  array.forEach(function (item) {
    totalValue += item.product.price * item.quantity;
  });
  return totalValue;
}
let valueItems = calcInventoryValue(inventory);
console.log(valueItems);
