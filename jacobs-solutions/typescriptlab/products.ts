// 1
interface Product {
    name: string;
    price: number;
}

//2
const products: Product[] = [];

//3
const product1: Product = {name: 'prod1', price: 20};
const product2: Product = {name: 'prod2', price: 10};

products.push(product1);
products.push(product2);

// 4
const calcAverageProductPrice = (p: Product[]): number => {
    let sum: number = 0;
    p.forEach(prd => sum += prd.price);
    return sum / p.length;
}

// 5
const averagePrice: number = calcAverageProductPrice(products);

// 6
console.log(averagePrice);