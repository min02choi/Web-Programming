var http = require("http");     // http 모듈 임포트

http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("Hello World");
}).listen(8080);