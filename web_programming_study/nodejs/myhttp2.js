var http = require("http");

http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h2>Hello World!</h2>");
    res.end();
}).listen(8080);
