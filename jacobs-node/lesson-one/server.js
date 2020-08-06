const http = require('http');

// http.createServer(function(req, res) {

// })

http.createServer((req, res) => {
    const myvar = 'something'
    res.writeHead(200, { "Content-type": "text/plain" })
    res.write('only writes text, want to double check that');
    res.end();
}).listen(8888, () => console.log('listening on port 8888'));