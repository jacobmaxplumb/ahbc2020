const http = require('http');
const port = 3000;
const random = require('./random-quote');

http.createServer((req, res) => {
    const quote = random.getQuote();
    res.write(quote)
    res.end()
}).listen(port, () => console.log(`server is listening on port ${port}`));