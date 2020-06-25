var inventoryItems = [
    {
        product: {
            price: 10.00,
            name: 'motor'
        },
        quantity: 10
    },
    {
        product: {
            price: 12.50,
            name: 'sensor'
        },
        quantity: 4
    },
    {
        product: {
            price: 1.00,
            name: 'LED'
        },
        quantity: 20
    }
];
var calcInventoryValue = function (iItems) {
    var sum = 0;
    iItems.forEach(function (i) { return sum += i.product.price * i.quantity; });
    return sum;
};
var inventoryValue = calcInventoryValue(inventoryItems);
console.log(inventoryValue);
//# sourceMappingURL=inventory.js.map