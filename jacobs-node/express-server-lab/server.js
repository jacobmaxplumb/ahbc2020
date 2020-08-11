const express = require('express');
const app = express();
const cartItems = require('./routes/cart-items');
const port = 3000;

app.use(express.json());
app.use('/cart-items', cartItems);

app.listen(port, () => console.log(`listening on port ${port}`));