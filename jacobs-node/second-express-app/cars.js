const express = require('express');
const cars = express.Router();

cars.get('/', (req, res) => {
    console.log(req.query);
    res.send('you hit the cars get endpoint')
})

cars.get('/:something', (req, res) => {
    console.log(req.params)
})

cars.post('/', (req, res) => {
    console.log(req.body);
    res.send('you hit the cars post endpoint')
})

module.exports = cars;