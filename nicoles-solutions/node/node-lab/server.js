const http = require("http");
const port = 8888;
const { randomQuote, quotes } = require("./quotes");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.write(randomQuote(quotes));
    res.end();
  })
  .listen(port, () => {
    console.log(`listening on port ${port}`);
  });
