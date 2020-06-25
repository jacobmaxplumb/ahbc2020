interface Mountain {
  name: string;
  height: number;
}

const mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

function findNameOfTallestMountain(array: Mountain[]): string {
  let tallestMtn = mountains[0];
  array.forEach((mtn) => {
    if (mtn.height > tallestMtn.height) {
      tallestMtn = mtn;
    }
  });
  return tallestMtn.name;
}
console.log(findNameOfTallestMountain(mountains));

interface Product {
  name: string;
  price: number;
}
const products: Product[] = [
  { name: "phone", price: 800 },
  { name: "Laptop", price: 1800 },
  { name: "Shoes", price: 120 },
];

function calcAvgProductPrice(array: Product[]): number {
  let totalPrices = 0;
  array.forEach((item) => {
    totalPrices += item.price;
  });
  return totalPrices / array.length;
}
let productAvg = calcAvgProductPrice(products);
console.log(productAvg);

interface InventoryItem {
  product: Product;
  quantity: number;
}
const inventory: InventoryItem[] = [
  { product: { name: "motor", price: 10.0 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 },
];

function calcInventoryValue(array: InventoryItem[]): number {
  let totalValue = 0;
  array.forEach((item) => {
    totalValue += item.product.price * item.quantity;
  });
  return totalValue;
}
let valueItems = calcInventoryValue(inventory);
console.log(valueItems);
