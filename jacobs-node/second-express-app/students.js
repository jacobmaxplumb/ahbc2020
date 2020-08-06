const express = require('express');
const students = express.Router();

students.get('/', (req, res) => {
    res.send('you hit the students get endpoint')
})

students.post('/', (req, res) => {
    res.send('you hit the students post endpoint')
})

module.exports = students;