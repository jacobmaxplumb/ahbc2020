const express = require('express');
const students = express.Router();

const studentsArray = [
    { firstName: 'jacob', lastName: 'plumb', age: 29, gpa: 3.9 },
    { firstName: 'jacob1', lastName: 'plumb', age: 29, gpa: 3.9 },
    { firstName: 'jacob2', lastName: 'plumb', age: 29, gpa: 3.9 },
    { firstName: 'jacob3', lastName: 'plumb', age: 29, gpa: 3.9 },
    { firstName: 'jacob4', lastName: 'plumb', age: 29, gpa: 3.9 },
]

students.get('/students-by-count', (req, res) => {
    console.log('hit')
    const count = req.query.count;
    const students = studentsArray.slice(0, count);
    res.send(students);
})

students.get('/students', (req, res) => {
    res.send(studentsArray);
})

students.get('/students/:lastName', (req, res) => {
    const student = studentsArray.find(s => s.lastName == req.params.lastName);
    if (!student) {
        res.sendStatus(404);
    }
    res.send(student);
})

students.post('/students', (req, res) => {
    const newStudent = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        gpa: req.body.gpa,
    }
    studentsArray.push(newStudent);
    res.status(201).send(newStudent);
})

module.exports = students