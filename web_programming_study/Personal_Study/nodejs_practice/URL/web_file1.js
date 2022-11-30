var http = require("http");     // http 모듈 임포트
var url = require("url");
var fs = require("fs");

var port = 8080;        // 포트 번호 지정
var myserver = http.createServer();

// listen(8080)이랑 같은 의미
myserver.listen(port, function() {
    console.log("나의 웹서버 시작: %d", port);
});

// 클라이언트가 접속하여 연결이 만들어 질 떄 발생
myserver.on("connection", function(socket) {
    var addr = socket.address();
    console.log("클라이언트 접속: %s %d", addr.address, addr.port);
});

// 클라이언트가 요청할 떄 발생
myserver.on("request", function(request, res) {
    var req = url.parse(request.url, true);
    var page = req.pathname;

    console.log("HTML 문서 요청 %s", page);
    var filename = "." + page;

    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {"Content-Type": "text/html"});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        return res.end();
    });
});

// 서버를 종료할 떄 발생
myserver.on("close", function() {
    console.log("나의 웹서버 종료");
});
