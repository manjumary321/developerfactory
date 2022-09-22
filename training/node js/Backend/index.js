var http = require("http");
http
  .createServer(function (req, res) {
    let a = 10;
    let b = 20;
    let sum = a + b;
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Sum=" + sum);
    res.end();
  })
  .listen(4000);