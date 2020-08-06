const express = require('express');

const app = express();

app.get('/cars', (req, res) => {
    res.send('you hit get cars')
})

app.post('/cars', (req, res) => {
    
    res.send(req.body.myprop1);
})

const port = 3000;

app.listen(port, () => console.log(`running on port ${port}`));