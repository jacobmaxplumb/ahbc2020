const http = require('http');

http.createServer((req, res) => {
    const randomFacts = ['random 1', 'random2'];
    res.write('<h1>random fact about me</h1>');
    res.end();
}).listen(8888)