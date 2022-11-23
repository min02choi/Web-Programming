var http = require("http");

http.createServer(function(req, res) {
    res.write("<h2>Hello World!</h2>>");
    res.end();
}).listen(8080);
