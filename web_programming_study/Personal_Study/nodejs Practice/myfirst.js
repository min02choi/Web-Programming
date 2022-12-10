var http = require("http");     // http 모듈 임포트

http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "Text/html"});
    res.end("Hello World!");
}).listen(8080);

// req 객체는 요청에 관한 정보들을, res 객체는 응답에 관한 정보들을 담고 있다.
