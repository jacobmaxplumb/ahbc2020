const express = require('express');
const port = 3000;
const app = express();
const cars = require('./routes/cars');
const cors = require('cors');

app.use(cors());

app.use(express.json());

app.use('/cars', cars);

app.listen(port, () => console.log(`listening on port: ${port}`));