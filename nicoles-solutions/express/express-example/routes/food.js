const express = require("express");
const foodRoutes = express.Router();

const food = [
  {
    id: 0,
    name: "spinach",
    type: "vegetable",
  },
  {
    id: 1,
    name: "pickle",
    type: "vegetable",
  },
  {
    id: 2,
    name: "tomato",
    type: "fruit",
  },
  {
    id: 3,
    name: "coconut",
    type: "nut",
  },
];

foodRoutes.get("/food", (request, response) => {
  response.json(food);
});

foodRoutes.get("/food/:id", (request, response) => {
  let id = parseInt(request.params.id);
  let foundFood = food.find((item) => id === item.id);
  if (foundFood) {
    response.json(foundFood);
  } else {
    response.status(404);
    response.send(`No food by id: ${id}`);
  }
});
let nextId = 4;
//create endpoint for POST of food

foodRoutes.post("/food", (request, response) => {
  let newFood = request.body;
  newFood.id = nextId;
  nextId++;
  food.push(newFood);
  response.status(201);
  response.json(food);
});

//create endpoint for PUT of food
foodRoutes.put("/food/:id", (request, response) => {
  let id = parseInt(request.params.id);
  let updatedFood = request.body;
  updatedFood.id = nextId;
  let index = food.findIndex((item) => id === item.id);
  if (index > -1) {
    food.splice(index, 1, updatedFood);
    nextId++;
    response.json(food);
  } else {
    response.status(404);
    response.send(`There is no food by id: ${id}`);
  }
});

//create endpoint for DELETE of foods
foodRoutes.delete("/food/:id", (request, response) => {
  let id = parseInt(request.params.id);
  let index = food.findIndex((item) => id === item.id);
  if (index > -1) {
    food.splice(index, 1);
    response.sendStatus(204);
  } else {
    response.status(404);
    response.send(`There is no food by id: ${id}`);
  }
});

module.exports = foodRoutes;
