const express = require('express');
const app = express();
const students = require('./routes/students');

app.use(express.json());
app.use('/', students);

app.get('/students-by-count', (req, res) => {
    res.send('hello');
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})