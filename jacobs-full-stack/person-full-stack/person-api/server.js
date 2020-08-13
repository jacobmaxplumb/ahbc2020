const express = require('express');
const people = require('./routes/people');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/', people);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})