var https = require("https");
var fs = require("fs");
var options = {
  key: fs.readFileSync("localhost.key"),
  cert: fs.readFileSync("localhost.crt")
};

https
  .createServer(options, function (req, res) {
    res.writeHead(200);
    res.end("Welcome to Node.js HTTPS Server");
  })
  .listen(8443);
