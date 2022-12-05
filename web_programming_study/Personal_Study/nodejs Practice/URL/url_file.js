var http = require("http");     // http 모듈 임포트
var url = require("url");
var fs = require("fs");

http.createServer(function(request, res) {
    var req = url.parse(request.url, true);
    var filename = "." + req.pathname;      // 경로 세팅

    fs.readFile(filename, function(err, data) {
        if (err) {      // 파일 읽기 시도
            res.writeHead(404, {"Content-Type": "text/html"});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        return res.end();
    });
}).listen(8080);
