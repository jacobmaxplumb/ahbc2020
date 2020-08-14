const express = require('express');
const cartItems = express.Router();

const cartItemArray = [
    { id: 1, product: 'razor', price: 3, quantity: 2 },
    { id: 2, product: 'bottle', price: 4, quantity: 4 },
    { id: 3, product: 'book', price: 10, quantity: 2 },
    { id: 4, product: 'desk', price: 25, quantity: 3 }
];

// GET localhost:3000/cart-items?prop=value
cartItems.get('/', (req, res) => {
    // get a copy of cart item
    let cartItemsToSend = cartItemArray;

    // if max price is passed in as a query param
    if (req.query.maxPrice) {
        cartItemsToSend = cartItemsToSend.filter(c => c.price <= req.query.maxPrice);
    }
    // if prefix is passed in as a query param
    if (req.query.prefix) {
        cartItemsToSend = cartItemsToSend.filter(c => c.product.startsWith(req.query.prefix));
    }
    // if page size is passed in as a query param
    if (req.query.pageSize) {
        cartItemsToSend = cartItemsToSend.slice(0, req.query.pageSize);
    }
    res.send(cartItemsToSend);
})

// GET localhost:3000/cart-items/3
cartItems.get('/:id', (req, res) => {
    const cartItem = cartItemArray.find(c => c.id == req.params.id);
    if(!cartItem) {
        res.sendStatus(404);
    }
    res.send(cartItem);
})

// POST localhost:3000/cart-items/3 - have a body of data {}
cartItems.post('/', (req, res) => {
    const lastIndex = cartItemArray.length - 1;
    const lastItemsId = cartItemArray[lastIndex].id;
    const newCartItem = {
        id: lastItemsId + 1,
        product: req.body.product,
        price: req.body.price,
        quantity: req.body.quantity
    }
    cartItemArray.push(newCartItem);
    res.send({data: newCartItem});
})

// PUT localhost:3000/cart-items/3
cartItems.put('/:id', (req, res) => {
    console.log(req.body);
    const itemWithCorrectId = cartItemArray.find(c => c.id == req.params.id);
    const indexOfCorrectItem = cartItemArray.indexOf(itemWithCorrectId);
    cartItemArray[indexOfCorrectItem] = {
        id: itemWithCorrectId.id,
        product: req.body.product,
        price: req.body.price,
        quantity: req.body.quantity,
    }
    res.send(cartItemArray[indexOfCorrectItem]);
})

// DELETE localhost:3000/cart-items/3
cartItems.delete('/:id', (req, res) => {
    const itemWithCorrectId = cartItemArray.find(c => c.id == req.params.id);
    const indexOfCorrectItem = cartItemArray.indexOf(itemWithCorrectId);
    cartItemArray.splice(indexOfCorrectItem, 1);
    res.sendStatus(204);
})

module.exports = cartItems;