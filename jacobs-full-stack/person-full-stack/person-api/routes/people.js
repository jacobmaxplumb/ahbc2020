const express = require('express');
const people = express.Router();

const peopleArray = [
    {id: 1, firstName: 'jacob', lastName: 'plumb', age: 29},
    {id: 2, firstName: 'james', lastName: 'plumb', age: 29},
    {id: 3, firstName: 'jon', lastName: 'plumb', age: 30},
    {id: 4, firstName: 'marie', lastName: 'plumb', age: 26},
    {id: 5, firstName: 'david', lastName: 'plumb', age: 62},
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
    const newId = peopleArray[peopleArray.length - 1].id + 1;
    const person = {
        id: newId,
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

people.delete('/people/:id', (req, res) => {
    const itemToDelete = peopleArray.find(p => p.id == req.params.id);
    const indexToDelete = peopleArray.indexOf(itemToDelete);
    peopleArray.splice(indexToDelete, 1);
    res.send(itemToDelete);
})

module.exports = people;