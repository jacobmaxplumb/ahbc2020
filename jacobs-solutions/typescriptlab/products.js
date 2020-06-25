var products = [];
var product1 = { name: 'prod1', price: 20 };
var product2 = { name: 'prod2', price: 10 };
products.push(product1);
products.push(product2);
var calcAverageProductPrice = function (p) {
    var sum = 0;
    p.forEach(function (prd) { return sum += prd.price; });
    return sum / p.length;
};
var averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);
//# sourceMappingURL=products.js.map