const express = require('express');
const cars = express.Router();

let myCars = [
    { id: 1, make: 'Ford', model: 'Fusion' }
];

cars.get('/', (req, res) => {
    res.send(myCars);
})

cars.get('/:id', (req, res) => {
    const car = myCars.find(c => c.id == req.params.id);
    res.send(car);
})

cars.post('/', (req, res) => {
    const lastElementIndex = myCars.length - 1;
    const newId = myCars[lastElementIndex].id + 1;
    const newCar = { id: newId, make: req.body.make, model: req.body.model }
    myCars.push(newCar);
    res.send('add a car successful')
})

cars.put('/:id', (req, res) => {
    const car = myCars.find(car => car.id == req.params.id);
    const carIndex = myCars.indexOf(car);
    myCars[carIndex] = {id: car.id, make: req.body.make, model: req.body.model}
    res.send(`successfully updated car with id ${req.params.id}`)
})

cars.delete('/:id', (req, res) => {
    const car = myCars.find(car => car.id == req.params.id);
    const carIndex = myCars.indexOf(car);
    console.log(carIndex);
    myCars.splice(carIndex, 1);
    res.send('you deleted a car')
})

module.exports = cars;