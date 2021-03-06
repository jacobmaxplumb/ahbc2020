interface InventoryItem {
    product: Product;
    quantity: number;
}

const inventoryItem: InventoryItem = {
    product: {
        name: 'string',
        price: 2
    },
    quantity: 4,
}

const inventoryItems: InventoryItem[] = [
    {
        product: {
            price: 10.00,
            name: 'motor'
        },
        quantity: 10
    },
    {
        product: 
        {
            price: 12.50,
            name: 'sensor'
        },
        quantity: 4
    },
    {
        product: 
        {
            price: 1.00,
            name: 'LED'
        },
        quantity: 20
    }
];

const calcInventoryValue = (iItems: InventoryItem[]): number => {
    let sum: number = 0
    iItems.forEach(i => sum += i.product.price * i.quantity);
    return sum;
}

const inventoryValued: number = calcInventoryValue(inventoryItems);

console.log(inventoryValued);

