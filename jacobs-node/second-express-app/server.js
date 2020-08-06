const express = require('express');
const cars = require('./cars');
const students = require('./students');
const app = express();

app.use(express.json());
app.use('/cars', cars);
app.use('/students', students);

// app.get('/cars', (req, res) => {
//     res.send('you hit the cars endpoint for get')
// })

// app.post('/cars', (req, res) => {
//     res.send('you hit the cars endpoint for post')
// })

app.listen(8888, () => console.log('listening on port 8888'));