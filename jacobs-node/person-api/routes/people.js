const express = require('express');
const people = express.Router();

const peopleArray = [
    {firstName: 'jacob', lastName: 'plumb', age: 29},
    {firstName: 'james', lastName: 'plumb', age: 29},
    {firstName: 'jon', lastName: 'plumb', age: 30},
    {firstName: 'marie', lastName: 'plumb', age: 26},
    {firstName: 'david', lastName: 'plumb', age: 62},
]

people.get('/people', (req, res) => {
    res.send(peopleArray);
})

people.get('/people/:firstName', (req, res) => {
    const person = peopleArray.find(p => p.firstName == req.params.firstName);
    if (!person) {
        res.sendStatus(404);
    }
    res.send(person);
})

people.post('/people', (req, res) => {
    const person = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age
    }
    peopleArray.push(person);
    res.status(201).send(person);
})

people.get('/people-by-count', (req, res) => {
    console.log(req.query);
    res.send(peopleArray.slice(0, req.query.count));
})

module.exports = people;