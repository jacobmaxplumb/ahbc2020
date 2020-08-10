// require the Express module
const express = require("express");

//creates a new router object
const cartRoutes = express.Router();

const items = [
  { id: 1, product: "Apple", price: 0.99, quantity: 10 },
  { id: 2, product: "Cinnamon", price: 2.99, quantity: 1 },
  { id: 3, product: "Cheese", price: 1.5, quantity: 2 },
  { id: 4, product: "Cucumber", price: 1.5, quantity: 2 },
  { id: 5, product: "Cheese", price: 1.5, quantity: 2 },
  { id: 6, product: "Cheese", price: 1.5, quantity: 2 },
  { id: 7, product: "Cheese", price: 1.5, quantity: 2 },
];
// keep track of next ID. this will increment each time an item is added.
let nextId = 4;

cartRoutes.get("/cart-items", (req, res) => {
  let cartItems = items;
  if (req.query.maxPrice) {
    cartItems = cartItems.filter((item) => item.price <= req.query.maxPrice);
  }
  if (req.query.prefix) {
    cartItems = cartItems.filter((item) =>
      item.product.startsWith(req.query.prefix)
    );
  }
  if (req.query.pageSize) {
    cartItems = cartItems.slice(0, req.query.pageSize);
  }
  // .json sends response as JSON
  res.status(200);
  res.json(cartItems);
});

// route
cartRoutes.get("/cart-items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  // Find by ID
  const item = items.find((item) => item.id === id);
  if (item) {
    res.json(item);
  } else {
    // Set response code to 404
    res.status(404);
    res.send(`ID ${id} Not Found`);
  }
});

// route
cartRoutes.post("/cart-items", (req, res) => {
  const item = req.body;
  // Set a new unique ID and increment nextId
  item.id = nextId;
  nextId++;
  items.push(item);
  // Set response code to 201
  res.status(201);
  res.json(item);
  res.send(<p>Hey this is my JSON data</p>);
});

// route
cartRoutes.put("/cart-items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = req.body;
  item.id = id;
  // Find Index by ID
  const index = items.findIndex((item) => item.id === id);
  // Replace at index
  items.splice(index, 1, item);
  res.json(item);
});

// route
cartRoutes.delete("/cart-items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex((item) => item.id === id);
  items.splice(index, 1);
  // Set response code to 204. Send no content.
  res.sendStatus(204);
});

module.exports = { cartRoutes };
